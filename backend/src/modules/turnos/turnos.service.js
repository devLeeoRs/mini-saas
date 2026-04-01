const createStore = require('../../shared/jsonStore');

const store = createStore('turnos.json', []);

function getAll() {
  return store.read();
}

function create(data) {
  const list = store.read();
  const novo = {
    id:     Date.now(),
    nome:   data.nome,
    turnos: data.turnos || [],
  };
  list.push(novo);
  store.write(list);
  return novo;
}

function update(id, data) {
  const list = store.read();
  const idx  = list.findIndex(t => t.id === Number(id));
  if (idx === -1) throw Object.assign(new Error('Turno não encontrado.'), { status: 404 });
  list[idx] = { ...list[idx], nome: data.nome, turnos: data.turnos || [] };
  store.write(list);
  return list[idx];
}

function remove(id) {
  const list     = store.read();
  const filtered = list.filter(t => t.id !== Number(id));
  if (filtered.length === list.length) throw Object.assign(new Error('Turno não encontrado.'), { status: 404 });
  store.write(filtered);
}

module.exports = { getAll, create, update, remove };
