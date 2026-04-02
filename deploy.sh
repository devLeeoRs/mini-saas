#!/bin/bash
set -e
cd "$(dirname "$0")"

echo ""
echo "============================================================"
echo "  DEPLOY - Sistema Pedido Ferragem (Docker)"
echo "============================================================"
echo ""

# Garante que o .env existe
if [ ! -f .env ]; then
  echo "ERRO: arquivo .env não encontrado!"
  echo "Copie o .env.example e preencha as variáveis:"
  echo "  cp .env.example .env && nano .env"
  exit 1
fi

# Build e sobe o container
echo "[1/2] Buildando a imagem Docker..."
docker compose build --no-cache

echo ""
echo "[2/2] Subindo o container..."
docker compose up -d

echo ""
echo "============================================================"
echo "  Deploy concluído!"
echo "  App: https://app.ferragemoliveira.com.br"
echo "  Logs: docker compose logs -f ferragem"
echo "============================================================"
echo ""
