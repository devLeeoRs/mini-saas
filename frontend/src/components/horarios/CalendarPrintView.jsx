import {
  buildCalendarWeeks, toISODate,
  calcularHorasDia, calcularHorasMes, calcularHorasExtras,
  formatHoras, mesLabel,
} from '../../utils/horarios';

const DOW = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const TIPO_STYLE = {
  trabalho: { bg: '#edfaf4', border: '#b3e8cc', labelColor: '#0a7d4e', label: 'Trabalho' },
  folga:    { bg: '#f2f3f5', border: '#d0d4de', labelColor: '#666',    label: 'Folga'    },
  feriado:  { bg: '#fff0f0', border: '#f5c0c0', labelColor: '#c0392b', label: 'Feriado'  },
};

export default function CalendarPrintView({ funcionario, escalas, date }) {
  const year   = date.getFullYear();
  const month  = date.getMonth();
  const weeks  = buildCalendarWeeks(year, month);
  const escMap = Object.fromEntries(escalas.map(e => [e.data, e]));
  const hoje   = toISODate(new Date());

  const totalHoras    = calcularHorasMes(escalas);
  const carga         = Number(funcionario.cargaHorariaMensal);
  const extras        = calcularHorasExtras(totalHoras, carga);
  const diasTrabalho  = escalas.filter(e => e.tipo === 'trabalho').length;
  const diasFolga     = escalas.filter(e => e.tipo === 'folga').length;
  const diasFeriado   = escalas.filter(e => e.tipo === 'feriado').length;

  const now = new Date();
  const dataGeracao = now.toLocaleDateString('pt-BR') + ' ' +
    now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="cpv">
      {/* Cabeçalho */}
      <div className="cpv-header">
        <div className="cpv-header-left">
          <div className="cpv-titulo">Escala de Horários</div>
          <div className="cpv-func">{funcionario.nome}</div>
          <div className="cpv-cargo">{funcionario.cargo} · {carga}h/mês</div>
        </div>
        <div className="cpv-header-right">
          <div className="cpv-mes-label">{mesLabel(date)}</div>
          <div className="cpv-gerado">Gerado em {dataGeracao}</div>
        </div>
      </div>

      {/* Resumo */}
      <div className="cpv-resumo">
        <div className="cpv-resumo-item">
          <span className="cpv-resumo-val">{formatHoras(totalHoras)}</span>
          <span className="cpv-resumo-lbl">Trabalhadas</span>
        </div>
        <div className="cpv-resumo-sep" />
        <div className="cpv-resumo-item">
          <span className="cpv-resumo-val">{carga}h</span>
          <span className="cpv-resumo-lbl">Carga mensal</span>
        </div>
        <div className="cpv-resumo-sep" />
        <div className="cpv-resumo-item">
          <span className="cpv-resumo-val" style={{ color: extras > 0 ? '#0a7d4e' : '#999' }}>
            {extras > 0 ? `+${formatHoras(extras)}` : '—'}
          </span>
          <span className="cpv-resumo-lbl">Horas extras</span>
        </div>
        <div className="cpv-resumo-sep" />
        <div className="cpv-resumo-item">
          <span className="cpv-resumo-val">{diasTrabalho}</span>
          <span className="cpv-resumo-lbl">Dias trabalho</span>
        </div>
        <div className="cpv-resumo-sep" />
        <div className="cpv-resumo-item">
          <span className="cpv-resumo-val">{diasFolga}</span>
          <span className="cpv-resumo-lbl">Folgas</span>
        </div>
        {diasFeriado > 0 && (
          <>
            <div className="cpv-resumo-sep" />
            <div className="cpv-resumo-item">
              <span className="cpv-resumo-val">{diasFeriado}</span>
              <span className="cpv-resumo-lbl">Feriados</span>
            </div>
          </>
        )}
      </div>

      {/* Grade do calendário */}
      <div className="cpv-grid">
        <div className="cpv-dow-row">
          {DOW.map(d => <div key={d} className="cpv-dow">{d}</div>)}
        </div>

        {weeks.map((week, wi) => (
          <div key={wi} className="cpv-week">
            {week.map(({ date: d, outOfMonth }) => {
              const iso    = toISODate(d);
              const escala = escMap[iso];
              const isHoje = iso === hoje;
              const st     = escala ? TIPO_STYLE[escala.tipo] : null;
              const horas  = escala?.tipo === 'trabalho' ? calcularHorasDia(escala.turnos) : 0;

              return (
                <div
                  key={iso}
                  className="cpv-cell"
                  style={{
                    opacity:    outOfMonth ? 0.25 : 1,
                    background: st?.bg || '#fff',
                    borderColor: isHoje ? '#222' : (st?.border || '#ddd'),
                    borderWidth: isHoje ? '2px' : '1px',
                  }}
                >
                  <span className="cpv-num" style={{ fontWeight: isHoje ? 700 : 500 }}>
                    {d.getDate()}
                  </span>

                  {escala && (
                    <div className="cpv-info">
                      {st && (
                        <span className="cpv-tipo" style={{ color: st.labelColor }}>{st.label}</span>
                      )}
                      {horas > 0 && <span className="cpv-horas">{formatHoras(horas)}</span>}
                      {escala?.turnos?.length > 0 && (
                        <div className="cpv-turnos">
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
    </div>
  );
}
