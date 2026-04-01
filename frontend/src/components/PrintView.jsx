import { formatCurrency, formatNum } from '../utils/calculations';

function today() {
  return new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function PedidoPrint({ products, pedido, diasEstoque, label }) {
  let totalQty = 0;
  let totalVal = 0;

  const rows = products.filter((p) => (pedido[p.codigo] ?? 0) > 0);
  for (const p of rows) {
    const qtd = pedido[p.codigo] ?? 0;
    totalQty += qtd;
    totalVal += qtd * p.preco_custo;
  }

  return (
    <div className="pdf-wrap">
      <div className="pdf-hdr">
        <div className="pdf-hdr-l">
          <div className="pdf-title">Pedido de Compra</div>
          <div className="pdf-sub">
            {(label || 'Itens selecionados')}{diasEstoque ? ` · ${diasEstoque} dias de estoque` : ''}
          </div>
        </div>
        <div className="pdf-hdr-r">
          Data: {today()}<br />
          Itens: {rows.length}<br />
          Total: {formatCurrency(totalVal)}
        </div>
      </div>

      <table className="pdf-tbl">
        <thead>
          <tr>
            <th style={{ width: 30 }}>#</th>
            <th>Ref. Fornecedor</th>
            <th>Descrição</th>
            <th className="r">Qtd Pedido</th>
            <th className="r">Custo Unit.</th>
            <th className="r">Total Item</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p, i) => {
            const qtd = pedido[p.codigo] ?? 0;
            const total = qtd * p.preco_custo;
            return (
              <tr key={p.codigo}>
                <td className="m">{i + 1}</td>
                <td className="m">{p.ref_fornecedor || p.codigo}</td>
                <td>{p.descricao}</td>
                <td className="r">{formatNum(qtd, 0)}</td>
                <td className="r">{formatCurrency(p.preco_custo)}</td>
                <td className="r"><strong>{formatCurrency(total)}</strong></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><strong>TOTAL GERAL</strong></td>
            <td className="r" id="pdf-total-qty">{formatNum(totalQty, 0)}</td>
            <td></td>
            <td className="r" id="pdf-total-val"><strong>{formatCurrency(totalVal)}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function ContagemPrint({ products }) {
  return (
    <div className="pdf-wrap">
      <div className="pdf-hdr">
        <div className="pdf-hdr-l">
          <div className="pdf-title">Conferência de Estoque</div>
          <div className="pdf-sub">{products.length} produto(s) para conferência</div>
        </div>
        <div className="pdf-hdr-r">
          Data: {today()}<br />
          Responsável: ____________________
        </div>
      </div>

      <table className="pdf-tbl">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th className="r" style={{ width: 160 }}>Qtd. Contada</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.codigo}>
              <td className="m">{p.codigo}</td>
              <td>{p.descricao}</td>
              <td className="cnt-blank r"></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><strong>Total de itens</strong></td>
            <td className="r">{formatNum(products.length, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default function PrintView({ mode, products, pedido, diasEstoque, label }) {
  return (
    <div className="print-view">
      {mode === 'pedido' && <PedidoPrint products={products} pedido={pedido} diasEstoque={diasEstoque} label={label} />}
      {mode === 'contagem' && <ContagemPrint products={products} />}
    </div>
  );
}
