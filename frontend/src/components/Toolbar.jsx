const QUICK_DAYS = [15, 30, 45, 60, 90];

const FILTERS = [
  { value: 'todos',       label: 'Todos' },
  { value: 'reposicao',   label: 'Reposição' },
  { value: 'normalizado', label: 'Normalizado' },
  { value: 'qtd',         label: 'Qtd > 0' },
];

export default function Toolbar({
  dias, onDiasChange,
  filter, onFilterChange,
  search, onSearchChange,
  allSelected, onSelectAll,
  onExportXLSX,
  onExportPDF,
}) {
  const handleDias = (val) => {
    const n = Math.max(1, Math.min(365, Number(val)));
    if (!isNaN(n)) onDiasChange(n);
  };

  return (
    <div className="toolbar">
      {/* Dias de estoque */}
      <span className="toolbar-label">Dias</span>
      <div className="days-control">
        <button className="days-btn" onClick={() => handleDias(dias - 1)}>−</button>
        <input
          className="days-input"
          type="number"
          value={dias}
          min={1}
          max={365}
          onChange={(e) => handleDias(e.target.value)}
        />
        <button className="days-btn" onClick={() => handleDias(dias + 1)}>+</button>
      </div>

      <div className="quick-days">
        {QUICK_DAYS.map(d => (
          <button
            key={d}
            className={`qd-btn${dias === d ? ' active' : ''}`}
            onClick={() => onDiasChange(d)}
          >
            {d}d
          </button>
        ))}
      </div>

      <div className="toolbar-sep" />

      {/* Filtros */}
      <div className="filter-tabs">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-tab${filter === f.value ? ' active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="toolbar-sep" />

      {/* Busca */}
      <div className="search-wrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          className="search-input"
          placeholder="Código ou descrição…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="toolbar-spacer" />

      {/* Selecionar todos */}
      <label className="select-all-wrap">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
        />
        Todos
      </label>

      {/* Export XLSX */}
      <button className="btn" onClick={onExportXLSX}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        XLSX
      </button>

      {/* Export PDF */}
      <button className="btn red" onClick={onExportPDF}>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        PDF
      </button>
    </div>
  );
}
