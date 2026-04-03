import { CaretRight, UserPlus } from '@phosphor-icons/react';

export default function ClientBar({ cliente, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="tw-flex tw-w-full tw-items-center tw-gap-2 tw-border-0 tw-bg-surface tw-px-4 tw-py-2.5 tw-appearance-none"
    >
      <UserPlus size={18} weight="bold" className="tw-text-accent" />
      <span className="tw-font-inter tw-text-sm tw-font-medium tw-text-text2">
        {cliente?.nome ? cliente.nome : cliente?.cpf ? cliente.cpf : '+ Adicionar CPF / Cliente'}
      </span>
      <CaretRight size={16} weight="bold" className="tw-ml-auto tw-text-text2" />
    </button>
  );
}
