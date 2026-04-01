#!/bin/bash
set -e
cd "$(dirname "$0")"

echo ""
echo "============================================================"
echo "  DEPLOY - Sistema Pedido Ferragem"
echo "============================================================"
echo ""

# ── 1. Dependencias do backend ────────────────────────────────
echo "[1/3] Instalando dependencias do backend..."
cd backend
npm install --omit=dev
cd ..

# ── 2. Build do frontend ──────────────────────────────────────
echo ""
echo "[2/3] Buildando o frontend..."
cd frontend
npm install
npm run build
cd ..

# ── 3. PM2 ───────────────────────────────────────────────────
echo ""
echo "[3/3] Iniciando/Reiniciando PM2..."
mkdir -p logs

if pm2 describe pedido-ferragem > /dev/null 2>&1; then
  pm2 restart ecosystem.config.js --update-env
else
  pm2 start ecosystem.config.js
fi

pm2 save

echo ""
echo "============================================================"
echo "  Deploy concluido! Rodando na porta 3001."
echo "============================================================"
echo ""
