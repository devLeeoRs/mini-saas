const appDb = require('../../config/appDatabase');
const pool = require('../../config/database');
const uazapi = require('./uazapi.client');
const { parseBrWhatsappNumber } = require('./whatsapp');

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

function moneyBRL(value) {
  try {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(toNumber(value));
  } catch {
    return `R$ ${toNumber(value).toFixed(2)}`;
  }
}

const PAYMENT_LABEL = {
  pix: 'PIX',
  debito: 'Debito',
  credito: 'Credito',
  crediario: 'Crediario',
  dinheiro: 'Dinheiro',
};

async function findClientByCpf(cpf) {
  const normalized = normalizeCPF(cpf);
  if (normalized.length !== 11) return null;

  // Prefer the POS CPF cache table (avoids older app_pos_clients schemas)
  let rows = [];
  try {
    ({ rows } = await appDb.query(
      `SELECT cpf, nome
       FROM app_pos_clients_cpf
       WHERE cpf = $1
       LIMIT 1`,
      [normalized]
    ));
  } catch {
    rows = [];
  }

  // Fallback for older deployments (best-effort)
  if (!rows.length) {
    try {
      ({ rows } = await appDb.query(
        `SELECT cpf, nome
         FROM app_pos_clients
         WHERE cpf = $1
         LIMIT 1`,
        [normalized]
      ));
    } catch {
      rows = [];
    }
  }

  if (!rows.length) return null;

  return {
    cpf: String(rows[0].cpf),
    nome: String(rows[0].nome || ''),
  };
}

async function getProductByCode(code) {
  const raw = String(code || '').trim();
  const candidates = [raw];
  const noLeadingZeros = raw.replace(/^0+/, '');
  if (noLeadingZeros && noLeadingZeros !== raw) candidates.push(noLeadingZeros);

  async function queryAppProduct(codigo) {
    const { rows } = await appDb.query(
      `SELECT codigo, descricao, preco_custo AS preco_unitario, estoque
       FROM app_products
       WHERE codigo = $1
       LIMIT 1`,
      [String(codigo || '').trim()]
    );
    return rows[0] || null;
  }

  async function resolveCodigoLikeInventario(q) {
    const { rows } = await pool.query(
      `SELECT p.pro_codigo::text AS codigo
       FROM produto p
       WHERE p.pro_bloqueio_old = 'N'
         AND (
           p.pro_codigo::text = $1::text
           OR TRIM(COALESCE(p.pro_codigo_ean::text, '')) = $1::text
           OR TRIM(COALESCE(p.pro_codigo_or::text, '')) = $1::text
         )
       LIMIT 1`,
      [String(q || '').trim()]
    );
    return rows[0]?.codigo ? String(rows[0].codigo) : null;
  }

  let row = null;
  for (const q of candidates) {
    row = await queryAppProduct(q);
    if (row) break;

    const resolvedCodigo = await resolveCodigoLikeInventario(q);
    if (!resolvedCodigo) continue;

    row = await queryAppProduct(resolvedCodigo);
    if (row) break;
  }

  if (!row) {
    const err = new Error('Produto nao encontrado');
    err.status = 404;
    throw err;
  }

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

  const rawClient = data?.cliente && typeof data.cliente === 'object' ? data.cliente : null;
  const cpf = normalizeCPF(rawClient?.cpf || '');

  const client = rawClient ? {
    ...(cpf ? { cpf } : {}),
    ...(rawClient?.nome ? { nome: String(rawClient.nome || '').trim() } : {}),
  } : null;

  if (client) {
    // Optional fields used by WhatsApp receipt formatting (kept intentionally narrow)
    if (rawClient?.entrega && typeof rawClient.entrega === 'object') {
      client.entrega = {
        ...(rawClient.entrega?.tipo ? { tipo: String(rawClient.entrega.tipo).trim() } : {}),
        ...(rawClient.entrega?.taxa !== undefined ? { taxa: toNumber(rawClient.entrega.taxa) } : {}),
        ...(rawClient.entrega?.endereco ? { endereco: String(rawClient.entrega.endereco).trim() } : {}),
        ...(rawClient.entrega?.estimativaMin !== undefined ? { estimativaMin: Number(rawClient.entrega.estimativaMin) } : {}),
        ...(rawClient.entrega?.estimativaMax !== undefined ? { estimativaMax: Number(rawClient.entrega.estimativaMax) } : {}),
      };
    }

    if (rawClient?.endereco) client.endereco = String(rawClient.endereco).trim();
  }
  return {
    cliente: client && Object.keys(client).length ? client : null,
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
      `INSERT INTO app_pos_clients_cpf (cpf, nome, updated_at)
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

async function getSaleById(id) {
  const { rows } = await appDb.query(
    `SELECT id, cliente, items, payments, total, created_at
     FROM app_pos_sales
     WHERE id = $1
     LIMIT 1`,
    [String(id)]
  );
  return rows[0] || null;
}

function buildReceiptText(saleRow) {
  const id = String(saleRow.id);
  const cliente = saleRow.cliente || null;
  const items = Array.isArray(saleRow.items) ? saleRow.items : (saleRow.items ? JSON.parse(JSON.stringify(saleRow.items)) : []);
  const payments = Array.isArray(saleRow.payments) ? saleRow.payments : (saleRow.payments ? JSON.parse(JSON.stringify(saleRow.payments)) : []);
  const total = toNumber(saleRow.total);

  const paid = payments.reduce((sum, p) => sum + toNumber(p?.valor), 0);
  const troco = Math.max(paid - total, 0);

  function getComplementos(it) {
    const candidates = [it?.complementos, it?.complements, it?.adicionais, it?.extras];
    const found = candidates.find((c) => Array.isArray(c) && c.length);
    return Array.isArray(found) ? found : [];
  }

  function getEntrega(c) {
    if (!c || typeof c !== 'object') return null;
    if (c.entrega && typeof c.entrega === 'object') {
      const tipo = String(c.entrega?.tipo || '').trim();
      const taxa = c.entrega?.taxa !== undefined ? toNumber(c.entrega.taxa) : null;
      const endereco = String(c.entrega?.endereco || '').trim();
      const estimativaMin = c.entrega?.estimativaMin !== undefined ? Number(c.entrega.estimativaMin) : null;
      const estimativaMax = c.entrega?.estimativaMax !== undefined ? Number(c.entrega.estimativaMax) : null;
      if (tipo || taxa !== null || endereco) {
        return { tipo, taxa, endereco, estimativaMin, estimativaMax };
      }
    }

    return null;
  }

  const lines = [];
  lines.push(`Pedido nº ${id}`);
  lines.push('');
  lines.push('Itens:');

  for (const it of items) {
    const qtd = Number(it?.quantidade || 0);
    const desc = String(it?.descricao || '').trim();
    lines.push(`➡ ${qtd}x ${desc}`);

    const complementos = getComplementos(it);
    if (complementos.length) {
      lines.push('      Complementos');
      for (const c of complementos) {
        const cq = Number(c?.quantidade || 0) || 1;
        const cd = String(c?.descricao || c?.nome || '').trim();
        if (!cd) continue;
        lines.push(`          ${cq}x ${cd}`);
      }
    }
  }

  lines.push('');

  // Payment lines (prefer the single-line format)
  if (payments.length === 1) {
    const p = payments[0];
    const tipo = String(p?.tipo || '').trim();
    const label = PAYMENT_LABEL[tipo] || tipo || 'Pagamento';
    if (tipo === 'dinheiro') {
      const cashValue = toNumber(p?.valor);
      const trocoPara = cashValue > total ? ` (troco para ${moneyBRL(cashValue)})` : '';
      lines.push(`💵 ${label}${trocoPara}`);
    } else {
      lines.push(`💳 ${label}`);
    }
  } else if (payments.length > 1) {
    for (const p of payments) {
      const tipo = String(p?.tipo || '').trim();
      const label = PAYMENT_LABEL[tipo] || tipo || 'Pagamento';
      const valor = moneyBRL(p?.valor);
      const emoji = tipo === 'dinheiro' ? '💵' : '💳';
      lines.push(`${emoji} ${label} (${valor})`);
    }
  }

  const entrega = getEntrega(cliente);
  if (entrega && String(entrega.tipo || '').toLowerCase() === 'delivery') {
    const taxa = entrega.taxa !== null ? moneyBRL(entrega.taxa) : null;
    lines.push('');
    lines.push(`🛵 Delivery${taxa ? ` (taxa de: ${taxa})` : ''}`);
    const endereco = String(entrega.endereco || cliente?.endereco || '').trim();
    if (endereco) lines.push(`🏠 ${endereco}`);
    if (entrega.estimativaMin && entrega.estimativaMax) {
      lines.push(`(Estimativa: entre ${entrega.estimativaMin}~${entrega.estimativaMax} minutos)`);
    }
  }

  lines.push('');
  lines.push(`Total: ${moneyBRL(total)}`);
  lines.push('');
  lines.push('Obrigado pela preferência, se precisar de algo é só chamar! 😉');

  return lines.join('\n');
}

async function sendSaleWhatsappReceipt(saleId, phoneInput) {
  const parsed = parseBrWhatsappNumber(phoneInput);
  if (!parsed) {
    const err = new Error('Numero de WhatsApp invalido');
    err.status = 400;
    throw err;
  }

  const sale = await getSaleById(saleId);
  if (!sale) {
    const err = new Error('Venda nao encontrada');
    err.status = 404;
    throw err;
  }

  const text = buildReceiptText(sale);
  const to = parsed.e164Digits;

  const response = await uazapi.sendText({ to, text });
  return {
    success: true,
    saleId: String(sale.id),
    to: parsed.e164,
    provider: 'uazapi',
    response,
  };
}

module.exports = {
  findClientByCpf,
  getProductByCode,
  searchProducts,
  createSale,
  sendSaleWhatsappReceipt,
};
