import { buildCalendarWeeks, toISODate, dataPassada, calcularHorasDia, formatHoras } from '../../utils/horarios';

const DOW = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const TIPO_META = {
  trabalho: { cls: 'cal-cell--trabalho', label: 'Trabalho' },
  folga:    { cls: 'cal-cell--folga',    label: 'Folga'    },
  feriado:  { cls: 'cal-cell--feriado',  label: 'Feriado'  },
};

export default function CalendarView({ year, month, escalas, onDayClick }) {
  const weeks    = buildCalendarWeeks(year, month);
  const escalaMap = Object.fromEntries(escalas.map(e => [e.data, e]));
  const hoje     = toISODate(new Date());

  return (
    <div className="cal-grid">
      {/* Cabeçalho dias da semana */}
      <div className="cal-dow-row">
        {DOW.map(d => <div key={d} className="cal-dow">{d}</div>)}
      </div>

      {/* Semanas */}
      {weeks.map((week, wi) => (
        <div key={wi} className="cal-week">
          {week.map(({ date, outOfMonth }) => {
            const iso     = toISODate(date);
            const escala  = escalaMap[iso];
            const passado = dataPassada(iso);
            const isHoje  = iso === hoje;
            const meta    = escala ? TIPO_META[escala.tipo] : null;
            const horas   = escala?.tipo === 'trabalho' ? calcularHorasDia(escala.turnos) : 0;

            const classes = [
              'cal-cell',
              outOfMonth  ? 'cal-cell--out'    : '',
              passado     ? 'cal-cell--past'   : '',
              isHoje      ? 'cal-cell--hoje'   : '',
              meta        ? meta.cls           : '',
              !passado && !outOfMonth ? 'cal-cell--clickable' : '',
            ].filter(Boolean).join(' ');

            return (
              <div
                key={iso}
                className={classes}
                onClick={() => !passado && !outOfMonth && onDayClick(iso)}
              >
                <span className="cal-cell-num">{date.getDate()}</span>

                {meta && (
                  <div className="cal-cell-info">
                    <span className="cal-cell-tipo">{meta.label}</span>
                    {horas > 0 && (
                      <span className="cal-cell-horas">{formatHoras(horas)}</span>
                    )}
                    {escala?.turnos?.length > 0 && (
                      <div className="cal-cell-turnos">
                        {escala.turnos.map((t, i) => (
                          <span key={i}>{t.inicio}–{t.fim}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
