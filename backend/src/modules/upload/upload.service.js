const XLSX = require('xlsx');
const productsService = require('../products/products.service');

function normalizeKey(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

function getField(row, keys) {
  for (const k of keys) {
    const found = Object.keys(row).find(rk => normalizeKey(rk) === k);
    if (found !== undefined) return row[found];
  }
  return undefined;
}

function parseXlsx(buffer) {
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheet    = workbook.Sheets[workbook.SheetNames[0]];
  const rows     = XLSX.utils.sheet_to_json(sheet);

  const products = rows.map(row => ({
    codigo:        String(getField(row, ['codigo']) ?? '').trim(),
    ref_fornecedor: String(getField(row, ['ref_fornecedor', 'ref', 'referencia_fornecedor', 'referencia']) ?? '').trim(),
    descricao:     String(getField(row, ['descricao']) ?? '').trim(),
    estoque:       Number(getField(row, ['estoque']) ?? 0),
    vendas_30d:    Number(getField(row, ['vendas_30d', 'vendas30d', 'vendas']) ?? 0),
    preco_custo:   Number(getField(row, ['preco_custo', 'precocusto', 'custo']) ?? 0),
  })).filter(p => p.codigo);

  productsService.saveAll(products);
  return products.length;
}

module.exports = { parseXlsx };
