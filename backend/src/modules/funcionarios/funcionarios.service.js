const createStore = require('../../shared/jsonStore');

const store = createStore('funcionarios.json', []);

function getAll() {
  return store.read();
}

function create(data) {
  const list = store.read();
  const novo = {
    id: Date.now(),
    nome: data.nome,
    cargo: data.cargo,
    cargaHorariaMensal: Number(data.cargaHorariaMensal),
  };
  list.push(novo);
  store.write(list);
  return novo;
}

function update(id, data) {
  const list = store.read();
  const idx  = list.findIndex(f => f.id === Number(id));
  if (idx === -1) throw Object.assign(new Error('Funcionário não encontrado.'), { status: 404 });
  list[idx] = { ...list[idx], ...data, id: list[idx].id };
  store.write(list);
  return list[idx];
}

function remove(id) {
  const list    = store.read();
  const filtered = list.filter(f => f.id !== Number(id));
  if (filtered.length === list.length) throw Object.assign(new Error('Funcionário não encontrado.'), { status: 404 });
  store.write(filtered);
}

module.exports = { getAll, create, update, remove };
