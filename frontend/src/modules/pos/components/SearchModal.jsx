import { MagnifyingGlass, Plus } from '@phosphor-icons/react';
import Header from './Header';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

export default function SearchModal({
  open,
  query,
  results,
  onQueryChange,
  onAdd,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="tw-absolute tw-inset-0 tw-z-20 tw-flex tw-flex-col tw-bg-bg">
      <Header title="Buscar Produto" onBack={onClose} hideCancel />
      <div className="tw-h-px tw-w-full tw-bg-border" />

      <div className="tw-px-4 tw-py-3">
        <div className="tw-flex tw-h-12 tw-items-center tw-gap-2 tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px]">
          <MagnifyingGlass size={18} className="tw-text-text2" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            className="tw-w-full tw-border-none tw-bg-transparent tw-font-inter tw-text-[15px] tw-text-text tw-outline-none placeholder:tw-text-text2"
            placeholder="Detergente..."
          />
        </div>
      </div>

      <div className="tw-flex tw-flex-1 tw-flex-col tw-overflow-y-auto tw-px-4 tw-pb-4">
        {results.map((item) => (
          <div
            key={item.codigo}
            className="tw-flex tw-items-center tw-justify-between tw-p-[14px] odd:tw-bg-surface2 even:tw-bg-[#141928]"
          >
            <div className="tw-flex tw-flex-col tw-gap-1 tw-text-left">
              <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">{item.descricao}</p>
              <div className="tw-flex tw-items-center tw-gap-3">
                <span className="tw-font-inter tw-text-[13px] tw-font-semibold tw-text-accent">{money(item.precoUnitario)}</span>
                <span className="tw-font-inter tw-text-xs tw-text-text2">Estoque: {item.estoque || 0}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onAdd(item)}
              className="tw-grid tw-size-8 tw-place-items-center tw-rounded-md tw-border-0 tw-bg-accent tw-text-bg tw-appearance-none"
            >
              <Plus size={14} weight="bold" />
            </button>
          </div>
        ))}

        {results.length === 0 && (
          <div className="tw-flex tw-h-24 tw-items-center tw-justify-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2/30">
            <p className="tw-font-inter tw-text-sm tw-text-text2">Nenhum produto encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}
