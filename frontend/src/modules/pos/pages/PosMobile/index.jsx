import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check, ShoppingCart, User, X } from '@phosphor-icons/react';
import Header from '../../components/Header';
import ClientBar from '../../components/ClientBar';
import ProductList from '../../components/ProductList';
import CodeInput from '../../components/CodeInput';
import SearchModal from '../../components/SearchModal';
import PaymentScreen from '../../components/PaymentScreen';
import EditItemModal from '../../components/EditItemModal';
import AddPaymentModal from '../../components/AddPaymentModal';
import { usePOS } from '../../hooks/usePOS';
import WhatsappReceiptModal from '../../components/WhatsappReceiptModal';
import { createSale, findClientByCpf, getProductByCode, searchProducts, sendSaleWhatsappReceipt } from '../../services/pos.service';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

function parseMoneyInput(value) {
  const normalized = String(value || '').replace(',', '.');
  const num = Number(normalized);
  return Number.isFinite(num) ? num : 0;
}

function normalizeDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function isValidEAN13(raw) {
  const digits = normalizeDigits(raw);
  if (digits.length !== 13) return false;

  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    const n = digits.charCodeAt(i) - 48;
    if (n < 0 || n > 9) return false;
    sum += (i % 2 === 0) ? n : n * 3;
  }
  const check = (10 - (sum % 10)) % 10;
  return check === (digits.charCodeAt(12) - 48);
}

function isValidBarcode(raw) {
  const digits = normalizeDigits(raw);
  if (digits.length === 13) return isValidEAN13(digits);
  return digits.length === 12;
}

function normalizeCPF(value) {
  return String(value || '').replace(/\D/g, '').slice(0, 11);
}

function formatCPF(value) {
  const digits = normalizeCPF(value);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
}

function isValidCPF(value) {
  const cpf = normalizeCPF(value);
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i += 1) sum += Number(cpf[i]) * (10 - i);
  let check = (sum * 10) % 11;
  if (check === 10) check = 0;
  if (check !== Number(cpf[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i += 1) sum += Number(cpf[i]) * (11 - i);
  check = (sum * 10) % 11;
  if (check === 10) check = 0;
  return check === Number(cpf[10]);
}

function defaultPayment(remaining) {
  return {
    tipo: 'pix',
    valor: Number((remaining || 0).toFixed(2)),
    nsu: '',
    parcelas: 1,
  };
}

export default function PosMobilePage() {
  const pos = usePOS();
  const {
    items,
    cliente,
    payments,
    totals,
    setCliente,
    addItem,
    removeItem,
    updateQuantity,
    applyDiscount,
    addPayment,
    removePayment,
    clearSale,
  } = pos;

  const [screen, setScreen] = useState('sale');
  const [code, setCode] = useState('');
  const [toast, setToast] = useState('');

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [editingItem, setEditingItem] = useState(null);
  const [editState, setEditState] = useState({ quantidade: 1, desconto: 0, descontoTipo: 'percent' });

  const [clientOpen, setClientOpen] = useState(false);
  const [cpfInput, setCpfInput] = useState('');
  const [clientLookupLoading, setClientLookupLoading] = useState(false);
  const [clientMatch, setClientMatch] = useState(null);

  const [paymentOpen, setPaymentOpen] = useState(false);
  const [paymentForm, setPaymentForm] = useState(defaultPayment(0));

  const [whatsOpen, setWhatsOpen] = useState(false);
  const [lastSale, setLastSale] = useState(null);
  const [whatsPhone, setWhatsPhone] = useState(() => {
    try { return localStorage.getItem('pos_whatsapp_phone') || ''; } catch { return ''; }
  });

  const [scanOpen, setScanOpen] = useState(false);
  const [scanStatus, setScanStatus] = useState('');

  const scanVideoRef = useRef(null);
  const scanControlsRef = useRef(null);
  const lastScanRef = useRef({ text: '', at: 0 });

  const toastMessage = useMemo(() => toast, [toast]);
  const cpfDigits = useMemo(() => normalizeCPF(cpfInput), [cpfInput]);
  const cpfValid = useMemo(() => isValidCPF(cpfDigits), [cpfDigits]);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    let active = true;
    searchProducts('').then((data) => {
      if (!active) return;
      setSearchResults(Array.isArray(data) ? data : []);
    }).catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!searchOpen) return undefined;
    const t = setTimeout(async () => {
      try {
        const data = await searchProducts(searchQuery);
        setSearchResults(Array.isArray(data) ? data : []);
      } catch {
        setSearchResults([]);
      }
    }, 220);
    return () => clearTimeout(t);
  }, [searchOpen, searchQuery]);

  useEffect(() => {
    if (!clientOpen || !cpfValid) {
      setClientLookupLoading(false);
      setClientMatch(null);
      return undefined;
    }

    let active = true;
    setClientLookupLoading(true);

    const t = setTimeout(async () => {
      try {
        const found = await findClientByCpf(cpfDigits);
        if (!active) return;
        setClientMatch(found || null);
      } catch {
        if (!active) return;
        setClientMatch(null);
      } finally {
        if (active) setClientLookupLoading(false);
      }
    }, 260);

    return () => {
      active = false;
      clearTimeout(t);
    };
  }, [clientOpen, cpfDigits, cpfValid]);

  const addProduct = useCallback((product) => {
    addItem(product);
    setToast('Produto adicionado');
  }, [addItem]);

  const stopScanner = useCallback(() => {
    try { scanControlsRef.current?.stop?.(); } catch {}
    scanControlsRef.current = null;
    setScanStatus('');
  }, []);

  const handleScannedCode = useCallback(async (digits) => {
    setCode(digits);
    try {
      const product = await getProductByCode(digits);
      addProduct(product);
      setCode('');
    } catch {
      setToast('Produto nao encontrado');
    }
  }, [addProduct]);

  const startScanner = useCallback(async () => {
    if (!scanVideoRef.current) return;

    if (!navigator.mediaDevices?.getUserMedia) {
      setToast('Leitor indisponivel neste dispositivo');
      setScanOpen(false);
      return;
    }

    setScanStatus('Abrindo camera...');

    const [{ BrowserMultiFormatReader }, { BarcodeFormat, DecodeHintType }] = await Promise.all([
      import('@zxing/browser'),
      import('@zxing/library'),
    ]);

    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.EAN_13, BarcodeFormat.UPC_A]);
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

          if (!isValidBarcode(digits)) {
            setScanStatus('Aproxime um codigo valido...');
            return;
          }

          try { (controlsArg || controls)?.stop?.(); } catch {}
          scanControlsRef.current = null;

          setScanOpen(false);
          handleScannedCode(digits);
        }
      );

      scanControlsRef.current = controls;
      setScanStatus('Aponte para o codigo de barras');
    } catch {
      setToast('Nao foi possivel abrir a camera');
      setScanOpen(false);
    }
  }, [handleScannedCode]);

  useEffect(() => {
    if (!scanOpen) {
      stopScanner();
      return undefined;
    }

    startScanner();
    return () => stopScanner();
  }, [scanOpen, startScanner, stopScanner]);

  const handleCodeSubmit = useCallback(async (event) => {
    event.preventDefault();
    if (!code.trim()) return;

    try {
      const product = await getProductByCode(code.trim());
      addProduct(product);
      setCode('');
    } catch {
      setToast('Produto nao encontrado');
    }
  }, [code, addProduct]);

  const handleOpenEdit = useCallback((item) => {
    setEditingItem(item);
    setEditState({
      quantidade: item.quantidade,
      desconto: item.desconto || 0,
      descontoTipo: item.descontoTipo || 'percent',
    });
  }, []);

  const handleApplyEdit = useCallback(() => {
    if (!editingItem) return;
    updateQuantity(editingItem.codigo, editState.quantidade);
    applyDiscount(editingItem.codigo, editState.desconto, editState.descontoTipo);
    setEditingItem(null);
  }, [editingItem, editState, updateQuantity, applyDiscount]);

  const handleIncreaseQty = useCallback((codigo, currentQty) => {
    updateQuantity(codigo, Number(currentQty || 0) + 1);
  }, [updateQuantity]);

  const handleDecreaseQty = useCallback((codigo, currentQty) => {
    const next = Math.max(Number(currentQty || 0) - 1, 0);
    updateQuantity(codigo, next);
  }, [updateQuantity]);

  const handleAddPayment = useCallback(() => {
    if (totals.remaining <= 0) return;
    setPaymentForm(defaultPayment(totals.remaining));
    setPaymentOpen(true);
  }, [totals.remaining]);

  const handleConfirmPayment = useCallback(() => {
    const payment = {
      tipo: paymentForm.tipo,
      valor: parseMoneyInput(paymentForm.valor),
      nsu: paymentForm.nsu,
      parcelas: paymentForm.tipo === 'credito' ? Math.max(1, Number(paymentForm.parcelas || 1)) : undefined,
    };

    addPayment(payment);
    setPaymentOpen(false);
    setToast('Pagamento adicionado');
  }, [paymentForm, addPayment]);

  const handleFinishSale = useCallback(async () => {
    if (items.length === 0) {
      setToast('Adicione itens antes de finalizar');
      return;
    }
    if (Math.abs(totals.remaining) > 0.001) {
      setToast('Pagamento incompleto');
      return;
    }

    try {
      const sale = await createSale({
        cliente: cliente || undefined,
        items,
        total: totals.total,
        payments,
      });

      setLastSale(sale);
      setWhatsOpen(true);
      clearSale();
      setScreen('sale');
      setToast('Venda finalizada com sucesso');
    } catch (error) {
      setToast(error.message || 'Falha ao finalizar venda');
    }
  }, [items, totals.remaining, totals.total, payments, cliente, clearSale]);

  const handleSendWhatsappReceipt = useCallback(async ({ phone }) => {
    if (!lastSale?.id) return;
    try {
      await sendSaleWhatsappReceipt(lastSale.id, phone);
      setToast('Comprovante enviado');
      setWhatsPhone(phone);
      try { localStorage.setItem('pos_whatsapp_phone', phone); } catch {}
      setWhatsOpen(false);
    } catch (error) {
      setToast(error.message || 'Falha ao enviar comprovante');
      throw error;
    }
  }, [lastSale]);

  return (
    <div className="tw-flex tw-h-full tw-min-h-0 tw-w-full tw-flex-1 tw-bg-bg tw-pb-[calc(var(--bottom-nav-h)+env(safe-area-inset-bottom))] md:tw-pb-0">
      <section className="tw-relative tw-flex tw-h-full tw-min-h-0 tw-w-full tw-flex-col tw-overflow-hidden tw-bg-bg">
        {screen === 'sale' && (
          <>
            <Header
              title="Nova Venda"
                onCancel={() => {
                clearSale();
                setToast('Venda cancelada');
              }}
            />
            <div className="tw-h-px tw-w-full tw-bg-border" />

            <ClientBar cliente={cliente} onClick={() => setClientOpen(true)} />
            <div className="tw-h-px tw-w-full tw-bg-border" />

            <div className="tw-flex-1 tw-overflow-hidden">
              <ProductList
                items={items}
                onEdit={handleOpenEdit}
                onRemove={removeItem}
                onIncrease={handleIncreaseQty}
                onDecrease={handleDecreaseQty}
              />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-bg-surface tw-px-4 tw-py-[14px]">
              <div className="tw-flex tw-items-center tw-gap-2">
                <ShoppingCart size={18} weight="fill" className="tw-text-accent" />
                <span className="tw-font-inter tw-text-sm tw-font-medium tw-text-text2">{items.length} itens</span>
              </div>
              <p className="tw-font-inter tw-text-xl tw-font-bold tw-text-accent">{money(totals.total)}</p>
              <button
                type="button"
                onClick={() => setScreen('payment')}
                className="tw-flex tw-items-center tw-gap-1.5 tw-rounded-lg tw-border-0 tw-bg-accent tw-px-4 tw-py-2 tw-font-inter tw-text-sm tw-font-bold tw-text-bg tw-appearance-none"
              >
                Pagar
              </button>
            </div>

            <div className="tw-h-px tw-w-full tw-bg-border" />

            <CodeInput
              code={code}
              onCodeChange={setCode}
              onSubmitCode={handleCodeSubmit}
              onOpenScanner={() => setScanOpen(true)}
              onOpenSearch={() => setSearchOpen(true)}
            />
          </>
        )}

        {screen === 'payment' && (
            <PaymentScreen
              totals={totals}
              itemCount={totals.itemCount}
              payments={payments}
              onBack={() => setScreen('sale')}
              onCancel={() => setScreen('sale')}
              onAddPayment={handleAddPayment}
              onRemovePayment={removePayment}
              onFinish={handleFinishSale}
              canFinish={items.length > 0 && Math.abs(totals.remaining) <= 0.001}
            />
          )}

        <SearchModal
          open={searchOpen}
          query={searchQuery}
          results={searchResults}
          onQueryChange={setSearchQuery}
          onAdd={(product) => {
            addProduct(product);
            setSearchOpen(false);
          }}
          onClose={() => setSearchOpen(false)}
        />

        <EditItemModal
          item={editingItem}
          state={editState}
          onStateChange={setEditState}
          onClose={() => setEditingItem(null)}
          onConfirm={handleApplyEdit}
        />

        <AddPaymentModal
          open={paymentOpen}
          form={paymentForm}
          remaining={totals.remaining}
          onChange={setPaymentForm}
          onClose={() => setPaymentOpen(false)}
          onConfirm={handleConfirmPayment}
        />

        <WhatsappReceiptModal
          open={whatsOpen}
          saleId={lastSale?.id}
          defaultPhone={whatsPhone}
          onClose={() => setWhatsOpen(false)}
          onSend={handleSendWhatsappReceipt}
        />

        {scanOpen && (
          <div className="tw-absolute tw-inset-0 tw-z-30 tw-bg-black/80" onClick={() => setScanOpen(false)}>
            <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-rounded-t-2xl tw-bg-surface tw-p-4" onClick={(event) => event.stopPropagation()}>
              <div className="tw-mb-3 tw-flex tw-items-center tw-justify-between">
                <p className="tw-font-inter tw-text-base tw-font-semibold tw-text-text">Leitor codigo de barras</p>
                <button
                  type="button"
                  onClick={() => setScanOpen(false)}
                  className="tw-rounded-md tw-border-0 tw-bg-transparent tw-text-sm tw-font-semibold tw-text-text2 tw-appearance-none"
                >
                  Fechar
                </button>
              </div>

              <div className="tw-relative tw-h-64 tw-overflow-hidden tw-rounded-xl tw-bg-black">
                <video ref={scanVideoRef} className="tw-h-full tw-w-full tw-object-cover" muted playsInline autoPlay />
                <div className="tw-pointer-events-none tw-absolute tw-inset-6 tw-rounded-lg tw-border-2 tw-border-accent/90" />
              </div>

              <p className="tw-mt-3 tw-text-center tw-font-inter tw-text-xs tw-font-medium tw-text-text2">
                {scanStatus || 'Aponte para o codigo'}
              </p>
            </div>
          </div>
        )}

        {clientOpen && (
          <div className="tw-absolute tw-inset-0 tw-z-30 tw-flex tw-items-end tw-bg-black/70">
            <div className="tw-flex tw-w-full tw-flex-col tw-gap-5 tw-rounded-t-[20px] tw-bg-surface tw-px-5 tw-py-6">
              <div className="tw-flex tw-items-center tw-justify-between">
                <p className="tw-font-inter tw-text-lg tw-font-bold tw-text-text">Identificar Cliente</p>
                <button type="button" onClick={() => setClientOpen(false)} className="tw-border-0 tw-bg-transparent tw-text-text2 tw-appearance-none">
                  <X size={22} />
                </button>
              </div>

              <p className="tw-font-inter tw-text-sm tw-text-text2">Digite o CPF para identificar o cliente (opcional)</p>

              <div className="tw-flex tw-h-[52px] tw-items-center tw-gap-2.5 tw-rounded-[10px] tw-border tw-border-accent tw-bg-surface2 tw-px-[14px]">
                <User size={18} className="tw-text-accent" />
                <input
                  value={formatCPF(cpfInput)}
                  onChange={(event) => setCpfInput(normalizeCPF(event.target.value))}
                  className="tw-w-full tw-border-none tw-bg-transparent tw-font-inter tw-text-lg tw-font-medium tw-text-text tw-outline-none"
                  placeholder="123.456.789-00"
                />
              </div>

              {!!cpfInput && cpfValid && !clientLookupLoading && !!clientMatch && (
                <div className="tw-flex tw-items-center tw-gap-2.5 tw-rounded-[10px] tw-bg-surface2 tw-px-[14px] tw-py-3">
                  <div className="tw-grid tw-size-10 tw-place-items-center tw-rounded-full tw-bg-accent tw-font-inter tw-text-lg tw-font-bold tw-text-bg">
                    {(clientMatch.nome?.[0] || 'C').toUpperCase()}
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-0.5">
                    <p className="tw-font-inter tw-text-[15px] tw-font-semibold tw-text-text">{clientMatch.nome}</p>
                    <p className="tw-font-inter tw-text-xs tw-text-text2">{formatCPF(cpfDigits)}</p>
                  </div>
                </div>
              )}

              {!!cpfInput && cpfValid && clientLookupLoading && (
                <p className="tw-font-inter tw-text-xs tw-font-medium tw-text-text2">Buscando cliente...</p>
              )}

              {!!cpfInput && cpfValid && !clientLookupLoading && !clientMatch && (
                <p className="tw-font-inter tw-text-xs tw-font-medium tw-text-warn">Cliente nao encontrado para este CPF.</p>
              )}

              {!!cpfInput && !cpfValid && cpfDigits.length === 11 && (
                <p className="tw-font-inter tw-text-xs tw-font-medium tw-text-danger">CPF invalido. Verifique os digitos.</p>
              )}

              <div className="tw-flex tw-items-center tw-gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setCliente(null);
                    setCpfInput('');
                    setClientMatch(null);
                    setClientOpen(false);
                  }}
                  className="tw-h-12 tw-flex-1 tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-font-inter tw-text-[15px] tw-font-semibold tw-text-text2 tw-appearance-none"
                >
                  Pular
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (cpfDigits && !cpfValid) {
                      setToast('CPF invalido');
                      return;
                    }
                    if (cpfDigits && !clientMatch) {
                      setToast('Cliente nao encontrado');
                      return;
                    }
                    setCliente(cpfDigits ? { cpf: formatCPF(cpfDigits), nome: clientMatch.nome } : null);
                    setClientOpen(false);
                  }}
                  disabled={!!cpfInput && (!cpfValid || !clientMatch || clientLookupLoading)}
                  className="tw-flex tw-h-12 tw-flex-1 tw-items-center tw-justify-center tw-gap-1.5 tw-rounded-[10px] tw-border-0 tw-bg-accent tw-font-inter tw-text-[15px] tw-font-bold tw-text-bg tw-appearance-none disabled:tw-cursor-not-allowed disabled:tw-opacity-45"
                >
                  <Check size={18} weight="bold" />
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {!!toastMessage && (
          <div className="tw-absolute tw-bottom-24 tw-left-1/2 tw-z-40 tw--translate-x-1/2 tw-rounded-lg tw-border tw-border-border tw-bg-surface2 tw-px-5 tw-py-2 tw-font-inter tw-text-xs tw-text-text">
            {toastMessage}
          </div>
        )}
      </section>
    </div>
  );
}
