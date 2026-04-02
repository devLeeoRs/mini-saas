const { Pool, types } = require('pg');
const env = require('./env');

// Retorna colunas DATE como string "YYYY-MM-DD" em vez de Date object
types.setTypeParser(1082, val => val);

const hasUrl = Boolean(env.APP_DATABASE_URL && env.APP_DATABASE_URL.trim());

const sslEnabled =
  String(process.env.APP_DB_SSL || '').toLowerCase() === 'true' ||
  String(process.env.APP_DB_SSL || '') === '1' ||
  /sslmode=require/i.test(String(env.APP_DATABASE_URL || ''));

const ssl = sslEnabled ? { rejectUnauthorized: false } : undefined;

const pool = new Pool(
  hasUrl
    ? { connectionString: env.APP_DATABASE_URL, ssl, max: 5, idleTimeoutMillis: 30000, connectionTimeoutMillis: 5000 }
    : {
        host: env.APP_DB_HOST,
        port: env.APP_DB_PORT,
        database: env.APP_DB_NAME,
        user: env.APP_DB_USER,
        password: env.APP_DB_PASSWORD,
        ssl,
        max: 5,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 5000,
      }
);

pool.on('error', (err) => {
  console.error('[APP_DB] Erro inesperado no pool:', err.message);
});

module.exports = pool;
