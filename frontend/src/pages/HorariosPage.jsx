import { useState, useEffect, useCallback } from "react";
import * as api from "../api";
import {
  mesLabel,
  isoMes,
  calcularHorasDia,
  formatHoras,
} from "../utils/horarios";
import CalendarView from "../components/horarios/CalendarView";
import CalendarPrintView from "../components/horarios/CalendarPrintView";
import ModalCadastroDia from "../components/horarios/ModalCadastroDia";
import ModalFuncionario from "../components/horarios/ModalFuncionario";
import ModalTurno from "../components/horarios/ModalTurno";
import ResumoHoras from "../components/horarios/ResumoHoras";

export default function HorariosPage() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [escalas, setEscalas] = useState([]);
  const [turnosTemplates, setTurnosTemplates] = useState([]);
  const [selectedFuncId, setSelectedFuncId] = useState(null);
  const [currentDate, setCurrentDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  // Modais
  const [dayModal, setDayModal] = useState(null); // dateStr
  const [funcModal, setFuncModal] = useState(false); // false | true | funcionario obj
  const [turnoModal, setTurnoModal] = useState(false); // false | true | turno obj
  const [printJob, setPrintJob] = useState(null);
  const [toast, setToast] = useState(null);

  const mes = isoMes(currentDate);
  const selectedFunc =
    funcionarios.find((f) => f.id === selectedFuncId) || null;

  // ── Loaders ──────────────────────────────────────────────────────────────────
  const loadFuncionarios = useCallback(async () => {
    const data = await api.getFuncionarios();
    setFuncionarios(data);
    if (data.length > 0 && !selectedFuncId) setSelectedFuncId(data[0].id);
  }, [selectedFuncId]);

  const loadEscalas = useCallback(async () => {
    if (!selectedFuncId) return;
    const data = await api.getEscalas(selectedFuncId, mes);
    setEscalas(data);
  }, [selectedFuncId, mes]);

  const loadTurnos = useCallback(async () => {
    const data = await api.getTurnos();
    setTurnosTemplates(data);
  }, []);

  useEffect(() => {
    loadFuncionarios();
  }, []);
  useEffect(() => {
    loadEscalas();
  }, [selectedFuncId, mes]);
  useEffect(() => {
    loadTurnos();
  }, []);

  // ── Toast ─────────────────────────────────────────────────────────────────────
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  // ── Navegação de mês ──────────────────────────────────────────────────────────
  const prevMes = () =>
    setCurrentDate((d) => {
      const n = new Date(d);
      n.setMonth(n.getMonth() - 1);
      return n;
    });
  const nextMes = () =>
    setCurrentDate((d) => {
      const n = new Date(d);
      n.setMonth(n.getMonth() + 1);
      return n;
    });
  const irHoje = () => {
    const d = new Date();
    d.setDate(1);
    setCurrentDate(d);
  };

  // ── CRUD Funcionário ──────────────────────────────────────────────────────────
  const handleSaveFuncionario = async (form) => {
    try {
      if (form.id) {
        await api.updateFuncionario(form.id, form);
        showToast("Funcionário atualizado");
      } else {
        const novo = await api.createFuncionario(form);
        setSelectedFuncId(novo.id);
        showToast("Funcionário cadastrado");
      }
      await loadFuncionarios();
      setFuncModal(false);
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleDeleteFuncionario = async (id) => {
    if (!confirm("Remover funcionário?")) return;
    try {
      await api.deleteFuncionario(id);
      const prox = funcionarios.find((f) => f.id !== id);
      setSelectedFuncId(prox?.id || null);
      await loadFuncionarios();
      showToast("Funcionário removido");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  // ── CRUD Turno Padrão ─────────────────────────────────────────────────────────
  const handleSaveTurno = async (form) => {
    try {
      if (form.id) {
        await api.updateTurno(form.id, form);
        showToast("Turno atualizado");
      } else {
        await api.createTurno(form);
        showToast("Turno criado");
      }
      await loadTurnos();
      setTurnoModal(false);
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleDeleteTurno = async (id) => {
    if (!confirm("Remover turno padrão?")) return;
    try {
      await api.deleteTurno(id);
      await loadTurnos();
      showToast("Turno removido");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  // ── CRUD Escala ───────────────────────────────────────────────────────────────
  const handleSaveDay = async ({ tipo, turnos }) => {
    try {
      await api.upsertEscala({
        funcionarioId: selectedFuncId,
        data: dayModal,
        tipo,
        turnos,
      });
      await loadEscalas();
      setDayModal(null);
      showToast("Dia salvo");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  const handleDeleteDay = async () => {
    const esc = escalas.find((e) => e.data === dayModal);
    if (!esc) return;
    try {
      await api.deleteEscala(esc.id);
      await loadEscalas();
      setDayModal(null);
      showToast("Dia removido");
    } catch (e) {
      showToast(e.message, "error");
    }
  };

  // ── PDF ───────────────────────────────────────────────────────────────────────
  const handleExportPDF = () => {
    if (!selectedFunc) return;
    setPrintJob({ funcionario: selectedFunc, escalas, date: currentDate });

    // Força orientação landscape para o calendário
    const style = document.createElement("style");
    style.id = "__cal-print-landscape";
    style.textContent = "@page { size: A4 ; margin: 10mm 12mm; }";
    document.head.appendChild(style);

    setTimeout(() => {
      window.print();
      setPrintJob(null);
      document.getElementById("__cal-print-landscape")?.remove();
    }, 150);
  };

  const escalaDoDia = dayModal
    ? escalas.find((e) => e.data === dayModal)
    : null;

  return (
    <div className="cal-page">
      {/* ── Sidebar ────────────────────────────────────────────────────── */}
      <aside className="cal-sidebar">
        {/* Funcionários */}
        <div className="cal-sidebar-header">
          <span className="cal-sidebar-title">Funcionários</span>
          <button
            className="cal-btn cal-btn--primary cal-btn--sm"
            onClick={() => setFuncModal(true)}
          >
            + Novo
          </button>
        </div>

        {funcionarios.length === 0 ? (
          <p className="cal-sidebar-empty">Nenhum funcionário cadastrado.</p>
        ) : (
          <ul className="cal-func-list">
            {funcionarios.map((f) => (
              <li
                key={f.id}
                className={`cal-func-item${f.id === selectedFuncId ? " cal-func-item--active" : ""}`}
                onClick={() => setSelectedFuncId(f.id)}
              >
                <div className="cal-func-avatar">{f.nome[0].toUpperCase()}</div>
                <div className="cal-func-info">
                  <span className="cal-func-nome">{f.nome}</span>
                  <span className="cal-func-cargo">
                    {f.cargo} · {f.cargaHorariaMensal}h/mês
                  </span>
                </div>
                <div className="cal-func-actions">
                  <button
                    title="Editar"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFuncModal(f);
                    }}
                  >
                    ✎
                  </button>
                  <button
                    title="Remover"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFuncionario(f.id);
                    }}
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Turnos Padrão */}
        <div className="cal-sidebar-divider" />
        <div className="cal-sidebar-header">
          <span className="cal-sidebar-title">Turnos Padrão</span>
          <button
            className="cal-btn cal-btn--primary cal-btn--sm"
            onClick={() => setTurnoModal(true)}
          >
            + Novo
          </button>
        </div>

        {turnosTemplates.length === 0 ? (
          <p className="cal-sidebar-empty">Nenhum turno cadastrado.</p>
        ) : (
          <ul className="cal-tpl-list">
            {turnosTemplates.map((t) => (
              <li key={t.id} className="cal-tpl-item">
                <div className="cal-tpl-top">
                  <span className="cal-tpl-nome">{t.nome}</span>
                  <span className="cal-tpl-horas">
                    {formatHoras(calcularHorasDia(t.turnos))}
                  </span>
                  <div className="cal-func-actions">
                    <button title="Editar" onClick={() => setTurnoModal(t)}>
                      ✎
                    </button>
                    <button
                      title="Remover"
                      onClick={() => handleDeleteTurno(t.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="cal-tpl-times">
                  {t.turnos.map((tr, i) => (
                    <span key={i}>
                      {tr.inicio}–{tr.fim}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* ── Área principal ─────────────────────────────────────────────── */}
      <div className="cal-main">
        {/* Barra de navegação */}
        <div className="cal-nav">
          <div className="cal-nav-left">
            <button className="cal-nav-btn" onClick={prevMes}>
              ‹
            </button>
            <button className="cal-nav-btn" onClick={nextMes}>
              ›
            </button>
            <button className="cal-nav-btn cal-nav-btn--today" onClick={irHoje}>
              Hoje
            </button>
          </div>
          <h2 className="cal-nav-mes">{mesLabel(currentDate)}</h2>
          <div className="cal-nav-right">
            {selectedFunc && (
              <button
                className="cal-btn cal-btn--ghost cal-btn--sm"
                onClick={handleExportPDF}
              >
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                PDF
              </button>
            )}
          </div>
        </div>

        {/* Resumo de horas */}
        {selectedFunc && (
          <ResumoHoras escalas={escalas} funcionario={selectedFunc} />
        )}

        {/* Calendário */}
        {selectedFunc ? (
          <CalendarView
            year={currentDate.getFullYear()}
            month={currentDate.getMonth()}
            escalas={escalas}
            onDayClick={setDayModal}
          />
        ) : (
          <div className="cal-empty">
            <p>Selecione ou cadastre um funcionário para começar.</p>
          </div>
        )}
      </div>

      {/* ── Modais ─────────────────────────────────────────────────────── */}
      {dayModal && (
        <ModalCadastroDia
          dateStr={dayModal}
          escala={escalaDoDia}
          turnosTemplates={turnosTemplates}
          onSave={handleSaveDay}
          onDelete={handleDeleteDay}
          onClose={() => setDayModal(null)}
        />
      )}

      {funcModal !== false && (
        <ModalFuncionario
          funcionario={funcModal === true ? null : funcModal}
          onSave={handleSaveFuncionario}
          onClose={() => setFuncModal(false)}
        />
      )}

      {turnoModal !== false && (
        <ModalTurno
          turno={turnoModal === true ? null : turnoModal}
          onSave={handleSaveTurno}
          onClose={() => setTurnoModal(false)}
        />
      )}

      {/* ── Print view (invisível na tela, visível ao imprimir) ───────── */}
      {printJob && (
        <CalendarPrintView
          funcionario={printJob.funcionario}
          escalas={printJob.escalas}
          date={printJob.date}
        />
      )}

      {toast && <div className={`toast ${toast.type}`}>{toast.msg}</div>}
    </div>
  );
}
