import { memo } from 'react';
import { Minus, Plus, Trash } from '@phosphor-icons/react';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

function ProductCard({ item, onEdit, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="tw-flex tw-w-full tw-flex-col tw-gap-1.5 tw-rounded-[10px] tw-border tw-border-transparent tw-bg-surface2 tw-px-[14px] tw-py-3 tw-text-left">
      <div className="tw-flex tw-items-center tw-justify-between tw-gap-3">
        <button
          type="button"
          onClick={() => onEdit(item)}
          className="tw-appearance-none tw-border-0 tw-bg-transparent tw-text-left tw-font-inter tw-text-[15px] tw-font-semibold tw-text-text"
        >
          {item.descricao}
        </button>
        <button
          type="button"
          onClick={() => onRemove(item.codigo)}
          className="tw-grid tw-size-6 tw-place-items-center tw-rounded-md tw-border-0 tw-bg-transparent tw-text-danger tw-appearance-none"
        >
          <Trash size={16} weight="bold" />
        </button>
      </div>

      <div className="tw-flex tw-items-center tw-justify-between tw-text-sm">
        <span className="tw-font-inter tw-font-medium tw-text-accent">{money(item.precoUnitario)}</span>
        <span className="tw-font-inter tw-font-medium tw-text-text2">{String(item.quantidade).padStart(2, '0')} un</span>
        <span className="tw-font-inter tw-font-semibold tw-text-text">= {money(item.precoTotal)}</span>
      </div>

      <div className="tw-mt-1 tw-flex tw-items-center tw-justify-end tw-gap-2">
        <button
          type="button"
          onClick={() => onDecrease(item.codigo, item.quantidade)}
          className="tw-grid tw-size-8 tw-place-items-center tw-rounded-md tw-border tw-border-border tw-bg-[#242938] tw-text-text tw-appearance-none"
        >
          <Minus size={14} weight="bold" />
        </button>
        <span className="tw-min-w-8 tw-text-center tw-font-inter tw-text-xs tw-font-semibold tw-text-text2">
          {String(item.quantidade).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={() => onIncrease(item.codigo, item.quantidade)}
          className="tw-grid tw-size-8 tw-place-items-center tw-rounded-md tw-border-0 tw-bg-accent tw-text-bg tw-appearance-none"
        >
          <Plus size={14} weight="bold" />
        </button>
      </div>
    </div>
  );
}

export default memo(ProductCard);
