const db = require('../../shared/jsonDb');

function getAll() {
  return db.read().pedido;
}

function updateItem(codigo, quantidade) {
  const data = db.read();
  if (quantidade === null || quantidade === undefined) {
    delete data.pedido[codigo];
  } else {
    data.pedido[codigo] = Number(quantidade);
  }
  db.write(data);
}

module.exports = { getAll, updateItem };
