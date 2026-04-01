import { useState, useEffect } from 'react';
import { calcularHorasDia, formatHoras } from '../../utils/horarios';

const TIPOS = [
  { value: 'trabalho', label: 'Trabalho',  color: '#00e5a0' },
  { value: 'folga',    label: 'Folga',     color: '#8892a4' },
  { value: 'feriado',  label: 'Feriado',   color: '#ff4757' },
];

const TURNO_VAZIO = { inicio: '08:00', fim: '17:00' };

export default function ModalCadastroDia({ dateStr, escala, turnosTemplates = [], onSave, onDelete, onClose }) {
  const [tipo,   setTipo]   = useState('trabalho');
  const [turnos, setTurnos] = useState([{ ...TURNO_VAZIO }]);

  useEffect(() => {
    if (escala) {
      setTipo(escala.tipo);
      setTurnos(escala.turnos?.length > 0 ? escala.turnos.map(t => ({ ...t })) : [{ ...TURNO_VAZIO }]);
    } else {
      setTipo('trabalho');
      setTurnos([{ ...TURNO_VAZIO }]);
    }
  }, [escala, dateStr]);

  const addTurno  = () => setTurnos(prev => [...prev, { ...TURNO_VAZIO }]);
  const delTurno  = (i) => setTurnos(prev => prev.filter((_, idx) => idx !== i));
  const setTurno  = (i, k, v) => setTurnos(prev => prev.map((t, idx) => idx === i ? { ...t, [k]: v } : t));

  const totalHoras = tipo === 'trabalho' ? calcularHorasDia(turnos) : 0;

  const [d, m, y] = dateStr.split('-').reverse().map(Number);
  const labelData = `${String(d).padStart(2,'0')}/${String(m).padStart(2,'0')}/${y}`;

  const handleSave = () => {
    onSave({ tipo, turnos: tipo === 'trabalho' ? turnos : [] });
  };

  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal" onClick={e => e.stopPropagation()}>
        <div className="cal-modal-header">
          <h3>Cadastrar dia — <span className="cal-modal-date">{labelData}</span></h3>
          <button className="cal-modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="cal-modal-body">
          {/* Tipo */}
          <div className="cal-field">
            <label>Tipo do dia</label>
            <div className="cal-tipo-tabs">
              {TIPOS.map(t => (
                <button
                  key={t.value}
                  type="button"
                  className={`cal-tipo-tab${tipo === t.value ? ' cal-tipo-tab--active' : ''}`}
                  style={tipo === t.value ? { borderColor: t.color, color: t.color } : {}}
                  onClick={() => setTipo(t.value)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Templates rápidos */}
          {tipo === 'trabalho' && turnosTemplates.length > 0 && (
            <div className="cal-tpl-chips">
              <span className="cal-tpl-chips-label">Template:</span>
              {turnosTemplates.map(t => (
                <button
                  key={t.id}
                  type="button"
                  className="cal-tpl-chip"
                  onClick={() => setTurnos(t.turnos.map(tr => ({ ...tr })))}
                >
                  {t.nome}
                </button>
              ))}
            </div>
          )}

          {/* Turnos */}
          {tipo === 'trabalho' && (
            <div className="cal-turnos">
              <div className="cal-turnos-header">
                <label>Turnos</label>
                {totalHoras > 0 && (
                  <span className="cal-turno-total">{formatHoras(totalHoras)}</span>
                )}
              </div>

              {turnos.map((t, i) => (
                <div key={i} className="cal-turno-row">
                  <div className="cal-turno-index">{i + 1}</div>

                  <div className="cal-turno-times">
                    <div className="cal-field cal-field--inline">
                      <label>Início</label>
                      <input
                        type="time"
                        value={t.inicio}
                        onChange={e => setTurno(i, 'inicio', e.target.value)}
                      />
                    </div>
                    <span className="cal-turno-sep">→</span>
                    <div className="cal-field cal-field--inline">
                      <label>Fim</label>
                      <input
                        type="time"
                        value={t.fim}
                        onChange={e => setTurno(i, 'fim', e.target.value)}
                      />
                    </div>
                  </div>

                  {turnos.length > 1 && (
                    <button
                      type="button"
                      className="cal-turno-del"
                      onClick={() => delTurno(i)}
                      title="Remover turno"
                    >✕</button>
                  )}
                </div>
              ))}

              <button type="button" className="cal-add-turno" onClick={addTurno}>
                + Adicionar turno
              </button>
            </div>
          )}
        </div>

        <div className="cal-modal-footer">
          {escala && (
            <button type="button" className="cal-btn cal-btn--danger" onClick={onDelete}>
              Remover dia
            </button>
          )}
          <div style={{ flex: 1 }} />
          <button type="button" className="cal-btn cal-btn--ghost" onClick={onClose}>Cancelar</button>
          <button type="button" className="cal-btn cal-btn--primary" onClick={handleSave}>Salvar</button>
        </div>
      </div>
    </div>
  );
}
