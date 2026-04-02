const fs = require('fs');
const path = require('path');

const appDb = require('../src/config/appDatabase');
const { ensureAppDbSchema } = require('../src/config/appDbInit');

function readJsonFile(fp, fallback) {
  try {
    if (!fs.existsSync(fp)) return fallback;
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch (_err) {
    return fallback;
  }
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function main() {
  await ensureAppDbSchema();

  const dataDir = path.join(__dirname, '..', 'data');
  const inventariosDir = path.join(dataDir, 'inventarios');

  const dbJson = readJsonFile(path.join(dataDir, 'db.json'), {
    products: [],
    pedido: {},
    contagem: [],
    config: { dias_estoque: 30 },
  });

  const funcionarios = readJsonFile(path.join(dataDir, 'funcionarios.json'), []);
  const turnos = readJsonFile(path.join(dataDir, 'turnos.json'), []);
  const escalas = readJsonFile(path.join(dataDir, 'escalas.json'), []);

  const inventarios = [];
  if (fs.existsSync(inventariosDir)) {
    const files = fs.readdirSync(inventariosDir).filter(f => f.endsWith('.json'));
    for (const f of files) {
      const inv = readJsonFile(path.join(inventariosDir, f), null);
      if (inv && inv.id) inventarios.push(inv);
    }
  }

  const client = await appDb.connect();
  try {
    await client.query('BEGIN');

    // Clear current state (auth tables are untouched)
    // Postgres exige truncar tabelas relacionadas por FK no mesmo comando (ou CASCADE).
    await client.query(
      'TRUNCATE app_inventario_produtos, app_inventarios, app_escalas, app_turnos, app_funcionarios, app_pedido_items, app_contagem_items, app_products RESTART IDENTITY CASCADE'
    );

    // Config
    const diasEstoque = Number(dbJson?.config?.dias_estoque ?? 30);
    await client.query(
      `INSERT INTO app_config (id, dias_estoque, updated_at)
       VALUES (1, $1, now())
       ON CONFLICT (id) DO UPDATE SET dias_estoque = EXCLUDED.dias_estoque, updated_at = now()`,
      [diasEstoque]
    );

    // Products
    const products = Array.isArray(dbJson?.products) ? dbJson.products : [];
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

    for (const batch of chunk(products, 500)) {
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

      if (placeholders.length > 0) {
        await client.query(
          `INSERT INTO app_products (${cols.join(',')}) VALUES ${placeholders.join(',')}`,
          values
        );
      }
    }

    // Pedido
    const pedido = dbJson?.pedido && typeof dbJson.pedido === 'object' ? dbJson.pedido : {};
    for (const [codigo, quantidade] of Object.entries(pedido)) {
      await client.query(
        `INSERT INTO app_pedido_items (codigo, quantidade, updated_at)
         VALUES ($1, $2, now())`,
        [String(codigo), Number(quantidade)]
      );
    }

    // Contagem
    const contagem = Array.isArray(dbJson?.contagem) ? dbJson.contagem : [];
    for (const codigo of contagem) {
      await client.query(
        `INSERT INTO app_contagem_items (codigo, updated_at)
         VALUES ($1, now())
         ON CONFLICT (codigo) DO NOTHING`,
        [String(codigo)]
      );
    }

    // Funcionarios
    for (const f of Array.isArray(funcionarios) ? funcionarios : []) {
      await client.query(
        `INSERT INTO app_funcionarios (id, nome, cargo, carga_horaria_mensal, created_at, updated_at)
         VALUES ($1, $2, $3, $4, now(), now())`,
        [Number(f.id), String(f.nome ?? ''), String(f.cargo ?? ''), Number(f.cargaHorariaMensal ?? 0)]
      );
    }

    // Turnos
    for (const t of Array.isArray(turnos) ? turnos : []) {
      await client.query(
        `INSERT INTO app_turnos (id, nome, turnos, created_at, updated_at)
         VALUES ($1, $2, $3::jsonb, now(), now())`,
        [Number(t.id), String(t.nome ?? ''), JSON.stringify(Array.isArray(t.turnos) ? t.turnos : [])]
      );
    }

    // Escalas
    for (const e of Array.isArray(escalas) ? escalas : []) {
      await client.query(
        `INSERT INTO app_escalas (id, funcionario_id, data, tipo, turnos, created_at, updated_at)
         VALUES ($1, $2, $3::date, $4, $5::jsonb, now(), now())`,
        [
          Number(e.id),
          Number(e.funcionarioId),
          String(e.data).slice(0, 10),
          String(e.tipo ?? ''),
          JSON.stringify(Array.isArray(e.turnos) ? e.turnos : []),
        ]
      );
    }

    // Inventarios
    for (const inv of inventarios) {
      await client.query(
        `INSERT INTO app_inventarios (id, nome, status, data_criacao, created_at, updated_at)
         VALUES ($1::uuid, $2, $3, $4::date, now(), now())`,
        [String(inv.id), String(inv.nome ?? ''), String(inv.status ?? 'aberto'), String(inv.dataCriacao ?? '').slice(0, 10)]
      );

      for (const p of Array.isArray(inv.produtos) ? inv.produtos : []) {
        await client.query(
          `INSERT INTO app_inventario_produtos (
             inventario_id, codigo, gtin, descricao, estoque_atual, quantidade_digitada, diferenca, ok, updated_at
           ) VALUES ($1::uuid, $2, $3, $4, $5, $6, $7, $8, now())`,
          [
            String(inv.id),
            String(p.codigo ?? ''),
            String(p.gtin ?? ''),
            String(p.descricao ?? ''),
            Number(p.estoqueAtual ?? 0),
            p.quantidadeDigitada === null || p.quantidadeDigitada === undefined ? null : Number(p.quantidadeDigitada),
            p.diferenca === null || p.diferenca === undefined ? null : Number(p.diferenca),
            Boolean(p.ok),
          ]
        );
      }
    }

    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }

  console.log('[APP_DB] Migracao concluida');
  console.log(`- products: ${Array.isArray(dbJson?.products) ? dbJson.products.length : 0}`);
  console.log(`- pedido itens: ${dbJson?.pedido && typeof dbJson.pedido === 'object' ? Object.keys(dbJson.pedido).length : 0}`);
  console.log(`- contagem: ${Array.isArray(dbJson?.contagem) ? dbJson.contagem.length : 0}`);
  console.log(`- funcionarios: ${Array.isArray(funcionarios) ? funcionarios.length : 0}`);
  console.log(`- turnos: ${Array.isArray(turnos) ? turnos.length : 0}`);
  console.log(`- escalas: ${Array.isArray(escalas) ? escalas.length : 0}`);
  console.log(`- inventarios: ${inventarios.length}`);
}

main().catch((err) => {
  console.error('[APP_DB] Falha na migracao:', err?.message || err);
  process.exit(1);
});
