import { Check, Minus, Percent, Plus, X } from '@phosphor-icons/react';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

export default function EditItemModal({
  item,
  state,
  onStateChange,
  onClose,
  onConfirm,
}) {
  if (!item) return null;

  const subtotal = Math.max((item.precoUnitario || 0) * Number(state.quantidade || 0), 0);
  const discountAmount = state.descontoTipo === 'percent'
    ? (subtotal * Number(state.desconto || 0)) / 100
    : Number(state.desconto || 0);
  const total = Math.max(subtotal - discountAmount, 0);

  return (
    <div className="tw-absolute tw-inset-0 tw-z-30 tw-flex tw-items-end tw-bg-black/70">
      <div className="tw-flex tw-w-full tw-flex-col tw-gap-5 tw-rounded-t-[20px] tw-bg-surface tw-px-5 tw-py-6">
        <div className="tw-flex tw-items-center tw-justify-between">
          <p className="tw-font-inter tw-text-lg tw-font-bold tw-text-text">Editar Item</p>
          <button type="button" onClick={onClose} className="tw-border-0 tw-bg-transparent tw-text-text2">
            <X size={22} />
          </button>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-1 tw-rounded-[10px] tw-bg-surface2 tw-p-[14px]">
          <p className="tw-font-inter tw-text-base tw-font-semibold tw-text-text">{item.descricao}</p>
          <p className="tw-font-inter tw-text-[13px] tw-text-text2">{money(item.precoUnitario)} / unidade</p>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2">
          <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Quantidade</p>
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-3">
            <button
              type="button"
              onClick={() => onStateChange({ ...state, quantidade: Math.max(1, state.quantidade - 1) })}
              className="tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-text-text"
            >
              <Minus size={20} />
            </button>
            <div className="tw-grid tw-h-12 tw-w-20 tw-place-items-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-font-inter tw-text-[22px] tw-font-bold tw-text-text">
              {state.quantidade}
            </div>
            <button
              type="button"
              onClick={() => onStateChange({ ...state, quantidade: state.quantidade + 1 })}
              className="tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-border-0 tw-bg-accent tw-text-bg"
            >
              <Plus size={20} weight="bold" />
            </button>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2">
          <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Desconto</p>
          <div className="tw-flex tw-items-center tw-gap-2.5">
            <div className="tw-flex tw-h-12 tw-flex-1 tw-items-center tw-gap-2 tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px]">
              <Percent size={16} className="tw-text-text2" />
              <input
                type="number"
                min="0"
                value={state.desconto}
                onChange={(event) => onStateChange({ ...state, desconto: Number(event.target.value || 0) })}
                className="tw-w-full tw-border-none tw-bg-transparent tw-font-inter tw-text-base tw-text-text tw-outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => onStateChange({ ...state, descontoTipo: 'percent' })}
              className={[
                'tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-text-lg tw-font-bold',
                state.descontoTipo === 'percent' ? 'tw-bg-accent2 tw-text-white' : 'tw-border tw-border-border tw-bg-surface2 tw-text-text2',
              ].join(' ')}
            >
              %
            </button>
            <button
              type="button"
              onClick={() => onStateChange({ ...state, descontoTipo: 'value' })}
              className={[
                'tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-text-sm tw-font-bold',
                state.descontoTipo === 'value' ? 'tw-bg-accent2 tw-text-white' : 'tw-border tw-border-border tw-bg-surface2 tw-text-text2',
              ].join(' ')}
            >
              R$
            </button>
          </div>
        </div>

        <div className="tw-h-px tw-w-full tw-bg-border" />

        <div className="tw-flex tw-items-center tw-justify-between">
          <p className="tw-font-inter tw-text-base tw-font-medium tw-text-text2">Subtotal</p>
          <p className="tw-font-inter tw-text-xl tw-font-bold tw-text-accent">{money(total)}</p>
        </div>

        <button
          type="button"
          onClick={onConfirm}
          className="tw-flex tw-h-[52px] tw-w-full tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border-0 tw-bg-accent tw-font-inter tw-text-base tw-font-bold tw-text-bg"
        >
          <Check size={20} weight="bold" />
          Confirmar
        </button>
      </div>
    </div>
  );
}
