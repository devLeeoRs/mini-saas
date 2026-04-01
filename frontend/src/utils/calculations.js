export function calcProduct(product, diasEstoque) {
  const vendaDia = product.vendas_30d / 30;
  const diasEstoqueAtual = vendaDia > 0 ? product.estoque / vendaDia : 9999;
  const qtdSugerida = Math.max(0, Math.ceil(vendaDia * diasEstoque - product.estoque));
  const status = qtdSugerida > 0 ? 'reposicao' : 'normalizado';

  return { ...product, vendaDia, diasEstoqueAtual, qtdSugerida, status };
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value || 0);
}

export function formatNum(value, decimals = 1) {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: 0,
  }).format(value || 0);
}
