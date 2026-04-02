const express      = require('express');
const cors         = require('cors');
const path         = require('path');
const fs           = require('fs');
const errorHandler = require('./shared/errorHandler');

const productsRoutes   = require('./modules/products/products.routes');
const uploadRoutes     = require('./modules/upload/upload.routes');
const pedidoRoutes     = require('./modules/pedido/pedido.routes');
const contagemRoutes   = require('./modules/contagem/contagem.routes');
const configRoutes     = require('./modules/config/config.routes');
const importacaoRoutes   = require('./modules/importacao/importacao.routes');
const funcionariosRoutes = require('./modules/funcionarios/funcionarios.routes');
const escalasRoutes      = require('./modules/escalas/escalas.routes');
const turnosRoutes       = require('./modules/turnos/turnos.routes');
const inventarioRoutes   = require('./modules/inventario/inventario.routes');

const app = express();

app.use(cors());
app.use(express.json());

// ── Rotas ─────────────────────────────────────────────────────────────────────
app.use('/api/products',  productsRoutes);
app.use('/api/upload',    uploadRoutes);
app.use('/api/pedido',    pedidoRoutes);
app.use('/api/contagem',  contagemRoutes);
app.use('/api/config',    configRoutes);
app.use('/api/pg',           importacaoRoutes);
app.use('/api/funcionarios', funcionariosRoutes);
app.use('/api/escalas',      escalasRoutes);
app.use('/api/turnos',       turnosRoutes);
app.use('/api/inventarios',  inventarioRoutes);

// ── Frontend estático (produção) ──────────────────────────────────────────────
const distPath = path.join(__dirname, '..', '..', 'frontend', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  // SPA fallback: qualquer rota não-API retorna o index.html
  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// ── Error handler (deve ser o último middleware) ───────────────────────────────
app.use(errorHandler);

module.exports = app;
