import { useEffect, useRef, useState } from 'react';

/**
 * Dropdown com seleção múltipla e busca.
 *
 * Props:
 *   options      – [{ value, label }]
 *   selected     – string[]  (values selecionados)
 *   onChange     – (string[]) => void
 *   placeholder  – texto quando nada selecionado
 *   searchable   – boolean (default true)
 *   disabled     – boolean
 */
export default function MultiSelectDropdown({
  options = [],
  selected = [],
  onChange,
  placeholder = 'Selecionar…',
  searchable = true,
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  // Fecha ao clicar fora
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = search.trim()
    ? options.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  const toggle = (value) => {
    const next = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];
    onChange(next);
  };

  const clearAll = (e) => {
    e.stopPropagation();
    onChange([]);
  };

  const label = selected.length === 0
    ? placeholder
    : selected.length === 1
      ? options.find(o => o.value === selected[0])?.label ?? placeholder
      : `${selected.length} selecionados`;

  return (
    <div className={`msd${open ? ' msd--open' : ''}${disabled ? ' msd--disabled' : ''}`} ref={ref}>
      <button
        type="button"
        className="msd-trigger"
        onClick={() => { if (!disabled) { setOpen(o => !o); setSearch(''); } }}
        disabled={disabled}
      >
        <span className={`msd-label${selected.length === 0 ? ' msd-label--placeholder' : ''}`}>
          {label}
        </span>
        <span className="msd-icons">
          {selected.length > 0 && (
            <span className="msd-clear" onClick={clearAll} title="Limpar">✕</span>
          )}
          <span className="msd-arrow">{open ? '▲' : '▼'}</span>
        </span>
      </button>

      {open && (
        <div className="msd-dropdown">
          {searchable && (
            <div className="msd-search-wrap">
              <input
                autoFocus
                type="text"
                className="msd-search"
                placeholder="Buscar…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          )}

          <ul className="msd-list">
            {filtered.length === 0 && (
              <li className="msd-empty">Nenhum resultado</li>
            )}
            {filtered.map(o => (
              <li
                key={o.value}
                className={`msd-item${selected.includes(o.value) ? ' msd-item--selected' : ''}`}
                onClick={() => toggle(o.value)}
              >
                <span className="msd-checkbox">
                  {selected.includes(o.value) ? '☑' : '☐'}
                </span>
                {o.label}
              </li>
            ))}
          </ul>

          {selected.length > 0 && (
            <div className="msd-footer">
              <span>{selected.length} de {options.length} selecionado{selected.length > 1 ? 's' : ''}</span>
              <button type="button" onClick={clearAll}>Limpar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
