const db = require('../../shared/jsonDb');

function getAll() {
  return db.read().products;
}

function clearAll() {
  const data = db.read();
  data.products = [];
  data.pedido   = {};
  data.contagem = [];
  db.write(data);
}

function saveAll(products) {
  const data = db.read();
  data.products = products;
  data.pedido   = {};
  data.contagem = [];
  db.write(data);
}

module.exports = { getAll, clearAll, saveAll };
