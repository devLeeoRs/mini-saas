import * as XLSX from 'xlsx';

export function exportXLSX(products, pedido, filename = 'pedido-compra.xlsx') {
  const data = products.map((p, i) => {
    const qtd = pedido[p.codigo] !== undefined ? pedido[p.codigo] : 0;
    return {
      Item: i + 1,
      Código: p.codigo,
      'Ref. Fornecedor': p.ref_fornecedor || '',
      Descrição: p.descricao,
      'Estoque Atual': p.estoque,
      'Vendas 30d': p.vendas_30d,
      'Qtd Pedido': qtd,
      'Custo Unit. (R$)': p.preco_custo,
      'Total (R$)': qtd * p.preco_custo,
    };
  });

  const ws = XLSX.utils.json_to_sheet(data);

  // Largura das colunas
  ws['!cols'] = [
    { wch: 5 }, { wch: 14 }, { wch: 40 }, { wch: 14 },
    { wch: 10 }, { wch: 12 }, { wch: 16 }, { wch: 14 },
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Pedido de Compra');
  XLSX.writeFile(wb, filename);
}
