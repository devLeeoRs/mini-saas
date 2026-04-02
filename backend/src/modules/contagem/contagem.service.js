const appDb = require('../../config/appDatabase');

async function getAll() {
  const { rows } = await appDb.query('SELECT codigo FROM app_contagem_items ORDER BY codigo');
  return rows.map(r => String(r.codigo));
}

async function addItem(codigo) {
  const cod = String(codigo);
  await appDb.query(
    `INSERT INTO app_contagem_items (codigo, updated_at)
     VALUES ($1, now())
     ON CONFLICT (codigo) DO UPDATE SET updated_at = now()`,
    [cod]
  );
}

async function removeItem(codigo) {
  await appDb.query('DELETE FROM app_contagem_items WHERE codigo = $1', [String(codigo)]);
}

async function clearAll() {
  await appDb.query('TRUNCATE app_contagem_items');
}

module.exports = { getAll, addItem, removeItem, clearAll };
