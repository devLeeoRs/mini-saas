import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import * as api from './api';
import { calcProduct } from './utils/calculations';
import { exportXLSX } from './utils/export';
import Header from './components/Header';
import UploadScreen from './components/UploadScreen';
import HorariosPage from './pages/HorariosPage';
import InventarioPage from './pages/Inventario';
import LoginPage from './pages/Login';
import Toolbar from './components/Toolbar';
import StatsBar from './components/StatsBar';
import ProductTable from './components/ProductTable';
import SelectionBar from './components/SelectionBar';
import PrintView from './components/PrintView';

export default function App() {
  const [authUser, setAuthUser] = useState(null);
  // ── Dados do servidor ──────────────────────────
  const [products, setProducts] = useState([]);
  const [pedido, setPedido] = useState({});
  const [contagem, setContagem] = useState(new Set());
  const [config, setConfig] = useState({ dias_estoque: 30 });

  // ── Navegação ──────────────────────────────────
  const [page, setPage] = useState('pedido');

  // ── UI ─────────────────────────────────────────
  const [filter, setFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(new Set());
  const [sort, setSort] = useState({ key: 'qtdSugerida', dir: 'desc' });
  const [printJob, setPrintJob] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const contagemRef = useRef(contagem);

  const saveSession = useCallback(({ token, user }) => {
    try { localStorage.setItem('auth_token', token); } catch {}
    setAuthUser(user);

    // Ajusta a tela inicial conforme role
    if (user?.role === 'admin') return;
    if (user?.role === 'gerente' && page === 'horarios') setPage('pedido');
    if (user?.role === 'funcionario') setPage('inventario');
  }, [page]);

  const clearSession = useCallback(() => {
    try { localStorage.removeItem('auth_token'); } catch {}
    setAuthUser(null);
  }, []);

  const canSee = useCallback((key, role) => {
    if (!role) return false;
    if (key === 'inventario') return true;
    if (key === 'pedido') return role === 'admin' || role === 'gerente';
    if (key === 'horarios') return role === 'admin';
    return false;
  }, []);

  const ensureAllowedPage = useCallback((role) => {
    const current = page;
    if (canSee(current, role)) return;
    if (canSee('inventario', role)) setPage('inventario');
    else if (canSee('pedido', role)) setPage('pedido');
    else setPage('inventario');
  }, [page, canSee]);

  // ── Sessão (token) ─────────────────────────────
  useEffect(() => {
    let token = '';
    try { token = localStorage.getItem('auth_token') || ''; } catch {}
    if (!token) return;

    api.me()
      .then(({ user }) => {
        setAuthUser(user);
        ensureAllowedPage(user.role);
      })
      .catch(() => {
        clearSession();
      });
  }, []);

  useEffect(() => {
    contagemRef.current = contagem;
  }, [contagem]);

  // ── Carrega dados ao iniciar ───────────────────
  useEffect(() => {
    if (!authUser) return;
    if (!canSee('pedido', authUser.role)) return;
    Promise.all([
      api.getProducts(),
      api.getPedido(),
      api.getContagem(),
      api.getConfig(),
    ]).then(([prods, ped, cont, cfg]) => {
      setProducts(prods);
      setPedido(ped);
      setContagem(new Set(cont));
      setConfig(cfg);
    }).catch(() => {
      showToast('Não foi possível conectar ao servidor', 'error');
    });
  }, [authUser]);

  // ── Produtos calculados ────────────────────────
  const computed = useMemo(() =>
    products.map(p => calcProduct(p, config.dias_estoque)),
    [products, config.dias_estoque]
  );

  // ── Filtragem + ordenação ──────────────────────
  const filtered = useMemo(() => {
    let result = computed;

    if (filter === 'reposicao')   result = result.filter(p => p.status === 'reposicao');
    if (filter === 'normalizado') result = result.filter(p => p.status === 'normalizado');
    if (filter === 'qtd')         result = result.filter(p => (pedido[p.codigo] ?? 0) > 0);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.codigo.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q)
      );
    }

    return [...result].sort((a, b) => {
      const { key, dir } = sort;
      const va = a[key] ?? 0;
      const vb = b[key] ?? 0;
      const mult = dir === 'asc' ? 1 : -1;
      if (typeof va === 'string') return mult * va.localeCompare(vb);
      return mult * (va - vb);
    });
  }, [computed, filter, search, sort, filter === 'qtd' ? pedido : null]);

  // ── Listas derivadas ───────────────────────────
  const selectedProducts = useMemo(
    () => computed.filter(p => selected.has(p.codigo)),
    [computed, selected]
  );

  const contagemProducts = useMemo(
    () => computed.filter(p => contagem.has(p.codigo)),
    [computed, contagem]
  );

  // ── Estatísticas ───────────────────────────────
  const stats = useMemo(() => {
    const totalSelected = selectedProducts.reduce((sum, p) => {
      const qtd = pedido[p.codigo] !== undefined ? pedido[p.codigo] : 0;
      return sum + qtd * p.preco_custo;
    }, 0);
    return {
      total: computed.length,
      reposicao: computed.filter(p => p.status === 'reposicao').length,
      selectedCount: selected.size,
      totalSelected,
    };
  }, [computed, selected, pedido, selectedProducts]);

  // ── Helpers ────────────────────────────────────
  const showToast = useCallback((message, type = 'success') => {
    clearTimeout(toastTimer.current);
    setToast({ message, type });
    toastTimer.current = setTimeout(() => setToast(null), 2800);
  }, []);

  // ── Handlers ──────────────────────────────────
  const handlePgImport = useCallback(async (result) => {
    const [prods, ped, cont] = await Promise.all([api.getProducts(), api.getPedido(), api.getContagem()]);
    setProducts(prods);
    setPedido(ped);
    setContagem(new Set(cont));
    setSelected(new Set());
    showToast(`${result.count} produtos importados do banco`);
  }, [showToast]);

  const handleNewUpload = useCallback(async () => {
    await api.deleteProducts();
    setProducts([]);
    setPedido({});
    setContagem(new Set());
    setSelected(new Set());
    setFilter('todos');
    setSearch('');
  }, []);

  const handleDiasChange = useCallback(async (dias) => {
    const newConfig = { ...config, dias_estoque: dias };
    setConfig(newConfig);
    await api.updateConfig(newConfig);
  }, [config]);

  const handleQtdChange = useCallback(async (codigo, quantidade) => {
    setPedido(prev => ({ ...prev, [codigo]: quantidade }));
    await api.updatePedidoQtd(codigo, quantidade);
  }, []);

  const handleQtdReset = useCallback(async (codigo) => {
    setPedido(prev => {
      const next = { ...prev };
      delete next[codigo];
      return next;
    });
    await api.updatePedidoQtd(codigo, null);
  }, []);

  const handleContagemToggle = useCallback(async (codigo) => {
    const had = contagemRef.current.has(codigo);

    setContagem(prev => {
      const next = new Set(prev);
      had ? next.delete(codigo) : next.add(codigo);
      return next;
    });

    if (had) {
      await api.removeContagem(codigo);
      showToast('Removido da contagem');
    } else {
      await api.addContagem(codigo);
      showToast('Adicionado à contagem');
    }
  }, [showToast]);

  const handleClearContagem = useCallback(async () => {
    setContagem(new Set());
    await api.clearContagem();
    showToast('Lista de contagem limpa');
  }, [showToast]);

  const handleSelectAll = useCallback((checked) => {
    setSelected(checked ? new Set(filtered.map(p => p.codigo)) : new Set());
  }, [filtered]);

  const handleSelectOne = useCallback((codigo, checked) => {
    setSelected(prev => {
      const next = new Set(prev);
      checked ? next.add(codigo) : next.delete(codigo);
      return next;
    });
  }, []);

  const handleSort = useCallback((key) => {
    setSort(prev => ({
      key,
      dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  const handlePrint = useCallback((job) => {
    setPrintJob(job);
    setTimeout(() => {
      window.print();
      setPrintJob(null);
    }, 150);
  }, []);

  const handleExportXLSX = useCallback((items) => {
    exportXLSX(items, pedido);
    showToast('Planilha exportada');
  }, [pedido, showToast]);

  const printablePedidoProducts = useMemo(
    () => selectedProducts.filter((p) => (pedido[p.codigo] ?? 0) > 0),
    [selectedProducts, pedido]
  );

  const printableFilteredPedidoProducts = useMemo(
    () => filtered.filter((p) => (pedido[p.codigo] ?? 0) > 0),
    [filtered, pedido]
  );

  const allSelected = filtered.length > 0 && filtered.every(p => selected.has(p.codigo));

  return (
    <div className="app">
      {!authUser ? (
        <LoginPage onLogin={saveSession} />
      ) : (
        <Header
          page={page}
          onPageChange={(next) => {
            if (canSee(next, authUser.role)) setPage(next);
            else ensureAllowedPage(authUser.role);
          }}
          contagemCount={contagem.size}
          onClearContagem={handleClearContagem}
          onPrintContagem={() => handlePrint({ mode: 'contagem', products: contagemProducts })}
          hasData={products.length > 0}
          onNewUpload={handleNewUpload}
          user={authUser}
          onLogout={clearSession}
        />
      )}

      {authUser && (
        <>
          {page === 'inventario' ? (
            <InventarioPage />
          ) : page === 'horarios' ? (
            <HorariosPage />
          ) : products.length === 0 ? (
            <UploadScreen onPgImport={handlePgImport} />
          ) : (
            <main>
              <Toolbar
                dias={config.dias_estoque}
                onDiasChange={handleDiasChange}
                filter={filter}
                onFilterChange={setFilter}
                search={search}
                onSearchChange={setSearch}
                allSelected={allSelected}
                onSelectAll={handleSelectAll}
                onExportXLSX={() => handleExportXLSX(filtered)}
                onExportPDF={() => {
                  if (printableFilteredPedidoProducts.length === 0) {
                    showToast('Nenhum item com Qtd Pedido > 0', 'error');
                    return;
                  }
                  handlePrint({ mode: 'pedido', products: printableFilteredPedidoProducts, label: 'Itens filtrados', diasEstoque: config.dias_estoque });
                }}
              />
              <StatsBar stats={stats} />
              <ProductTable
                products={filtered}
                pedido={pedido}
                contagem={contagem}
                selected={selected}
                sort={sort}
                diasEstoque={config.dias_estoque}
                onQtdChange={handleQtdChange}
                onQtdReset={handleQtdReset}
                onContagemToggle={handleContagemToggle}
                onSelectOne={handleSelectOne}
                onSort={handleSort}
              />
            </main>
          )}

          {selected.size > 0 && products.length > 0 && (
            <SelectionBar
              selectedProducts={selectedProducts}
              pedido={pedido}
              onClearSelection={() => setSelected(new Set())}
              onExportPDF={() => {
                if (printablePedidoProducts.length === 0) {
                  showToast('Nenhum item com Qtd Pedido > 0', 'error');
                  return;
                }
                handlePrint({ mode: 'pedido', products: printablePedidoProducts, label: 'Itens selecionados', diasEstoque: config.dias_estoque });
              }}
              onExportXLSX={() => handleExportXLSX(selectedProducts)}
            />
          )}

          {printJob && (
            <PrintView
              mode={printJob.mode}
              products={printJob.products}
              pedido={pedido}
              diasEstoque={printJob.diasEstoque}
              label={printJob.label}
            />
          )}

          {toast && (
            <div className={`toast ${toast.type}`}>
              {toast.message}
            </div>
          )}
        </>
      )}
    </div>
  );
}
