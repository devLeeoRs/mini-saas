const { init } = require('./src/shared/jsonDb');
const env      = require('./src/config/env');
const app      = require('./src/app');

// Garante existência do db.json antes de iniciar
init();

app.listen(env.PORT, () => {
  console.log(`\n  Servidor rodando em http://localhost:${env.PORT}\n`);
});
