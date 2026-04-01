const createStore = require('../../shared/jsonStore');

const store = createStore('escalas.json', []);

function getByMes(funcionarioId, mes) {
  const list = store.read();
  return list.filter(e =>
    e.funcionarioId === Number(funcionarioId) &&
    e.data.startsWith(mes)
  );
}

/** Upsert: atualiza se já existe registro para funcionario+data, senão cria. */
function upsert(data) {
  const list = store.read();
  const idx  = list.findIndex(
    e => e.funcionarioId === Number(data.funcionarioId) && e.data === data.data
  );

  const entrada = {
    id:            idx >= 0 ? list[idx].id : Date.now(),
    funcionarioId: Number(data.funcionarioId),
    data:          data.data,
    tipo:          data.tipo,
    turnos:        data.turnos || [],
  };

  if (idx >= 0) {
    list[idx] = entrada;
  } else {
    list.push(entrada);
  }

  store.write(list);
  return entrada;
}

function remove(id) {
  const list     = store.read();
  const filtered = list.filter(e => e.id !== Number(id));
  if (filtered.length === list.length) throw Object.assign(new Error('Escala não encontrada.'), { status: 404 });
  store.write(filtered);
}

module.exports = { getByMes, upsert, remove };
