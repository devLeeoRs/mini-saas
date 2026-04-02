export default function Header({
  page, onPageChange,
  contagemCount, onClearContagem, onPrintContagem,
  hasData, onNewUpload,
}) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          Pedido <span>/ Ferragem</span>
        </div>

        <div className="header-actions">
          {page === 'pedido' && (
            <>
              {contagemCount > 0 && (
                <>
                  <div className="cnt-badge" title="Itens na lista de contagem">
                    <span className="cnt-badge-label">📋 Contagem</span>
                    <span className="num">{contagemCount}</span>
                  </div>
                  <button className="btn red" onClick={onPrintContagem}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="btn-label">PDF Contagem</span>
                  </button>
                  <button className="btn ghost" onClick={onClearContagem}>
                    <span className="btn-label">Limpar lista</span>
                  </button>
                </>
              )}
              {hasData && (
                <button className="btn ghost" onClick={onNewUpload}>+ Importar</button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Navegação entre módulos */}
      <nav className="header-nav">
        <button
          className={`header-nav-btn${page === 'pedido' ? ' header-nav-btn--active' : ''}`}
          onClick={() => onPageChange('pedido')}
        >
          Pedido
        </button>
        <button
          className={`header-nav-btn${page === 'horarios' ? ' header-nav-btn--active' : ''}`}
          onClick={() => onPageChange('horarios')}
        >
          Horários
        </button>
        <button
          className={`header-nav-btn${page === 'inventario' ? ' header-nav-btn--active' : ''}`}
          onClick={() => onPageChange('inventario')}
        >
          Inventário
        </button>
      </nav>
    </header>
  );
}
