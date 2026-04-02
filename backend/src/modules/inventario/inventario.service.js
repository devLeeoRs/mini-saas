const crypto = require('crypto');
const appDb = require('../../config/appDatabase');

async function listar() {
  const { rows } = await appDb.query(`
    SELECT
      i.id,
      i.nome,
      i.status,
      to_char(i.data_criacao, 'YYYY-MM-DD') AS data_criacao,
      COALESCE(COUNT(p.codigo), 0)::int     AS total_produtos
    FROM app_inventarios i
    LEFT JOIN app_inventario_produtos p ON p.inventario_id = i.id
    GROUP BY i.id
    ORDER BY i.data_criacao DESC
  `);

  return rows.map(r => ({
    id: r.id,
    nome: r.nome,
    status: r.status,
    dataCriacao: r.data_criacao,
    totalProdutos: Number(r.total_produtos ?? 0),
  }));
}

async function criar(nome) {
  const id = crypto.randomUUID();
  const dataCriacao = new Date().toISOString().split('T')[0];

  await appDb.query(
    `INSERT INTO app_inventarios (id, nome, status, data_criacao, created_at, updated_at)
     VALUES ($1::uuid, $2, 'aberto', $3::date, now(), now())`,
    [id, String(nome), dataCriacao]
  );

  return {
    id,
    nome: String(nome),
    status: 'aberto',
    dataCriacao,
    produtos: [],
  };
}

async function obter(id) {
  const { rows } = await appDb.query(
    `SELECT id, nome, status, to_char(data_criacao, 'YYYY-MM-DD') AS data_criacao
     FROM app_inventarios
     WHERE id = $1::uuid
     LIMIT 1`,
    [String(id)]
  );
  if (rows.length === 0) return null;
  const inv = rows[0];

  const { rows: produtosRows } = await appDb.query(
    `SELECT codigo, gtin, descricao, estoque_atual, quantidade_digitada, diferenca, ok
     FROM app_inventario_produtos
     WHERE inventario_id = $1::uuid
     ORDER BY descricao`,
    [String(id)]
  );

  const produtos = produtosRows.map(p => ({
    codigo: String(p.codigo),
    gtin: String(p.gtin ?? ''),
    descricao: String(p.descricao ?? ''),
    estoqueAtual: Number(p.estoque_atual ?? 0),
    quantidadeDigitada: p.quantidade_digitada === null || p.quantidade_digitada === undefined ? null : Number(p.quantidade_digitada),
    diferenca: p.diferenca === null || p.diferenca === undefined ? null : Number(p.diferenca),
    ok: Boolean(p.ok),
  }));

  return {
    id: inv.id,
    nome: inv.nome,
    status: inv.status,
    dataCriacao: inv.data_criacao,
    produtos,
  };
}

async function atualizar(id, updates) {
  const permitidos = {
    nome: updates?.nome,
    status: updates?.status,
  };

  const nome = permitidos.nome !== undefined ? String(permitidos.nome) : null;
  const status = permitidos.status !== undefined ? String(permitidos.status) : null;

  const { rowCount } = await appDb.query(
    `UPDATE app_inventarios
     SET nome = COALESCE($2, nome),
         status = COALESCE($3, status),
         updated_at = now()
     WHERE id = $1::uuid`,
    [String(id), nome, status]
  );
  if (rowCount === 0) return null;
  return obter(id);
}

async function salvarProduto(id, produto) {
  const client = await appDb.connect();
  try {
    await client.query('BEGIN');

    const { rowCount } = await client.query(
      'SELECT 1 FROM app_inventarios WHERE id = $1::uuid',
      [String(id)]
    );
    if (rowCount === 0) {
      await client.query('ROLLBACK');
      return null;
    }

    const cod = String(produto?.codigo ?? '').trim();
    const gtin = String(produto?.gtin ?? '');
    const descricao = String(produto?.descricao ?? '');
    const estoqueAtual = Number(produto?.estoqueAtual ?? 0);
    const quantidadeDigitada = produto?.quantidadeDigitada === null || produto?.quantidadeDigitada === undefined
      ? null
      : Number(produto.quantidadeDigitada);
    const diferenca = produto?.diferenca === null || produto?.diferenca === undefined ? null : Number(produto.diferenca);
    const ok = Boolean(produto?.ok);

    await client.query(
      `INSERT INTO app_inventario_produtos (
         inventario_id, codigo, gtin, descricao, estoque_atual, quantidade_digitada, diferenca, ok, updated_at
       ) VALUES ($1::uuid, $2, $3, $4, $5, $6, $7, $8, now())
       ON CONFLICT (inventario_id, codigo)
       DO UPDATE SET
         gtin = EXCLUDED.gtin,
         descricao = EXCLUDED.descricao,
         estoque_atual = EXCLUDED.estoque_atual,
         quantidade_digitada = EXCLUDED.quantidade_digitada,
         diferenca = EXCLUDED.diferenca,
         ok = EXCLUDED.ok,
         updated_at = now()`,
      [String(id), cod, gtin, descricao, estoqueAtual, quantidadeDigitada, diferenca, ok]
    );

    await client.query(
      `UPDATE app_inventarios
       SET status = CASE WHEN status = 'aberto' THEN 'em_andamento' ELSE status END,
           updated_at = now()
       WHERE id = $1::uuid`,
      [String(id)]
    );

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  return obter(id);
}

async function excluir(id) {
  const result = await appDb.query('DELETE FROM app_inventarios WHERE id = $1::uuid', [String(id)]);
  return result.rowCount > 0;
}

module.exports = { listar, criar, obter, atualizar, salvarProduto, excluir };
