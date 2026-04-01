const fs   = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');
const DB_PATH  = path.join(DATA_DIR, 'db.json');

const DEFAULT_DB = {
  products: [],
  pedido:   {},
  contagem: [],
  config:   { dias_estoque: 30 },
};

function init() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_PATH))  fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_DB, null, 2));
}

function read() {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function write(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

module.exports = { init, read, write };
