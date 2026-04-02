const service = require('./inventario.service');
const pool    = require('../../config/database');

const ctrl = {
  listar(req, res) {
    res.json(service.listar());
  },

  criar(req, res) {
    const { nome } = req.body;
    if (!nome || !nome.trim()) return res.status(400).json({ error: 'Nome é obrigatório' });
    const inv = service.criar(nome.trim());
    res.status(201).json(inv);
  },

  obter(req, res) {
    const inv = service.obter(req.params.id);
    if (!inv) return res.status(404).json({ error: 'Inventário não encontrado' });
    res.json(inv);
  },

  atualizar(req, res) {
    const inv = service.atualizar(req.params.id, req.body);
    if (!inv) return res.status(404).json({ error: 'Inventário não encontrado' });
    res.json(inv);
  },

  salvarProduto(req, res) {
    const { codigo, gtin, descricao, estoqueAtual, quantidadeDigitada, ok } = req.body;
    if (!codigo) return res.status(400).json({ error: 'Código é obrigatório' });

    const qtd = quantidadeDigitada != null ? Number(quantidadeDigitada) : null;
    const est = Number(estoqueAtual ?? 0);

    const produto = {
      codigo,
      gtin:              gtin ?? '',
      descricao:         descricao ?? '',
      estoqueAtual:      est,
      quantidadeDigitada: qtd,
      diferenca:         qtd != null ? qtd - est : null,
      ok:                ok ?? false,
    };

    const inv = service.salvarProduto(req.params.id, produto);
    if (!inv) return res.status(404).json({ error: 'Inventário não encontrado' });
    res.json({ produto, inventario: inv });
  },

  excluir(req, res) {
    const ok = service.excluir(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Inventário não encontrado' });
    res.json({ success: true });
  },

  async buscarProduto(req, res, next) {
    const q = (req.query.q ?? '').trim();
    if (!q) return res.status(400).json({ error: 'Parâmetro q é obrigatório' });

    try {
      const { rows } = await pool.query(`
        SELECT
          p.pro_codigo::text                        AS codigo,
          TRIM(p.pro_descricao)                     AS descricao,
          COALESCE(
            NULLIF(TRIM(p.pro_codigo_ean::text), ''),
            NULLIF(TRIM(p.pro_codigo_or::text), ''),
            ''
          )                                         AS gtin,
          COALESCE(es.estoque, 0)                   AS estoque
        FROM produto p
        LEFT JOIN (
          SELECT pro_codigo, SUM(ees_up_saldo) AS estoque
          FROM estoque_empresa_saldo
          GROUP BY pro_codigo
        ) es ON es.pro_codigo = p.pro_codigo
        WHERE p.pro_bloqueio_old = 'N'
          AND (
            p.pro_codigo::text = $1::text
            OR TRIM(COALESCE(p.pro_codigo_ean::text, '')) = $1::text
            OR TRIM(COALESCE(p.pro_codigo_or::text, '')) = $1::text
          )
        LIMIT 1
      `, [q]);

      if (rows.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });

      const p = rows[0];
      res.json({
        codigo:   p.codigo,
        descricao: p.descricao,
        gtin:     p.gtin ?? '',
        estoque:  Number(p.estoque),
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = ctrl;
