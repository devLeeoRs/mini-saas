import { useState, useEffect } from 'react';

export default function Header({
  page, onPageChange,
  contagemCount, onClearContagem, onPrintContagem,
  hasData, onNewUpload,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha menu ao trocar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [page]);

  // Fecha menu ao redimensionar para desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navBtn = (key, label) => (
    <button
      className={`header-nav-btn${page === key ? ' header-nav-btn--active' : ''}`}
      onClick={() => { onPageChange(key); setMenuOpen(false); }}
    >
      {label}
    </button>
  );

  return (
    <>
      <header className="header">
        <div className="logo">
          Pedido <span>/ Ferragem</span>
        </div>

        {/* Nav desktop */}
        <nav className="header-nav header-nav--desktop">
          {navBtn('pedido', 'Pedido de Compra')}
          {navBtn('horarios', 'Horários')}
          {navBtn('inventario', 'Inventário')}
        </nav>

        <div className="header-actions">
          {page === 'pedido' && (
            <>
              {contagemCount > 0 && (
                <>
                  <div className="cnt-badge" title="Itens na lista de contagem">
                    <span>📋 Contagem</span>
                    <span className="num">{contagemCount}</span>
                  </div>
                  <button className="btn red header-hide-mobile" onClick={onPrintContagem}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    PDF Contagem
                  </button>
                  <button className="btn ghost header-hide-mobile" onClick={onClearContagem}>Limpar lista</button>
                </>
              )}
              {hasData && (
                <button className="btn ghost header-hide-mobile" onClick={onNewUpload}>+ Importar</button>
              )}
            </>
          )}

          {/* Hamburger button */}
          <button
            className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}

      {/* Mobile drawer */}
      <nav className={`mobile-drawer${menuOpen ? ' mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer-nav">
          {navBtn('pedido', 'Pedido de Compra')}
          {navBtn('horarios', 'Horários')}
          {navBtn('inventario', 'Inventário')}
        </div>

        {page === 'pedido' && (
          <div className="mobile-drawer-actions">
            {contagemCount > 0 && (
              <>
                <button className="btn red" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { onPrintContagem(); setMenuOpen(false); }}>
                  PDF Contagem ({contagemCount})
                </button>
                <button className="btn ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { onClearContagem(); setMenuOpen(false); }}>
                  Limpar lista
                </button>
              </>
            )}
            {hasData && (
              <button className="btn ghost" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { onNewUpload(); setMenuOpen(false); }}>
                + Importar
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
