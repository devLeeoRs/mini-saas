import { formatCurrency } from '../utils/calculations';

export default function SelectionBar({ selectedProducts, pedido, onClearSelection, onExportPDF, onExportXLSX }) {
  const total = selectedProducts.reduce((sum, p) => {
    const qtd = pedido[p.codigo] !== undefined ? pedido[p.codigo] : 0;
    return sum + qtd * p.preco_custo;
  }, 0);

  return (
    <div className="selection-bar">
      <div className="sel-info">
        <span className="sel-count">
          <strong>{selectedProducts.length}</strong> item(s) selecionado(s)
        </span>
        <span className="sel-total">{formatCurrency(total)}</span>
      </div>

      <button className="btn ghost" onClick={onClearSelection}>
        Limpar seleção
      </button>
      <button className="btn" onClick={onExportXLSX}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        ⬇ XLSX
      </button>
      <button className="btn red" onClick={onExportPDF}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        ⬇ PDF Pedido
      </button>
    </div>
  );
}
