import { useCallback, useMemo, useState } from 'react';

function toMoney(value) {
  const num = Number(value || 0);
  return Number.isFinite(num) ? num : 0;
}

function calcLine(item) {
  const subtotal = toMoney(item.precoUnitario) * Number(item.quantidade || 0);
  const discount = Number(item.desconto || 0);
  const discountAmount = item.descontoTipo === 'percent'
    ? (subtotal * discount) / 100
    : discount;
  const total = Math.max(subtotal - toMoney(discountAmount), 0);

  return {
    ...item,
    precoTotal: total,
    desconto: discount,
  };
}

export function usePOS() {
  const [items, setItems] = useState([]);
  const [cliente, setCliente] = useState(null);
  const [payments, setPayments] = useState([]);

  const addItem = useCallback((product) => {
    setItems((prev) => {
      const idx = prev.findIndex((it) => it.codigo === product.codigo);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = calcLine({
          ...next[idx],
          quantidade: next[idx].quantidade + 1,
        });
        return next;
      }

      return [
        ...prev,
        calcLine({
          codigo: String(product.codigo),
          descricao: String(product.descricao || ''),
          quantidade: 1,
          precoUnitario: toMoney(product.precoUnitario),
          precoTotal: toMoney(product.precoUnitario),
          desconto: 0,
          descontoTipo: 'percent',
        }),
      ];
    });
  }, []);

  const removeItem = useCallback((codigo) => {
    setItems((prev) => prev.filter((it) => it.codigo !== codigo));
  }, []);

  const updateQuantity = useCallback((codigo, qtd) => {
    const quantity = Math.max(0, Number(qtd || 0));
    setItems((prev) => prev
      .map((it) => (it.codigo === codigo ? calcLine({ ...it, quantidade: quantity }) : it))
      .filter((it) => it.quantidade > 0));
  }, []);

  const applyDiscount = useCallback((codigo, value, type = 'percent') => {
    setItems((prev) => prev.map((it) => {
      if (it.codigo !== codigo) return it;
      return calcLine({ ...it, desconto: Number(value || 0), descontoTipo: type });
    }));
  }, []);

  const addPayment = useCallback((payment) => {
    setPayments((prev) => [...prev, payment]);
  }, []);

  const removePayment = useCallback((index) => {
    setPayments((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearSale = useCallback(() => {
    setItems([]);
    setPayments([]);
    setCliente(null);
  }, []);

  const totals = useMemo(() => {
    const total = items.reduce((sum, item) => sum + toMoney(item.precoTotal), 0);
    const paid = payments.reduce((sum, payment) => sum + toMoney(payment.valor), 0);
    const delta = total - paid;
    return {
      total,
      paid,
      remaining: Math.max(delta, 0),
      change: Math.max(-delta, 0),
      itemCount: items.reduce((sum, item) => sum + Number(item.quantidade || 0), 0),
    };
  }, [items, payments]);

  return useMemo(() => ({
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
  }), [
    items,
    cliente,
    payments,
    totals,
    addItem,
    removeItem,
    updateQuantity,
    applyDiscount,
    addPayment,
    removePayment,
    clearSale,
  ]);
}
