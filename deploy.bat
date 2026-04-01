@echo off
setlocal
cd /d "%~dp0"

echo.
echo ============================================================
echo   DEPLOY - Sistema Pedido Ferragem
echo ============================================================
echo.

:: ── 1. Dependencias do backend ───────────────────────────────
echo [1/3] Instalando dependencias do backend...
cd backend
call npm install --omit=dev
if %errorlevel% neq 0 ( echo ERRO nas dependencias do backend & pause & exit /b 1 )
cd ..

:: ── 2. Build do frontend ─────────────────────────────────────
echo.
echo [2/3] Buildando o frontend...
cd frontend
call npm install
if %errorlevel% neq 0 ( echo ERRO no npm install do frontend & pause & exit /b 1 )
call npm run build
if %errorlevel% neq 0 ( echo ERRO no build do frontend & pause & exit /b 1 )
cd ..

:: ── 3. PM2 ───────────────────────────────────────────────────
echo.
echo [3/3] Iniciando/Reiniciando PM2...

:: Cria pasta de logs se nao existir
if not exist "logs" mkdir logs

pm2 describe pedido-ferragem >nul 2>&1
if %errorlevel% equ 0 (
  echo   Reiniciando processo existente...
  pm2 restart ecosystem.config.js --update-env
) else (
  echo   Iniciando novo processo...
  pm2 start ecosystem.config.js
)

:: Salva lista de processos para auto-start no boot
pm2 save

echo.
echo ============================================================
echo   Deploy concluido!
echo   Acesse: http://localhost:3001
echo ============================================================
echo.
pause
