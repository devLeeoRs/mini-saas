const appDb = require('../../config/appDatabase');

async function getAll() {
  const { rows } = await appDb.query(
    `SELECT
        codigo,
        ref_fornecedor,
        descricao,
        estoque,
        vendas_30d,
        preco_custo,
        est_min,
        ponto_reposicao,
        est_max,
        quantidade_pedido,
        total_item
     FROM app_products
     ORDER BY descricao`
  );

  return rows.map(r => ({
    codigo:            String(r.codigo),
    ref_fornecedor:    String(r.ref_fornecedor ?? ''),
    descricao:         String(r.descricao ?? ''),
    estoque:           Number(r.estoque ?? 0),
    vendas_30d:        Number(r.vendas_30d ?? 0),
    preco_custo:       Number(r.preco_custo ?? 0),
    est_min:           Number(r.est_min ?? 0),
    ponto_reposicao:   Number(r.ponto_reposicao ?? 0),
    est_max:           Number(r.est_max ?? 0),
    quantidade_pedido: Number(r.quantidade_pedido ?? 0),
    total_item:        Number(r.total_item ?? 0),
  }));
}

async function clearAll() {
  const client = await appDb.connect();
  try {
    await client.query('BEGIN');
    await client.query('TRUNCATE app_products');
    await client.query('TRUNCATE app_pedido_items');
    await client.query('TRUNCATE app_contagem_items');
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function saveAll(products) {
  const list = Array.isArray(products) ? products : [];

  const client = await appDb.connect();
  try {
    await client.query('BEGIN');

    // Replace current app state
    await client.query('TRUNCATE app_products');
    await client.query('TRUNCATE app_pedido_items');
    await client.query('TRUNCATE app_contagem_items');

    const cols = [
      'codigo',
      'ref_fornecedor',
      'descricao',
      'estoque',
      'vendas_30d',
      'preco_custo',
      'est_min',
      'ponto_reposicao',
      'est_max',
      'quantidade_pedido',
      'total_item',
      'imported_at',
    ];

    const batches = chunk(list, 500);
    for (const batch of batches) {
      const values = [];
      const placeholders = batch.map((p, i) => {
        const base = i * cols.length;
        values.push(
          String(p.codigo ?? '').trim(),
          String(p.ref_fornecedor ?? '').trim(),
          String(p.descricao ?? '').trim(),
          Number(p.estoque ?? 0),
          Number(p.vendas_30d ?? 0),
          Number(p.preco_custo ?? 0),
          Number(p.est_min ?? 0),
          Number(p.ponto_reposicao ?? 0),
          Number(p.est_max ?? 0),
          Number(p.quantidade_pedido ?? 0),
          Number(p.total_item ?? 0),
          new Date()
        );

        const ps = [];
        for (let j = 1; j <= cols.length; j++) ps.push(`$${base + j}`);
        return `(${ps.join(',')})`;
      });

      await client.query(
        `INSERT INTO app_products (${cols.join(',')}) VALUES ${placeholders.join(',')}`,
        values
      );
    }

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

module.exports = { getAll, clearAll, saveAll };
