import { useState, useEffect } from 'react';
import { calcularHorasDia, formatHoras } from '../../utils/horarios';

const TURNO_VAZIO = { inicio: '08:00', fim: '17:00' };

export default function ModalTurno({ turno, onSave, onClose }) {
  const [nome,   setNome]   = useState('');
  const [turnos, setTurnos] = useState([{ ...TURNO_VAZIO }]);

  useEffect(() => {
    if (turno) {
      setNome(turno.nome);
      setTurnos(turno.turnos?.length > 0 ? turno.turnos.map(t => ({ ...t })) : [{ ...TURNO_VAZIO }]);
    } else {
      setNome('');
      setTurnos([{ ...TURNO_VAZIO }]);
    }
  }, [turno]);

  const addTurno = () => setTurnos(prev => [...prev, { ...TURNO_VAZIO }]);
  const delTurno = (i) => setTurnos(prev => prev.filter((_, idx) => idx !== i));
  const setTime  = (i, k, v) => setTurnos(prev => prev.map((t, idx) => idx === i ? { ...t, [k]: v } : t));

  const totalHoras = calcularHorasDia(turnos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim() || turnos.length === 0) return;
    onSave({ ...(turno ? { id: turno.id } : {}), nome: nome.trim(), turnos });
  };

  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal cal-modal--sm" onClick={e => e.stopPropagation()}>
        <div className="cal-modal-header">
          <h3>{turno ? 'Editar Turno' : 'Novo Turno Padrão'}</h3>
          <button className="cal-modal-close" onClick={onClose}>✕</button>
        </div>

        <form className="cal-modal-body" onSubmit={handleSubmit}>
          <div className="cal-field">
            <label>Nome do turno</label>
            <input
              autoFocus
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Ex: Manhã, Tarde, Integral…"
              required
            />
          </div>

          <div className="cal-turnos">
            <div className="cal-turnos-header">
              <label>Horários</label>
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
                    <input type="time" value={t.inicio} onChange={e => setTime(i, 'inicio', e.target.value)} />
                  </div>
                  <span className="cal-turno-sep">→</span>
                  <div className="cal-field cal-field--inline">
                    <label>Fim</label>
                    <input type="time" value={t.fim} onChange={e => setTime(i, 'fim', e.target.value)} />
                  </div>
                </div>
                {turnos.length > 1 && (
                  <button type="button" className="cal-turno-del" onClick={() => delTurno(i)} title="Remover">✕</button>
                )}
              </div>
            ))}

            <button type="button" className="cal-add-turno" onClick={addTurno}>
              + Adicionar intervalo
            </button>
          </div>

          <div className="cal-modal-footer">
            <button type="button" className="cal-btn cal-btn--ghost" onClick={onClose}>Cancelar</button>
            <button type="submit" className="cal-btn cal-btn--primary">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
