import { PaperPlaneRight, X } from '@phosphor-icons/react';
import { useCallback, useMemo, useState } from 'react';

function normalizeDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function parseBrWhatsappNumber(input) {
  const digits = normalizeDigits(input);
  if (!digits) return null;

  let local = digits;
  if (local.startsWith('55') && (local.length === 12 || local.length === 13)) {
    local = local.slice(2);
  }

  if (local.length !== 10 && local.length !== 11) return null;
  const ddd = Number(local.slice(0, 2));
  if (!Number.isInteger(ddd) || ddd < 11 || ddd > 99) return null;

  const phone = local.slice(2);
  if (phone.length !== 8 && phone.length !== 9) return null;

  const e164Digits = `55${local}`;
  return { e164: `+${e164Digits}`, e164Digits };
}

export default function WhatsappReceiptModal({
  open,
  saleId,
  defaultPhone,
  onClose,
  onSend,
}) {
  const [phone, setPhone] = useState(defaultPhone || '');
  const [sending, setSending] = useState(false);
  const parsed = useMemo(() => parseBrWhatsappNumber(phone), [phone]);

  const canSend = Boolean(parsed && saleId && !sending);

  const handleClose = useCallback(() => {
    if (sending) return;
    onClose?.();
  }, [onClose, sending]);

  const handleSend = useCallback(async () => {
    if (!parsed || !saleId || sending) return;
    setSending(true);
    try {
      await onSend?.({ phone, parsed });
    } finally {
      setSending(false);
    }
  }, [onSend, parsed, phone, saleId, sending]);

  if (!open) return null;

  return (
    <div className="tw-absolute tw-inset-0 tw-z-40 tw-flex tw-items-end tw-bg-black/70">
      <div className="tw-flex tw-w-full tw-flex-col tw-gap-4 tw-rounded-t-[20px] tw-bg-surface tw-px-5 tw-py-6">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-flex-col">
            <p className="tw-font-inter tw-text-lg tw-font-bold tw-text-text">Enviar comprovante</p>
            <p className="tw-font-inter tw-text-xs tw-text-text2">Pedido #{saleId}</p>
          </div>
          <button type="button" onClick={handleClose} className="tw-border-0 tw-bg-transparent tw-text-text2 tw-appearance-none">
            <X size={22} />
          </button>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-2">
          <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">Numero do WhatsApp</p>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="tw-h-12 tw-w-full tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-px-[14px] tw-font-inter tw-text-base tw-text-text tw-outline-none"
            placeholder="Ex: 11 99999-9999"
            inputMode="tel"
            autoFocus
          />
          <p className="tw-font-inter tw-text-xs tw-text-text2">
            {parsed ? `Formato: ${parsed.e164}` : 'Informe DDD + numero (10 ou 11 digitos)'}
          </p>
        </div>

        <div className="tw-flex tw-gap-2">
          <button
            type="button"
            disabled={sending}
            onClick={handleClose}
            className="tw-flex tw-h-12 tw-flex-1 tw-items-center tw-justify-center tw-rounded-[10px] tw-border tw-border-border tw-bg-surface2 tw-font-inter tw-text-[15px] tw-font-bold tw-text-text2 tw-appearance-none disabled:tw-opacity-45"
          >
            Pular
          </button>
          <button
            type="button"
            disabled={!canSend}
            onClick={handleSend}
            className="tw-flex tw-h-12 tw-flex-1 tw-items-center tw-justify-center tw-gap-2 tw-rounded-[10px] tw-border-0 tw-bg-accent tw-font-inter tw-text-[15px] tw-font-bold tw-text-bg tw-appearance-none disabled:tw-cursor-not-allowed disabled:tw-opacity-45"
          >
            <PaperPlaneRight size={18} weight="fill" />
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </div>
    </div>
  );
}
