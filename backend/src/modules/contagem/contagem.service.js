const db = require('../../shared/jsonDb');

function getAll() {
  return db.read().contagem;
}

function addItem(codigo) {
  const data = db.read();
  if (!data.contagem.includes(codigo)) data.contagem.push(codigo);
  db.write(data);
}

function removeItem(codigo) {
  const data = db.read();
  data.contagem = data.contagem.filter(c => c !== codigo);
  db.write(data);
}

function clearAll() {
  const data = db.read();
  data.contagem = [];
  db.write(data);
}

module.exports = { getAll, addItem, removeItem, clearAll };
