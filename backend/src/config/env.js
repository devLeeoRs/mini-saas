const path = require('path');
require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH || path.join(__dirname, '..', '..', '..', '.env'),
});

const env = {
  PORT:        process.env.PORT        || 3001,
  DB_HOST:     process.env.DB_HOST     || '192.168.1.113',
  DB_PORT:     Number(process.env.DB_PORT) || 5432,
  DB_NAME:     process.env.DB_NAME     || 'ferragem_oliveira',
  DB_USER:     process.env.DB_USER     || 'leonardo',
  DB_PASSWORD: process.env.DB_PASSWORD || '96332279',

  // App DB (autenticacao / roles)
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || '',
  APP_DB_HOST:      process.env.APP_DB_HOST      || '',
  APP_DB_PORT:      process.env.APP_DB_PORT ? Number(process.env.APP_DB_PORT) : 5432,
  APP_DB_NAME:      process.env.APP_DB_NAME      || '',
  APP_DB_USER:      process.env.APP_DB_USER      || '',
  APP_DB_PASSWORD:  process.env.APP_DB_PASSWORD  || '',

  AUTH_JWT_SECRET:  process.env.AUTH_JWT_SECRET  || 'change-me',
  AUTH_JWT_EXPIRES: process.env.AUTH_JWT_EXPIRES || '7d',
};

module.exports = env;
