import { useState, useEffect, useRef, memo } from 'react';
import { formatCurrency, formatNum } from '../utils/calculations';

/* ─── StockBar ───────────────────────────────── */
const StockBar = memo(function StockBar({ dias, target }) {
  const capped = Math.min(dias, target * 2);
  const pct    = Math.round((capped / (target * 2)) * 100);
  const color  = dias >= target ? '#00e5a0' : dias >= target / 2 ? '#ff9f43' : '#ff4757';
  const label  = dias >= 9999 ? '∞' : `${formatNum(dias, 0)}d`;

  return (
    <div className="stock-bar-wrap">
      <div className="stock-bar-bg">
        <div className="stock-bar-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="stock-bar-val" style={{ color }}>{label}</span>
    </div>
  );
});

/* ─── QtyCell ────────────────────────────────── */
/*
  Usa estado local para não propagar cada tecla para App.jsx.
  O handler do pai só é chamado 400ms após parar de digitar (debounce).
  Isso evita re-render de toda a tabela a cada keystroke.
*/
const DEBOUNCE_MS = 400;

const QtyCell = memo(function QtyCell({ codigo, value, isModified, defaultQty, onQtdChange, onQtdReset }) {
  const [local, setLocal] = useState(value);
  const [dirty, setDirty] = useState(isModified);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  // Sincroniza quando valor muda externamente (ex: reset pelo pai)
  useEffect(() => {
    setLocal(value);
    setDirty(isModified);
  }, [value, isModified]);

  const handleChange = (e) => {
    const val = Math.max(0, parseInt(e.target.value, 10) || 0);
    setLocal(val);
    setDirty(val !== defaultQty);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (val === defaultQty) onQtdReset(codigo);
      else onQtdChange(codigo, val);
    }, DEBOUNCE_MS);
  };

  const flush = (val) => {
    clearTimeout(timerRef.current);
    if (val === defaultQty) onQtdReset(codigo);
    else onQtdChange(codigo, val);
  };

  const focusNextQty = () => {
    const el = inputRef.current;
    const tbody = el?.closest('tbody');
    if (!tbody) return;

    const inputs = Array.from(tbody.querySelectorAll('input.qty-input'));
    const idx = inputs.indexOf(el);
    const next = idx >= 0 ? inputs[idx + 1] : null;
    if (!next) return;
    next.focus();
    next.select();
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    flush(local);
    focusNextQty();
  };

  const handleReset = () => {
    clearTimeout(timerRef.current);
    setLocal(defaultQty);
    setDirty(false);
    onQtdReset(codigo);
  };

  return (
    <div className="qty-wrap">
      <input
        className={`qty-input${dirty ? ' modified' : ''}`}
        type="number"
        min={0}
        value={local}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {dirty && (
        <button className="reset-btn" title="Restaurar para 0" onClick={handleReset}>
          ↺
        </button>
      )}
    </div>
  );
});

/* ─── ProductRow ─────────────────────────────── */
/*
  Memoizado: só re-renderiza se suas próprias props mudarem.
  Recebe pedidoQty como valor primitivo (não o objeto pedido inteiro),
  então apenas a linha afetada re-renderiza ao editar uma quantidade.
*/
const ProductRow = memo(function ProductRow({
  product, pedidoQty, isSelected, isContagem, diasEstoque,
  onQtdChange, onQtdReset, onContagemToggle, onSelectOne,
}) {
  const isModified = pedidoQty !== undefined;
  const qtd = isModified ? pedidoQty : 0;
  const total = qtd * product.preco_custo;

  let rowClass = '';
  if (isSelected)  rowClass += ' selected-row';
  if (isModified && qtd === 0) rowClass += ' zero-qty';
  if (isContagem)  rowClass += ' in-contagem';

  return (
    <tr className={rowClass.trim()}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelectOne(product.codigo, e.target.checked)}
          style={{ cursor: 'pointer', accentColor: 'var(--accent2)' }}
        />
      </td>
      <td className="cell-mono">{product.codigo}</td>
      <td className="cell-desc" title={product.descricao}>{product.descricao}</td>
      <td className="cell-mono">{formatNum(product.estoque, 0)}</td>
      <td className="cell-mono">{formatNum(product.vendas_30d, 0)}</td>
      <td className="cell-mono">{formatNum(product.vendaDia, 2)}</td>
      <td>
        <StockBar dias={product.diasEstoqueAtual} target={diasEstoque} />
      </td>
      <td>
        <span className={`badge badge-${product.status}`}>
          {product.status === 'reposicao' ? 'Reposição' : 'Normalizado'}
        </span>
      </td>
      <td className="cell-mono">{formatNum(product.qtdSugerida, 0)}</td>
      <td>
        <QtyCell
          codigo={product.codigo}
          value={qtd}
          isModified={isModified}
          defaultQty={0}
          onQtdChange={onQtdChange}
          onQtdReset={onQtdReset}
        />
      </td>
      <td className="cell-mono">{formatCurrency(product.preco_custo)}</td>
      <td className="cell-mono">{formatCurrency(total)}</td>
      <td>
        <button
          className={`cnt-btn${isContagem ? ' active' : ''}`}
          onClick={() => onContagemToggle(product.codigo)}
        >
          {isContagem ? '✓ Cont.' : '+ Cont.'}
        </button>
      </td>
    </tr>
  );
});

/* ─── Cabeçalho da tabela ────────────────────── */
const COLS = [
  { key: null,               label: '',             sortable: false },
  { key: 'codigo',           label: 'Código',       sortable: true  },
  { key: 'descricao',        label: 'Descrição',    sortable: true  },
  { key: 'estoque',          label: 'Estoque',      sortable: true  },
  { key: 'vendas_30d',       label: 'Vendas 30d',   sortable: true  },
  { key: 'vendaDia',         label: 'Venda/dia',    sortable: true  },
  { key: 'diasEstoqueAtual', label: 'Dias est.',    sortable: true  },
  { key: 'status',           label: 'Status',       sortable: true  },
  { key: 'qtdSugerida',      label: 'Qtd sugerida', sortable: true  },
  { key: null,               label: 'Qtd pedido',   sortable: false },
  { key: 'preco_custo',      label: 'Custo unit.',  sortable: true  },
  { key: null,               label: 'Total item',   sortable: false },
  { key: null,               label: 'Contagem',     sortable: false },
];

const sortIcon = (key, sort) => {
  if (!key || sort.key !== key) return ' ↕';
  return sort.dir === 'asc' ? ' ↑' : ' ↓';
};

/* ─── ProductTable ───────────────────────────── */
export default function ProductTable({
  products, pedido, contagem, selected, sort, diasEstoque,
  onQtdChange, onQtdReset, onContagemToggle, onSelectOne, onSort,
}) {
  if (products.length === 0) {
    return (
      <div className="table-wrap">
        <div className="empty-state">
          <span>🔍</span>
          Nenhum produto encontrado
        </div>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="products-table">
        <thead>
          <tr>
            {COLS.map((col, i) => (
              <th
                key={i}
                className={col.key && sort.key === col.key ? 'sorted' : ''}
                style={{ cursor: col.sortable ? 'pointer' : 'default' }}
                onClick={() => col.sortable && col.key && onSort(col.key)}
              >
                {col.label}{col.sortable && sortIcon(col.key, sort)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <ProductRow
              key={p.codigo}
              product={p}
              pedidoQty={pedido[p.codigo]}
              isSelected={selected.has(p.codigo)}
              isContagem={contagem.has(p.codigo)}
              diasEstoque={diasEstoque}
              onQtdChange={onQtdChange}
              onQtdReset={onQtdReset}
              onContagemToggle={onContagemToggle}
              onSelectOne={onSelectOne}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
