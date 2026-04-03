import { useState, useEffect } from 'react';

export default function Header({
  page, onPageChange,
  contagemCount, onClearContagem, onPrintContagem,
  hasData, onNewUpload,
  user, onLogout,
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

  const canSee = (key) => {
    const role = user?.role;
    if (!role) return false;
    if (key === 'inventario') return true;
    if (key === 'pos') return true;
    if (key === 'pedido') return role === 'admin' || role === 'gerente';
    if (key === 'horarios') return role === 'admin';
    return false;
  };

  const navBtn = (key, label) => {
    if (!canSee(key)) return null;
    return (
    <button
      className={`header-nav-btn${page === key ? ' header-nav-btn--active' : ''}`}
      onClick={() => { onPageChange(key); setMenuOpen(false); }}
    >
      {label}
    </button>
  );
  };

  return (
    <>
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

            {user && (
              <button className="btn ghost" onClick={onLogout} title="Sair">
                Sair
              </button>
            )}
          </div>
        </div>

        {/* Navegação entre módulos */}
        <nav className="header-nav">
          {navBtn('pedido', 'Pedido')}
          {navBtn('pos', 'POS')}
          {navBtn('horarios', 'Horários')}
          {navBtn('inventario', 'Inventário')}
        </nav>
      </header>

      {/* Toolbar mobile (bottom) */}
      <nav className="bottom-nav" aria-label="Navegação">
        {canSee('pedido') && (
          <button
            className={`bottom-nav-btn${page === 'pedido' ? ' active' : ''}`}
            onClick={() => onPageChange('pedido')}
            aria-label="Pedido"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M8 11h8M8 15h8" />
            </svg>
            <span>Pedido</span>
          </button>
        )}

        {canSee('pos') && (
          <button
            className={`bottom-nav-btn${page === 'pos' ? ' active' : ''}`}
            onClick={() => onPageChange('pos')}
            aria-label="POS"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 5h16v14H4z" />
              <path d="M8 9h8M8 13h5" />
            </svg>
            <span>POS</span>
          </button>
        )}

        {canSee('horarios') && (
          <button
            className={`bottom-nav-btn${page === 'horarios' ? ' active' : ''}`}
            onClick={() => onPageChange('horarios')}
            aria-label="Horários"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v3M16 2v3" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18" />
              <path d="M12 14v4M12 14h3" />
            </svg>
            <span>Horários</span>
          </button>
        )}

        {canSee('inventario') && (
          <button
            className={`bottom-nav-btn${page === 'inventario' ? ' active' : ''}`}
            onClick={() => onPageChange('inventario')}
            aria-label="Inventário"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z" />
              <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
              <path d="M8 11v6M12 11v6M16 11v6" />
            </svg>
            <span>Inventário</span>
          </button>
        )}
      </nav>
    </>
  );
}
