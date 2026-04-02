import { useState, useEffect, useRef, useCallback } from 'react';
import * as api from '../../api';
import './inventario.css';

// ── Status helpers ────────────────────────────────────────────────────────────
const STATUS_LABEL = {
  aberto:       'Aberto',
  em_andamento: 'Em andamento',
  finalizado:   'Finalizado',
};

// ── Print view ────────────────────────────────────────────────────────────────
function PrintInventario({ inventario }) {
  return (
    <div className="inv-print">
      <div className="inv-print-header">
        <h1>{inventario.nome}</h1>
        <p>Data: {inventario.dataCriacao} &nbsp;|&nbsp; Status: {STATUS_LABEL[inventario.status]}</p>
        <p>Total de produtos contados: {inventario.produtos.length}</p>
      </div>
      <table className="inv-print-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Est. Anterior</th>
            <th>Qtd Contada</th>
            <th>Diferença</th>
            <th>OK</th>
          </tr>
        </thead>
        <tbody>
          {inventario.produtos.map(p => (
            <tr key={p.codigo} className={p.diferenca < 0 ? 'inv-print-row--neg' : p.diferenca > 0 ? 'inv-print-row--pos' : ''}>
              <td>{p.codigo}</td>
              <td>{p.descricao}</td>
              <td>{p.estoqueAtual}</td>
              <td>{p.quantidadeDigitada ?? '-'}</td>
              <td>
                {p.diferenca != null
                  ? (p.diferenca > 0 ? `+${p.diferenca}` : p.diferenca)
                  : '-'}
              </td>
              <td>{p.ok ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function InventarioPage() {
  const [inventarios, setInventarios]         = useState([]);
  const [inventarioAtual, setInventarioAtual] = useState(null);
  const [showModal, setShowModal]             = useState(false);
  const [novoNome, setNovoNome]               = useState('');

  const [busca, setBusca]         = useState('');
  const [produto, setProduto]     = useState(null);
  const [quantidade, setQuantidade] = useState('');
  const [toast, setToast]         = useState(null);
  const [printMode, setPrintMode] = useState(false);
  const [loadingBusca, setLoadingBusca] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState('');

  const buscaRef    = useRef(null);
  const qtdRef      = useRef(null);
  const toastTimer  = useRef(null);

  const scanVideoRef = useRef(null);
  const scanControlsRef = useRef(null);
  const lastScanRef = useRef({ text: '', at: 0 });

  // ── Load inventories ───────────────────────────────────────────────────────
  useEffect(() => {
    api.getInventarios()
      .then(data => {
        setInventarios(data);
        const active = data.find(i => i.status !== 'finalizado') || data[0];
        if (active) carregarInventario(active.id);
      })
      .catch(() => {});
  }, []);

  // ── Auto-focus busca ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!showModal && !printMode && !scanOpen) {
      setTimeout(() => buscaRef.current?.focus(), 120);
    }
  }, [showModal, inventarioAtual, printMode, scanOpen]);

  const normalizeDigits = (s) => String(s || '').replace(/\D+/g, '');

  const isValidEAN13 = (raw) => {
    const digits = normalizeDigits(raw);
    if (digits.length !== 13) return false;

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const n = digits.charCodeAt(i) - 48;
      if (n < 0 || n > 9) return false;
      sum += (i % 2 === 0) ? n : n * 3;
    }
    const check = (10 - (sum % 10)) % 10;
    return check === (digits.charCodeAt(12) - 48);
  };

  // ── Toast ──────────────────────────────────────────────────────────────────
  const showToast = useCallback((msg, type = 'success') => {
    clearTimeout(toastTimer.current);
    setToast({ msg, type });
    toastTimer.current = setTimeout(() => setToast(null), 2500);
  }, []);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const carregarInventario = async (id) => {
    try {
      const inv = await api.getInventario(id);
      setInventarioAtual(inv);
    } catch {
      showToast('Erro ao carregar inventário', 'error');
    }
  };

  const excluirInventario = async (id, nome) => {
    if (!confirm(`Excluir "${nome}"? Esta ação não pode ser desfeita.`)) return;
    try {
      await api.excluirInventario(id);
      setInventarios(prev => prev.filter(i => i.id !== id));
      if (inventarioAtual?.id === id) setInventarioAtual(null);
      showToast('Inventário excluído');
    } catch {
      showToast('Erro ao excluir', 'error');
    }
  };

  const criarInventario = async () => {
    if (!novoNome.trim()) return;
    try {
      const inv = await api.criarInventario(novoNome.trim());
      setInventarios(prev => [{
        id: inv.id, nome: inv.nome, status: inv.status,
        dataCriacao: inv.dataCriacao, totalProdutos: 0,
      }, ...prev]);
      setInventarioAtual(inv);
      setNovoNome('');
      setShowModal(false);
    } catch {
      showToast('Erro ao criar inventário', 'error');
    }
  };

  const limparTela = useCallback(() => {
    setProduto(null);
    setQuantidade('');
    setBusca('');
    setTimeout(() => buscaRef.current?.focus(), 50);
  }, []);

  // ── Busca produto ──────────────────────────────────────────────────────────
  const buscarProduto = useCallback(async (query) => {
    const q = query.trim();
    if (!q || !inventarioAtual) return;

    setLoadingBusca(true);
    try {
      const found = await api.buscarProdutoInventario(q);

      // Check if already counted in this inventory
      const jaCounted = inventarioAtual.produtos.find(p => p.codigo === found.codigo);

      setProduto({
        codigo:            found.codigo,
        gtin:              found.gtin ?? '',
        descricao:         found.descricao,
        estoqueAtual:      found.estoque ?? 0,
        quantidadeAnterior: jaCounted?.quantidadeDigitada ?? null,
        ok:                jaCounted?.ok ?? false,
      });
      setQuantidade(
        jaCounted?.quantidadeDigitada != null ? String(jaCounted.quantidadeDigitada) : ''
      );
      setTimeout(() => qtdRef.current?.focus(), 60);
    } catch {
      showToast('Produto não encontrado', 'error');
      setBusca('');
      setTimeout(() => buscaRef.current?.focus(), 50);
    } finally {
      setLoadingBusca(false);
    }
  }, [inventarioAtual, showToast]);

  // ── Barcode scanner (mobile only) ─────────────────────────────────────────
  const stopScanner = useCallback(() => {
    try { scanControlsRef.current?.stop?.(); } catch {}
    scanControlsRef.current = null;
    setScanStatus('');
  }, []);

  const startScanner = useCallback(async () => {
    if (!scanVideoRef.current) return;

    if (!navigator.mediaDevices?.getUserMedia) {
      showToast('Leitor indisponível neste dispositivo', 'error');
      setScanOpen(false);
      return;
    }

    setScanStatus('Abrindo câmera...');

    // Carrega ZXing sob demanda (usado apenas no mobile)
    const [{ BrowserMultiFormatReader }, { BarcodeFormat, DecodeHintType }] = await Promise.all([
      import('@zxing/browser'),
      import('@zxing/library'),
    ]);

    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.EAN_13]);
    hints.set(DecodeHintType.TRY_HARDER, true);

    const reader = new BrowserMultiFormatReader(hints, {
      delayBetweenScanAttempts: 80,
      delayBetweenScanSuccess: 500,
    });

    try {
      const controls = await reader.decodeFromConstraints(
        {
          audio: false,
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        },
        scanVideoRef.current,
        (result, error, controlsArg) => {
          const text = result?.getText?.() ?? result?.text;
          const digits = normalizeDigits(text);
          if (!digits) return;

          const now = Date.now();
          if (lastScanRef.current.text === digits && (now - lastScanRef.current.at) < 1200) return;
          lastScanRef.current = { text: digits, at: now };

          if (!isValidEAN13(digits)) {
            setScanStatus('Aproxime um EAN-13 válido...');
            return;
          }

          try { (controlsArg || controls)?.stop?.(); } catch {}
          scanControlsRef.current = null;

          setScanOpen(false);
          setBusca(digits);
          buscarProduto(digits);
        }
      );

      scanControlsRef.current = controls;
      setScanStatus('Aponte para o código EAN-13');
    } catch {
      showToast('Não foi possível abrir a câmera', 'error');
      setScanOpen(false);
    }
  }, [buscarProduto, showToast]);

  useEffect(() => {
    if (!scanOpen) {
      stopScanner();
      return;
    }

    startScanner();
    return () => stopScanner();
  }, [scanOpen, startScanner, stopScanner]);

  const handleBuscaKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    // Prefer the input value to avoid state lag with fast scanners
    buscarProduto(e.currentTarget.value);
  };

  // ── Realizar contagem ──────────────────────────────────────────────────────
  const realizarContagem = async () => {
    if (!produto || !inventarioAtual) return;
    if (quantidade === '') { showToast('Digite a quantidade', 'error'); return; }

    const qtd = parseFloat(quantidade);
    if (isNaN(qtd) || qtd < 0) { showToast('Quantidade inválida', 'error'); return; }

    try {
      const { inventario } = await api.salvarProdutoInventario(inventarioAtual.id, {
        codigo:             produto.codigo,
        gtin:               produto.gtin,
        descricao:          produto.descricao,
        estoqueAtual:       produto.estoqueAtual,
        quantidadeDigitada: qtd,
        ok:                 false,
      });
      setInventarioAtual(inventario);
      showToast('Contagem salva');
      limparTela();
    } catch {
      showToast('Erro ao salvar', 'error');
    }
  };

  // ── Produto correto ────────────────────────────────────────────────────────
  const marcarOk = async () => {
    if (!produto || !inventarioAtual) return;

    try {
      const { inventario } = await api.salvarProdutoInventario(inventarioAtual.id, {
        codigo:             produto.codigo,
        gtin:               produto.gtin,
        descricao:          produto.descricao,
        estoqueAtual:       produto.estoqueAtual,
        quantidadeDigitada: produto.quantidadeAnterior,
        ok:                 true,
      });
      setInventarioAtual(inventario);
      showToast('Produto marcado como correto');
      limparTela();
    } catch {
      showToast('Erro ao salvar', 'error');
    }
  };

  // ── Finalizar / reabrir ────────────────────────────────────────────────────
  const finalizarInventario = async () => {
    if (!inventarioAtual) return;
    try {
      const inv = await api.atualizarInventario(inventarioAtual.id, { status: 'finalizado' });
      setInventarioAtual(inv);
      setInventarios(prev => prev.map(i => i.id === inv.id ? { ...i, status: inv.status } : i));
      showToast('Inventário finalizado');
    } catch {
      showToast('Erro ao finalizar', 'error');
    }
  };

  const reabrirInventario = async () => {
    if (!inventarioAtual) return;
    try {
      const inv = await api.atualizarInventario(inventarioAtual.id, { status: 'em_andamento' });
      setInventarioAtual(inv);
      setInventarios(prev => prev.map(i => i.id === inv.id ? { ...i, status: inv.status } : i));
      showToast('Inventário reaberto');
    } catch {
      showToast('Erro ao reabrir', 'error');
    }
  };

  // ── Print ──────────────────────────────────────────────────────────────────
  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 150);
  };

  // ── Render: print mode ─────────────────────────────────────────────────────
  if (printMode && inventarioAtual) {
    return <PrintInventario inventario={inventarioAtual} />;
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="inv-page">

      {/* ── Top bar ── */}
      <div className="inv-topbar">
        <button className="inv-current" onClick={() => setShowModal(true)}>
          <span className="inv-current-label">Inventário</span>
          <span className="inv-current-name">
            {inventarioAtual?.nome ?? 'Nenhum selecionado'}
          </span>
          {inventarioAtual && (
            <span className={`inv-badge inv-badge--${inventarioAtual.status}`}>
              {STATUS_LABEL[inventarioAtual.status]}
            </span>
          )}
        </button>

        <div className="inv-topbar-actions">
          {inventarioAtual && (
            <>
              {inventarioAtual.status !== 'finalizado' ? (
                <button className="btn" onClick={finalizarInventario}>Finalizar</button>
              ) : (
                <button className="btn ghost" onClick={reabrirInventario}>Reabrir</button>
              )}
              <button className="btn ghost" onClick={handlePrint}>PDF</button>
            </>
          )}
          <button className="btn ghost" onClick={() => setShowModal(true)}>Trocar</button>
        </div>
      </div>

      {/* ── Content ── */}
      {!inventarioAtual ? (
        <div className="inv-empty">
          <p>Selecione ou crie um inventário para começar</p>
          <button className="btn" onClick={() => setShowModal(true)}>Selecionar inventário</button>
        </div>
      ) : (
        <div className="inv-content">

          {/* Search */}
          <div className="inv-search-box">
            <label className="inv-label">Código / GTIN</label>
            <div className="inv-search-row">
              <input
                ref={buscaRef}
                className="inv-input inv-input--large"
                type="text"
                value={busca}
                onChange={e => setBusca(e.target.value)}
                onKeyDown={handleBuscaKeyDown}
                placeholder="Digite ou escaneie o código..."
                autoComplete="off"
                inputMode="text"
                disabled={loadingBusca}
              />
              <button
                type="button"
                className="inv-scan-btn"
                onClick={() => setScanOpen(true)}
                disabled={loadingBusca}
                aria-label="Ler código de barras"
                title="Ler código de barras"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7V5a2 2 0 0 1 2-2h2" />
                  <path d="M20 7V5a2 2 0 0 0-2-2h-2" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h2" />
                  <path d="M20 17v2a2 2 0 0 1-2 2h-2" />
                  <path d="M7 9v6" />
                  <path d="M10 9v6" />
                  <path d="M14 9v6" />
                  <path d="M17 9v6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Barcode scanner (mobile) */}
          {scanOpen && (
            <div className="inv-scan-overlay" onClick={() => setScanOpen(false)}>
              <div className="inv-scan-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="inv-scan-top">
                  <div className="inv-scan-title">Leitor EAN-13</div>
                  <button className="inv-scan-close" onClick={() => setScanOpen(false)} aria-label="Fechar">
                    Fechar
                  </button>
                </div>

                <div className="inv-scan-video-wrap">
                  <video ref={scanVideoRef} className="inv-scan-video" muted playsInline autoPlay />
                  <div className="inv-scan-frame" />
                </div>

                <div className="inv-scan-help">
                  {scanStatus || 'Aponte para o código'}
                </div>
              </div>
            </div>
          )}

          {/* Product card */}
          {produto ? (
            <div className="inv-product-card">

              {/* Descrição */}
              <div className="inv-product-desc">{produto.descricao}</div>

              {/* Código + GTIN */}
              <div className="inv-product-codes">
                <span className="inv-code-chip">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9" y2="15"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="15" y1="9" x2="15" y2="15"/>
                  </svg>
                  {produto.codigo}
                </span>
                {produto.gtin && (
                  <span className="inv-code-chip inv-code-chip--gtin">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 5h2v14H3zm4 0h1v14H7zm3 0h2v14h-2zm4 0h1v14h-1zm3 0h2v14h-2z"/>
                    </svg>
                    {produto.gtin}
                  </span>
                )}
                {produto.ok && (
                  <span className="inv-ok-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Conferido
                  </span>
                )}
              </div>

              {/* Estoque info cards */}
              <div className="inv-stock-grid">
                <div className="inv-stock-card">
                  <div className="inv-stock-icon inv-stock-icon--blue">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                    </svg>
                  </div>
                  <div className="inv-stock-info">
                    <span className="inv-stock-label">Estoque atual</span>
                    <span className="inv-stock-val inv-stock-val--blue">{produto.estoqueAtual}</span>
                  </div>
                </div>

                {produto.quantidadeAnterior != null && (
                  <div className="inv-stock-card">
                    <div className="inv-stock-icon inv-stock-icon--warn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div className="inv-stock-info">
                      <span className="inv-stock-label">Última contagem</span>
                      <span className="inv-stock-val inv-stock-val--warn">{produto.quantidadeAnterior}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Qty input */}
              <div className="inv-qty-box">
                <label className="inv-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{marginRight: 5, verticalAlign: 'middle'}}>
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                  Quantidade contada
                </label>
                <input
                  ref={qtdRef}
                  className="inv-input inv-input--qty"
                  type="number"
                  min="0"
                  step="1"
                  value={quantidade}
                  onChange={e => setQuantidade(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') realizarContagem(); }}
                  placeholder="0"
                  inputMode="decimal"
                />
              </div>

              {/* Actions */}
              <div className="inv-actions">
                <button className="inv-btn-ok" onClick={marcarOk}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Produto correto
                </button>
                <button className="inv-btn-count" onClick={realizarContagem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Realizar contagem
                </button>
              </div>

              <button className="inv-cancel" onClick={limparTela}>Cancelar</button>
            </div>
          ) : (
            <div className="inv-hint">
              {inventarioAtual.produtos.length === 0
                ? 'Busque o primeiro produto pelo código ou GTIN'
                : `${inventarioAtual.produtos.length} produto${inventarioAtual.produtos.length !== 1 ? 's' : ''} contado${inventarioAtual.produtos.length !== 1 ? 's' : ''} — busque o próximo`}
            </div>
          )}

        </div>
      )}

      {/* ── Modal inventários ── */}
      {showModal && (
        <div className="inv-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="inv-modal" onClick={e => e.stopPropagation()}>
            <h2 className="inv-modal-title">Inventários</h2>

            <div className="inv-modal-create">
              <input
                className="inv-input"
                type="text"
                placeholder="Nome do novo inventário..."
                value={novoNome}
                onChange={e => setNovoNome(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') criarInventario(); }}
                autoFocus
              />
              <button className="btn" onClick={criarInventario} disabled={!novoNome.trim()}>
                Criar
              </button>
            </div>

            <div className="inv-modal-list">
              {inventarios.length === 0 && (
                <p className="inv-modal-empty">Nenhum inventário criado</p>
              )}
              {inventarios.map(inv => (
                <div
                  key={inv.id}
                  className={`inv-modal-item${inventarioAtual?.id === inv.id ? ' inv-modal-item--active' : ''}`}
                >
                  <div className="inv-modal-item-body" onClick={() => { carregarInventario(inv.id); setShowModal(false); }}>
                    <div className="inv-modal-item-name">{inv.nome}</div>
                    <div className="inv-modal-item-meta">
                      <span className={`inv-badge inv-badge--${inv.status}`}>
                        {STATUS_LABEL[inv.status]}
                      </span>
                      <span>{inv.totalProdutos} produto{inv.totalProdutos !== 1 ? 's' : ''}</span>
                      <span>{inv.dataCriacao}</span>
                    </div>
                  </div>
                  <button
                    className="inv-modal-item-del"
                    onClick={e => { e.stopPropagation(); excluirInventario(inv.id, inv.nome); }}
                    title="Excluir inventário"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <button className="btn ghost inv-modal-close-btn" onClick={() => setShowModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div className={`toast ${toast.type}`}>{toast.msg}</div>
      )}
    </div>
  );
}
