import { ArrowLeft, X } from '@phosphor-icons/react';
import { cn } from '../utils/cn';

export default function Header({ title, onBack, onCancel, hideCancel = false }) {
  return (
    <div className="tw-flex tw-h-[52px] tw-items-center tw-justify-between tw-px-4">
      <div className="tw-flex tw-items-center tw-gap-3">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="tw-grid tw-size-6 tw-place-items-center tw-rounded tw-border-0 tw-bg-transparent tw-text-text tw-appearance-none"
          >
            <ArrowLeft size={22} weight="bold" />
          </button>
        )}
        <p className="tw-font-inter tw-text-xl tw-font-bold tw-text-text">{title}</p>
      </div>

      {!hideCancel && onCancel && (
        <button
          type="button"
          onClick={onCancel}
          className={cn(
            'tw-flex tw-items-center tw-gap-1.5 tw-rounded-lg tw-bg-danger tw-px-3.5 tw-py-1.5',
            'tw-border-0 tw-font-inter tw-text-[13px] tw-font-semibold tw-text-white tw-appearance-none'
          )}
        >
          <X size={14} weight="bold" />
          Cancelar
        </button>
      )}
    </div>
  );
}
