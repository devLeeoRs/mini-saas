import { MagnifyingGlass, Scan } from '@phosphor-icons/react';

export default function CodeInput({ code, onCodeChange, onSubmitCode, onOpenSearch, onOpenScanner }) {
  return (
    <div className="tw-flex tw-w-full tw-items-center tw-gap-2.5 tw-bg-surface tw-px-4 tw-py-3">
      <form
        onSubmit={onSubmitCode}
        className="tw-flex tw-h-12 tw-flex-1 tw-items-center tw-gap-2 tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px]"
      >
        <MagnifyingGlass size={18} className="tw-text-text2" />
        <input
          value={code}
          onChange={(event) => onCodeChange(event.target.value)}
          className="tw-w-full tw-border-none tw-bg-transparent tw-font-inter tw-text-[15px] tw-text-text tw-outline-none placeholder:tw-text-text2"
          placeholder="Codigo ou GTIN..."
        />
      </form>

      <button
        type="button"
        onClick={onOpenScanner}
        className="tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-border-0 tw-bg-accent2 tw-text-white tw-appearance-none"
      >
        <Scan size={22} weight="bold" />
      </button>

      <button
        type="button"
        onClick={onOpenSearch}
        className="tw-grid tw-size-12 tw-place-items-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-text-text2 tw-appearance-none"
      >
        <MagnifyingGlass size={22} weight="bold" />
      </button>
    </div>
  );
}
