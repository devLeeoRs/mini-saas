require('dotenv').config();

const env = {
  PORT:        process.env.PORT        || 3001,
  DB_HOST:     process.env.DB_HOST     || '192.168.1.113',
  DB_PORT:     Number(process.env.DB_PORT) || 5432,
  DB_NAME:     process.env.DB_NAME     || 'ferragem_oliveira',
  DB_USER:     process.env.DB_USER     || 'leonardo',
  DB_PASSWORD: process.env.DB_PASSWORD || '96332279',
};

module.exports = env;
