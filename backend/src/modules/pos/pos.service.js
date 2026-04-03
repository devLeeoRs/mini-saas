const appDb = require('../../config/appDatabase');

function toNumber(value) {
  const num = Number(value || 0);
  return Number.isFinite(num) ? num : 0;
}

function normalizeCPF(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 11);
}

function toCents(value) {
  return Math.round(toNumber(value) * 100);
}

async function findClientByCpf(cpf) {
  const normalized = normalizeCPF(cpf);
  if (normalized.length !== 11) return null;

  const { rows } = await appDb.query(
    `SELECT cpf, nome
     FROM app_pos_clients
     WHERE cpf = $1
     LIMIT 1`,
    [normalized]
  );

  if (!rows.length) return null;

  return {
    cpf: String(rows[0].cpf),
    nome: String(rows[0].nome || ''),
  };
}

async function getProductByCode(code) {
  const { rows } = await appDb.query(
    `SELECT codigo, descricao, preco_custo AS preco_unitario, estoque
     FROM app_products
     WHERE codigo = $1
     LIMIT 1`,
    [String(code || '').trim()]
  );

  if (!rows.length) {
    const err = new Error('Produto nao encontrado');
    err.status = 404;
    throw err;
  }

  const row = rows[0];
  return {
    codigo: String(row.codigo),
    descricao: String(row.descricao || ''),
    precoUnitario: toNumber(row.preco_unitario),
    estoque: toNumber(row.estoque),
  };
}

async function searchProducts(description) {
  const term = String(description || '').trim();
  const values = [];

  let where = '';
  if (term) {
    where = 'WHERE descricao ILIKE $1';
    values.push(`%${term}%`);
  }

  const { rows } = await appDb.query(
    `SELECT codigo, descricao, preco_custo AS preco_unitario, estoque
     FROM app_products
     ${where}
     ORDER BY descricao
     LIMIT 60`,
    values
  );

  return rows.map((row) => ({
    codigo: String(row.codigo),
    descricao: String(row.descricao || ''),
    precoUnitario: toNumber(row.preco_unitario),
    estoque: toNumber(row.estoque),
  }));
}

function validateSale(data) {
  const items = Array.isArray(data.items) ? data.items : [];
  const payments = Array.isArray(data.payments) ? data.payments : [];

  if (!items.length) {
    const err = new Error('Venda deve ter pelo menos 1 item');
    err.status = 400;
    throw err;
  }

  const totalItemsCents = items.reduce((sum, item) => sum + toCents(item.precoTotal), 0);
  const totalPaymentsCents = payments.reduce((sum, payment) => sum + toCents(payment.valor), 0);
  const expectedTotalCents = toCents(data.total);

  if (Math.abs(totalItemsCents - expectedTotalCents) > 1) {
    const err = new Error('Total da venda inconsistente');
    err.status = 400;
    throw err;
  }

  const hasCash = payments.some((payment) => payment.tipo === 'dinheiro');
  if (!hasCash && Math.abs(totalPaymentsCents - expectedTotalCents) > 1) {
    const err = new Error('Total pagamentos precisa ser igual ao total da venda');
    err.status = 400;
    throw err;
  }
  if (hasCash && totalPaymentsCents < expectedTotalCents) {
    const err = new Error('Pagamento em dinheiro insuficiente para cobrir total da venda');
    err.status = 400;
    throw err;
  }

  for (const payment of payments) {
    if (!['pix', 'debito', 'credito', 'crediario', 'dinheiro'].includes(payment.tipo)) {
      const err = new Error('Tipo de pagamento invalido');
      err.status = 400;
      throw err;
    }

    if ((payment.tipo === 'debito' || payment.tipo === 'credito') && !String(payment.nsu || '').trim()) {
      const err = new Error('NSU obrigatorio para debito/credito');
      err.status = 400;
      throw err;
    }

    if (payment.tipo === 'crediario' && !String(data?.cliente?.cpf || '').trim()) {
      const err = new Error('Cliente obrigatorio para crediario');
      err.status = 400;
      throw err;
    }
  }

  const cpf = normalizeCPF(data?.cliente?.cpf || '');
  return {
    cliente: cpf ? { cpf, nome: String(data?.cliente?.nome || '').trim() } : null,
    items,
    payments,
    total: expectedTotalCents / 100,
    troco: Math.max((totalPaymentsCents - expectedTotalCents) / 100, 0),
  };
}

async function createSale(payload, user) {
  const sale = validateSale(payload);

  if (sale.cliente?.cpf && sale.cliente?.nome) {
    await appDb.query(
      `INSERT INTO app_pos_clients (cpf, nome, updated_at)
       VALUES ($1, $2, now())
       ON CONFLICT (cpf)
       DO UPDATE SET nome = EXCLUDED.nome, updated_at = now()`,
      [sale.cliente.cpf, sale.cliente.nome]
    );
  }

  const { rows } = await appDb.query(
    `INSERT INTO app_pos_sales (cliente, items, payments, total, created_by)
     VALUES ($1, $2::jsonb, $3::jsonb, $4, $5)
     RETURNING id, created_at`,
    [
      sale.cliente,
      JSON.stringify(sale.items),
      JSON.stringify(sale.payments),
      sale.total,
      String(user?.username || ''),
    ]
  );

  return {
    id: rows[0].id,
    createdAt: rows[0].created_at,
    total: sale.total,
    troco: sale.troco,
  };
}

module.exports = {
  findClientByCpf,
  getProductByCode,
  searchProducts,
  createSale,
};
