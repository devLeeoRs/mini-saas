const service         = require('./importacao.service');
const productsService = require('../products/products.service');

async function getFornecedores(req, res, next) {
  try { res.json(await service.getFornecedores()); } catch (err) { next(err); }
}

async function getDepartamentos(req, res, next) {
  try { res.json(await service.getDepartamentos()); } catch (err) { next(err); }
}

async function getCategorias(req, res, next) {
  try {
    res.json(await service.getCategorias(req.query.grp_codigo || null));
  } catch (err) { next(err); }
}

async function getMarcas(req, res, next) {
  try { res.json(await service.getMarcas()); } catch (err) { next(err); }
}

async function importar(req, res, next) {
  try {
    const { for_codigos, gru_codigo, sub_codigos, mar_codigos, dias } = req.body;

    const toList = (v) => (Array.isArray(v) ? v.filter(Boolean) : v ? [v] : []);

    const products = await service.importarProdutos({
      for_codigos: toList(for_codigos).length > 0 ? toList(for_codigos) : null,
      gru_codigo:  gru_codigo || null,
      sub_codigos: toList(sub_codigos).length > 0 ? toList(sub_codigos) : null,
      mar_codigos: toList(mar_codigos).length > 0 ? toList(mar_codigos) : null,
      dias:        Number(dias) || 30,
    });

    if (products.length === 0) {
      return res.status(404).json({ error: 'Nenhum produto encontrado com os filtros selecionados.' });
    }

    productsService.saveAll(products);
    res.json({ success: true, count: products.length });
  } catch (err) {
    next(err);
  }
}

module.exports = { getFornecedores, getDepartamentos, getCategorias, getMarcas, importar };
