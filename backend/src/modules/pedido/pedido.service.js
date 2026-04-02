const appDb = require('../../config/appDatabase');

async function getAll() {
  const { rows } = await appDb.query(
    'SELECT codigo, quantidade FROM app_pedido_items'
  );
  const pedido = {};
  for (const r of rows) pedido[String(r.codigo)] = Number(r.quantidade);
  return pedido;
}

async function updateItem(codigo, quantidade) {
  const cod = String(codigo);
  if (quantidade === null || quantidade === undefined) {
    await appDb.query('DELETE FROM app_pedido_items WHERE codigo = $1', [cod]);
    return;
  }

  const qtd = Number(quantidade);
  await appDb.query(
    `INSERT INTO app_pedido_items (codigo, quantidade, updated_at)
     VALUES ($1, $2, now())
     ON CONFLICT (codigo)
     DO UPDATE SET quantidade = EXCLUDED.quantidade, updated_at = now()`,
    [cod, qtd]
  );
}

module.exports = { getAll, updateItem };
