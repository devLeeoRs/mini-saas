import ProductCard from './ProductCard';

export default function ProductList({ items, onEdit, onRemove, onIncrease, onDecrease }) {
  return (
    <div className="tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-2 tw-overflow-y-auto tw-px-4 tw-py-3">
      {items.map((item) => (
        <ProductCard
          key={item.codigo}
          item={item}
          onEdit={onEdit}
          onRemove={onRemove}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}

      {items.length === 0 && (
        <div className="tw-flex tw-h-full tw-items-center tw-justify-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-p-6">
          <p className="tw-font-inter tw-text-sm tw-text-text2">Nenhum item no carrinho.</p>
        </div>
      )}
    </div>
  );
}
