const pool = require('../../config/database');

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Converte lista de valores para cláusula SQL IN com inteiros (sem risco de injection). */
function inClause(values) {
  return values.map(Number).join(', ');
}

// ── Queries de filtros ────────────────────────────────────────────────────────

async function getFornecedores() {
  const { rows } = await pool.query(`
    SELECT DISTINCT
      f.for_codigo        AS codigo,
      TRIM(f.for_nome)    AS nome
    FROM fornecedor f
    INNER JOIN fornecedor_xml fx ON fx.for_codigo = f.for_codigo
    WHERE f.for_nome IS NOT NULL AND TRIM(f.for_nome) != ''
    ORDER BY nome
  `);
  return rows;
}

async function getDepartamentos() {
  const { rows } = await pool.query(`
    SELECT
      grp_codigo              AS codigo,
      TRIM(grp_descricao)     AS descricao
    FROM grupos
    WHERE grp_descricao IS NOT NULL AND TRIM(grp_descricao) != ''
    ORDER BY grp_descricao
  `);
  return rows;
}

async function getCategorias(grp_codigo) {
  const base = `
    SELECT
      sub_codigo          AS codigo,
      grp_codigo,
      TRIM(sub_descricao) AS descricao
    FROM sub_grupo
    WHERE sub_descricao IS NOT NULL AND TRIM(sub_descricao) != ''
  `;
  if (grp_codigo) {
    const { rows } = await pool.query(`${base} AND grp_codigo = $1 ORDER BY sub_descricao`, [Number(grp_codigo)]);
    return rows;
  }
  const { rows } = await pool.query(`${base} ORDER BY sub_descricao`);
  return rows;
}

async function getMarcas() {
  const { rows } = await pool.query(`
    SELECT DISTINCT
      m.ma_codigo             AS codigo,
      TRIM(m.ma_descricao)    AS descricao
    FROM marca m
    INNER JOIN produto p ON p.ma_codigo = m.ma_codigo
    WHERE m.ma_descricao IS NOT NULL AND TRIM(m.ma_descricao) != ''
    ORDER BY descricao
  `);
  return rows;
}

// ── Importação de produtos ────────────────────────────────────────────────────

/**
 * @param {object}        filtros
 * @param {number[]|null} filtros.for_codigos  – Fornecedores (fornecedor_xml)
 * @param {number|null}   filtros.gru_codigo   – Departamento (produto.grp_codigo)
 * @param {number[]|null} filtros.sub_codigos  – Categorias (produto.sub_codigo)
 * @param {number[]|null} filtros.mar_codigos  – Marcas (produto.ma_codigo)
 * @param {number}        filtros.dias         – Janela de vendas em dias
 */
async function importarProdutos({ for_codigos, gru_codigo, sub_codigos, mar_codigos, dias = 30 }) {
  const hasFornecedor = Array.isArray(for_codigos) && for_codigos.length > 0;
  const hasSubCodigos = Array.isArray(sub_codigos) && sub_codigos.length > 0;
  const hasMarcas     = Array.isArray(mar_codigos) && mar_codigos.length > 0;

  const fornecedorClause = hasFornecedor ? `WHERE for_codigo IN (${inClause(for_codigos)})` : '';
  const subClause        = hasSubCodigos ? `AND p.sub_codigo IN (${inClause(sub_codigos)})` : '';
  const marcaClause      = hasMarcas     ? `AND p.ma_codigo  IN (${inClause(mar_codigos)})` : '';

  const params = [
    gru_codigo ? Number(gru_codigo) : null,
    Number(dias),
  ];

  const { rows } = await pool.query(`
    SELECT
      fx.pro_codigo::text                                                       AS codigo,
      COALESCE(TRIM(fx.ref_fornecedor), '')                                     AS ref_fornecedor,
      TRIM(p.pro_descricao)                                                     AS descricao,
      COALESCE(es.estoque, 0)                                                   AS estoque,
      COALESCE(v30.vendas_30d, 0)                                               AS vendas_30d,
      COALESCE(p.pro_preco_custo, 0)                                            AS preco_custo,
      COALESCE(p.pro_estoque_minimo, 0)                                         AS est_min,
      COALESCE(p.pro_ponto_reposicao, 0)                                        AS ponto_reposicao,
      COALESCE(p.pro_estoque_max, 0)                                            AS est_max,
      GREATEST(COALESCE(p.pro_estoque_max, 0) - COALESCE(es.estoque, 0), 0)    AS quantidade_pedido,
      ROUND(
        (GREATEST(COALESCE(p.pro_estoque_max, 0) - COALESCE(es.estoque, 0), 0)
          * COALESCE(p.pro_preco_custo, 0))::numeric, 2
      )                                                                         AS total_item

    FROM (
      SELECT pro_codigo, MIN(for_codigo_pro) AS ref_fornecedor
      FROM fornecedor_xml
      ${fornecedorClause}
      GROUP BY pro_codigo
    ) fx

    JOIN produto p ON p.pro_codigo = fx.pro_codigo

    LEFT JOIN (
      SELECT pro_codigo, SUM(ees_up_saldo) AS estoque
      FROM estoque_empresa_saldo
      GROUP BY pro_codigo
    ) es ON es.pro_codigo = p.pro_codigo

    LEFT JOIN (
      SELECT cod_produto, SUM(qtd) AS vendas_30d
      FROM vw_vendas
      WHERE finalizado = 'Y'
        AND dataemissao >= CURRENT_DATE - ($2 || ' days')::interval
      GROUP BY cod_produto
    ) v30 ON v30.cod_produto = p.pro_codigo

    WHERE p.pro_bloqueio_old = 'N'
      AND ($1::int IS NULL OR p.grp_codigo = $1)
      ${subClause}
      ${marcaClause}

    ORDER BY TRIM(p.pro_descricao)
  `, params);

  return rows.map(r => ({
    codigo:            String(r.codigo).trim(),
    ref_fornecedor:    String(r.ref_fornecedor).trim(),
    descricao:         String(r.descricao).trim(),
    estoque:           Number(r.estoque),
    vendas_30d:        Number(r.vendas_30d),
    preco_custo:       Number(r.preco_custo),
    est_min:           Number(r.est_min),
    ponto_reposicao:   Number(r.ponto_reposicao),
    est_max:           Number(r.est_max),
    quantidade_pedido: Number(r.quantidade_pedido),
    total_item:        Number(r.total_item),
  }));
}

module.exports = { getFornecedores, getDepartamentos, getCategorias, getMarcas, importarProdutos };
