const env      = require('./src/config/env');
const app      = require('./src/app');
const { ensureAppDbSchema } = require('./src/config/appDbInit');

async function main() {
  await ensureAppDbSchema();

  app.listen(env.PORT, () => {
    console.log(`\n  Servidor rodando em http://localhost:${env.PORT}\n`);
  });
}

main().catch((err) => {
  console.error('[BOOT] Falha ao iniciar:', err?.message || err);
  process.exit(1);
});
