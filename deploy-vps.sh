#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo ""
echo "============================================================"
echo "  DEPLOY VPS - Mini SaaS (Docker + Traefik)"
echo "============================================================"
echo ""

if ! command -v docker >/dev/null 2>&1; then
  echo "ERRO: Docker nao encontrado. Instale o Docker e tente novamente."
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "ERRO: Docker Compose (plugin) nao encontrado."
  echo "Instale o Docker Compose plugin e tente novamente."
  exit 1
fi

if [ ! -f backend/.env ]; then
  if [ -f .env.example ]; then
    cp .env.example backend/.env
    echo "Arquivo backend/.env criado a partir de .env.example."
    echo "Edite o backend/.env antes de continuar (DB_PASSWORD e DATABASE_URL)."
  else
    echo "ERRO: backend/.env nao encontrado."
    echo "Crie o arquivo com as variaveis do banco antes de continuar."
  fi
  exit 1
fi

missing_networks=()
for net in n8n_default; do
  if ! docker network inspect "$net" >/dev/null 2>&1; then
    missing_networks+=("$net")
  fi
done

if [ "${#missing_networks[@]}" -gt 0 ]; then
  echo "ERRO: Rede Docker externa nao encontrada: ${missing_networks[*]}"
  echo "Verifique o nome da rede do Traefik no docker-compose do n8n."
  echo "Se o nome for diferente, atualize docker-compose.yml neste repo."
  exit 1
fi

echo "[1/2] Buildando a imagem Docker..."
docker compose build --no-cache

echo ""
echo "[2/2] Subindo o container..."
docker compose up -d

echo ""
echo "============================================================"
echo "  Deploy concluido!"
echo "  Logs: docker compose logs -f ferragem"
echo "============================================================"
echo ""
