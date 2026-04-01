import { calcularHorasMes, calcularHorasExtras, formatHoras } from '../../utils/horarios';

export default function ResumoHoras({ escalas, funcionario }) {
  if (!funcionario) return null;

  const totalHoras  = calcularHorasMes(escalas);
  const carga       = Number(funcionario.cargaHorariaMensal);
  const extras      = calcularHorasExtras(totalHoras, carga);
  const diasTrabalho = escalas.filter(e => e.tipo === 'trabalho').length;
  const diasFolga    = escalas.filter(e => e.tipo === 'folga').length;
  const diasFeriado  = escalas.filter(e => e.tipo === 'feriado').length;
  const pct          = carga > 0 ? Math.min((totalHoras / carga) * 100, 100) : 0;

  return (
    <div className="cal-resumo">
      <div className="cal-resumo-bar">
        <div className="cal-resumo-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      <div className="cal-resumo-stats">
        <div className="cal-resumo-stat">
          <span className="cal-resumo-val">{formatHoras(totalHoras)}</span>
          <span className="cal-resumo-lbl">Trabalhadas</span>
        </div>
        <div className="cal-resumo-divider" />
        <div className="cal-resumo-stat">
          <span className="cal-resumo-val">{carga}h</span>
          <span className="cal-resumo-lbl">Carga mensal</span>
        </div>
        <div className="cal-resumo-divider" />
        <div className={`cal-resumo-stat${extras > 0 ? ' cal-resumo-stat--extra' : ''}`}>
          <span className="cal-resumo-val">{extras > 0 ? `+${formatHoras(extras)}` : '—'}</span>
          <span className="cal-resumo-lbl">Horas extras</span>
        </div>
        <div className="cal-resumo-divider" />
        <div className="cal-resumo-badges">
          <span className="cal-day-badge cal-day-badge--trabalho">{diasTrabalho} trabalho</span>
          <span className="cal-day-badge cal-day-badge--folga">{diasFolga} folga</span>
          <span className="cal-day-badge cal-day-badge--feriado">{diasFeriado} feriado</span>
        </div>
      </div>
    </div>
  );
}
