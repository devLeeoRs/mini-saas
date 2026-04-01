import { useState, useEffect } from 'react';

const EMPTY = { nome: '', cargo: '', cargaHorariaMensal: 220 };

export default function ModalFuncionario({ funcionario, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    setForm(funcionario ? { ...funcionario } : EMPTY);
  }, [funcionario]);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome.trim()) return;
    onSave(form);
  };

  return (
    <div className="cal-overlay" onClick={onClose}>
      <div className="cal-modal cal-modal--sm" onClick={e => e.stopPropagation()}>
        <div className="cal-modal-header">
          <h3>{funcionario ? 'Editar Funcionário' : 'Novo Funcionário'}</h3>
          <button className="cal-modal-close" onClick={onClose}>✕</button>
        </div>

        <form className="cal-modal-body" onSubmit={handleSubmit}>
          <div className="cal-field">
            <label>Nome</label>
            <input
              autoFocus
              type="text"
              value={form.nome}
              onChange={e => set('nome', e.target.value)}
              placeholder="Nome completo"
              required
            />
          </div>

          <div className="cal-field">
            <label>Cargo</label>
            <input
              type="text"
              value={form.cargo}
              onChange={e => set('cargo', e.target.value)}
              placeholder="Ex: Atendente"
            />
          </div>

          <div className="cal-field">
            <label>Carga horária mensal (h)</label>
            <input
              type="number"
              min={1}
              max={400}
              value={form.cargaHorariaMensal}
              onChange={e => set('cargaHorariaMensal', e.target.value)}
            />
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
