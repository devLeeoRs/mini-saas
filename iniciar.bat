@echo off
chcp 65001 >nul
title Sistema Pedido Ferragem

echo.
echo  ================================================
echo   Sistema Pedido Ferragem - Iniciando...
echo  ================================================
echo.

:: Verifica se Node.js está instalado
where node >nul 2>&1
if errorlevel 1 (
    echo  [ERRO] Node.js nao encontrado.
    echo  Baixe em: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VER=%%v
echo  Node.js %NODE_VER% encontrado.
echo.

:: Caminho base do projeto
set BASE=%~dp0

:: ── Backend ────────────────────────────────────────────────────────────────
echo  [1/4] Instalando dependencias do backend...
cd /d "%BASE%backend"
if not exist node_modules (
    call npm install --silent
    if errorlevel 1 (
        echo  [ERRO] Falha ao instalar dependencias do backend.
        pause
        exit /b 1
    )
)
echo  [1/4] OK
echo.

:: ── Frontend ───────────────────────────────────────────────────────────────
echo  [2/4] Instalando dependencias do frontend...
cd /d "%BASE%frontend"
if not exist node_modules (
    call npm install --silent
    if errorlevel 1 (
        echo  [ERRO] Falha ao instalar dependencias do frontend.
        pause
        exit /b 1
    )
)
echo  [2/4] OK
echo.

:: ── Inicia Backend ─────────────────────────────────────────────────────────
echo  [3/4] Iniciando servidor backend (porta 3001)...
cd /d "%BASE%backend"
start "Backend - Ferragem" cmd /k "title Backend ^| node index.js"
timeout /t 2 /nobreak >nul
echo  [3/4] OK
echo.

:: ── Inicia Frontend ────────────────────────────────────────────────────────
echo  [4/4] Iniciando servidor frontend (porta 3000)...
cd /d "%BASE%frontend"
start "Frontend - Ferragem" cmd /k "title Frontend ^| npm run dev"
timeout /t 3 /nobreak >nul
echo  [4/4] OK
echo.

:: ── Abre o navegador ───────────────────────────────────────────────────────
echo  Abrindo navegador...
start http://localhost:3000

echo.
echo  ================================================
echo   Sistema rodando!
echo.
echo   Local:   http://localhost:3000
echo.
echo   Para acessar pelo celular (mesma rede Wi-Fi):
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /i "IPv4" ^| findstr "192.168"') do (
    set LOCAL_IP=%%i
    goto :found_ip
)
:found_ip
if defined LOCAL_IP (
    set LOCAL_IP=%LOCAL_IP: =%
    echo   Celular: http://%LOCAL_IP%:3000
)
echo.
echo   Feche as janelas de Backend e Frontend para parar.
echo  ================================================
echo.
pause
