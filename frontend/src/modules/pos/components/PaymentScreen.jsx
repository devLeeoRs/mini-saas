import { CheckCircle, Plus } from '@phosphor-icons/react';
import Header from './Header';
import PaymentSplit from './PaymentSplit';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

export default function PaymentScreen({
  totals,
  payments,
  onBack,
  onCancel,
  onAddPayment,
  onRemovePayment,
  onFinish,
  canFinish,
  itemCount,
}) {
  return (
    <div className="tw-absolute tw-inset-0 tw-z-20 tw-flex tw-flex-col tw-bg-bg">
      <Header title="Pagamento" onBack={onBack} hideCancel onCancel={onCancel} />
      <div className="tw-h-px tw-w-full tw-bg-border" />

      <div className="tw-flex tw-flex-1 tw-flex-col tw-gap-4 tw-overflow-y-auto tw-p-4">
        <div className="tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2 tw-rounded-2xl tw-bg-surface2 tw-p-5">
          <p className="tw-font-inter tw-text-xs tw-font-semibold tw-uppercase tw-tracking-[1px] tw-text-text2">Total da venda</p>
          <p className="tw-font-inter tw-text-4xl tw-font-bold tw-text-accent">{money(totals.total)}</p>
          <p className="tw-font-inter tw-text-[13px] tw-font-medium tw-text-text2">{itemCount} itens</p>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2.5">
          <p className="tw-font-inter tw-text-base tw-font-semibold tw-text-text">Formas de Pagamento</p>
          <PaymentSplit payments={payments} onRemove={onRemovePayment} />
          <button
            type="button"
            onClick={onAddPayment}
            className="tw-flex tw-h-11 tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-[10px] tw-border tw-border-dashed tw-border-text2 tw-bg-transparent tw-font-inter tw-text-sm tw-font-medium tw-text-text2 tw-appearance-none"
          >
            <Plus size={16} />
            Adicionar Pagamento
          </button>
        </div>

        <div className="tw-h-px tw-w-full tw-bg-border" />

        <div className="tw-flex tw-flex-col tw-gap-2.5">
          <div className="tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-inter tw-text-sm tw-text-text2">Total da venda</span>
            <span className="tw-font-inter tw-text-sm tw-font-medium tw-text-text">{money(totals.total)}</span>
          </div>
          <div className="tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-inter tw-text-sm tw-text-text2">Total pago</span>
            <span className="tw-font-inter tw-text-sm tw-font-semibold tw-text-accent">{money(totals.paid)}</span>
          </div>
          <div className="tw-flex tw-items-center tw-justify-between">
            <span className="tw-font-inter tw-text-sm tw-text-text2">Restante</span>
            <span className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">{money(totals.remaining)}</span>
          </div>
          {totals.change > 0 && (
            <div className="tw-flex tw-items-center tw-justify-between">
              <span className="tw-font-inter tw-text-sm tw-text-text2">Troco</span>
              <span className="tw-font-inter tw-text-sm tw-font-semibold tw-text-accent">{money(totals.change)}</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onFinish}
          disabled={!canFinish}
          className="tw-mt-auto tw-flex tw-h-[52px] tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border-0 tw-bg-accent tw-font-inter tw-text-base tw-font-bold tw-text-bg tw-appearance-none disabled:tw-cursor-not-allowed disabled:tw-opacity-45"
        >
          <CheckCircle size={20} weight="fill" />
          Finalizar Venda
        </button>
      </div>
    </div>
  );
}
