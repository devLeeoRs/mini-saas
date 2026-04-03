import { CreditCard, CurrencyDollar, PixLogo, X } from '@phosphor-icons/react';
import { PAYMENT_LABEL, PAYMENT_TYPES } from '../types/pos.types';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function PaymentTypeButton({ type, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
        className={[
        'tw-flex tw-flex-1 tw-items-center tw-justify-center tw-gap-2 tw-rounded-[10px] tw-border tw-border-solid tw-py-2.5 tw-appearance-none',
        active
          ? 'tw-border-accent2 tw-bg-accent2/15 tw-text-accent2'
          : 'tw-border-border tw-bg-surface2 tw-text-text2',
      ].join(' ')}
    >
      {type === 'pix' ? <PixLogo size={16} weight="bold" /> : <CreditCard size={16} weight="bold" />}
      <span className="tw-font-inter tw-text-xs tw-font-semibold">{PAYMENT_LABEL[type]}</span>
    </button>
  );
}

export default function AddPaymentModal({
  open,
  form,
  remaining,
  onChange,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  const needsNSU = form.tipo === 'debito' || form.tipo === 'credito';
  const needsParcelas = form.tipo === 'credito';
  const parsedValue = Number(String(form.valor ?? '').replace(',', '.'));
  const canConfirm = parsedValue > 0 && (!needsNSU || String(form.nsu || '').trim());

  return (
    <div className="tw-absolute tw-inset-0 tw-z-40 tw-flex tw-items-end tw-bg-black/70">
      <div className="tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-t-[20px] tw-bg-surface tw-px-5 tw-py-6">
        <div className="tw-flex tw-items-center tw-justify-between">
          <p className="tw-font-inter tw-text-lg tw-font-bold tw-text-text">Adicionar Pagamento</p>
          <button type="button" onClick={onClose} className="tw-border-0 tw-bg-transparent tw-text-text2 tw-appearance-none">
            <X size={22} />
          </button>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2.5">
          <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Forma de pagamento</p>
          <div className="tw-flex tw-flex-wrap tw-gap-2">
            {PAYMENT_TYPES.map((type) => (
              <PaymentTypeButton
                key={type}
                type={type}
                active={form.tipo === type}
                onClick={() => onChange({ ...form, tipo: type })}
              />
            ))}
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2">
          <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Valor</p>
          <div className="tw-flex tw-h-12 tw-items-center tw-gap-2.5 tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px]">
            <CurrencyDollar size={16} className="tw-text-text2" />
            <input
              type="number"
              step="0.01"
              min="0"
              value={form.valor}
              onChange={(event) => {
                const raw = event.target.value;
                onChange({
                  ...form,
                  valor: raw === '' ? '' : Number(raw.replace(',', '.')),
                });
              }}
              className="tw-w-full tw-border-none tw-bg-transparent tw-font-inter tw-text-base tw-text-text tw-outline-none"
              placeholder="0,00"
            />
          </div>
          <p className="tw-font-inter tw-text-xs tw-text-text2">Restante: {brl.format(remaining || 0)}</p>
        </div>

        {needsNSU && (
          <div className="tw-flex tw-flex-col tw-gap-2">
            <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">NSU</p>
            <input
              value={form.nsu}
              onChange={(event) => onChange({ ...form, nsu: event.target.value })}
              className="tw-h-12 tw-w-full tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px] tw-font-inter tw-text-base tw-text-text tw-outline-none"
              placeholder="Informe o NSU"
            />
          </div>
        )}

        {needsParcelas && (
          <div className="tw-flex tw-flex-col tw-gap-2">
            <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Parcelas</p>
            <input
              type="number"
              min="1"
              value={form.parcelas}
              onChange={(event) => onChange({ ...form, parcelas: Number(event.target.value || 1) })}
              className="tw-h-12 tw-w-full tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px] tw-font-inter tw-text-base tw-text-text tw-outline-none"
            />
          </div>
        )}

        <button
          type="button"
          disabled={!canConfirm}
          onClick={onConfirm}
          className="tw-flex tw-h-12 tw-items-center tw-justify-center tw-rounded-[10px] tw-border-0 tw-bg-accent tw-font-inter tw-text-[15px] tw-font-bold tw-text-bg tw-appearance-none disabled:tw-cursor-not-allowed disabled:tw-opacity-45"
        >
          Confirmar pagamento
        </button>
      </div>
    </div>
  );
}
