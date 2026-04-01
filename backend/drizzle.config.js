require('dotenv').config();

/** @type {import('drizzle-kit').Config} */
module.exports = {
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  out: './drizzle',
  schema: './src/schema.js',
};
