import { CreditCard, CurrencyDollar, PixLogo, Trash } from '@phosphor-icons/react';
import { PAYMENT_LABEL } from '../types/pos.types';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = (value) => brl.format(value || 0);

function IconByType({ type }) {
  if (type === 'pix') return <PixLogo size={18} weight="bold" className="tw-text-bg" />;
  if (type === 'dinheiro') return <CurrencyDollar size={18} weight="bold" className="tw-text-bg" />;
  return <CreditCard size={18} weight="bold" className="tw-text-white" />;
}

export default function PaymentSplit({ payments, onRemove }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2.5">
      {payments.map((payment, index) => (
        <div
          key={`${payment.tipo}-${index}`}
          className="tw-flex tw-items-center tw-justify-between tw-rounded-[10px] tw-bg-surface2 tw-p-[14px]"
        >
          <div className="tw-flex tw-items-center tw-gap-2.5">
            <div
              className={[
                'tw-grid tw-size-9 tw-place-items-center tw-rounded-lg',
                payment.tipo === 'pix' || payment.tipo === 'dinheiro' ? 'tw-bg-accent' : 'tw-bg-accent2',
              ].join(' ')}
            >
              <IconByType type={payment.tipo} />
            </div>
            <div className="tw-flex tw-flex-col tw-gap-0.5">
              <p className="tw-font-inter tw-text-sm tw-font-semibold tw-text-text">{PAYMENT_LABEL[payment.tipo]}</p>
              <p className="tw-font-inter tw-text-xs tw-text-text2">
                {payment.parcelas ? `${payment.parcelas}x` : 'A vista'}
                {payment.nsu ? ` • NSU: ${payment.nsu}` : ''}
              </p>
            </div>
          </div>

          <div className="tw-flex tw-items-center tw-gap-3">
            <p className={payment.tipo === 'pix' || payment.tipo === 'dinheiro' ? 'tw-font-inter tw-text-base tw-font-bold tw-text-accent' : 'tw-font-inter tw-text-base tw-font-bold tw-text-accent2'}>
              {money(payment.valor)}
            </p>
            <button type="button" onClick={() => onRemove(index)} className="tw-rounded-md tw-border-0 tw-bg-transparent tw-text-danger">
              <Trash size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
