export function calcularHorasDia(turnos) {
  return turnos.reduce((total, t) => {
    const [h1, m1] = t.inicio.split(':').map(Number);
    const [h2, m2] = t.fim.split(':').map(Number);
    return total + ((h2 * 60 + m2) - (h1 * 60 + m1));
  }, 0) / 60;
}

export function calcularHorasMes(escalas) {
  return escalas
    .filter(e => e.tipo === 'trabalho')
    .reduce((total, e) => total + calcularHorasDia(e.turnos), 0);
}

export function calcularHorasExtras(totalHoras, cargaMensal) {
  return totalHoras > cargaMensal ? totalHoras - cargaMensal : 0;
}

export function dataPassada(dataStr) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return new Date(dataStr + 'T00:00:00') < hoje;
}

export function formatHoras(horas) {
  const h = Math.floor(horas);
  const m = Math.round((horas - h) * 60);
  return `${h}h${m > 0 ? ` ${m}min` : ''}`;
}

export function mesLabel(date) {
  return date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
}

export function isoMes(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

/** Retorna array de semanas, cada semana com 7 células { date, outOfMonth } */
export function buildCalendarWeeks(year, month) {
  const firstDay  = new Date(year, month, 1);
  const lastDay   = new Date(year, month + 1, 0);
  const startDow  = firstDay.getDay(); // 0 = dom

  const cells = [];

  // Dias do mês anterior para preencher
  for (let i = 0; i < startDow; i++) {
    const d = new Date(year, month, 1 - (startDow - i));
    cells.push({ date: d, outOfMonth: true });
  }

  // Dias do mês
  for (let d = 1; d <= lastDay.getDate(); d++) {
    cells.push({ date: new Date(year, month, d), outOfMonth: false });
  }

  // Completar última semana
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const next = new Date(last);
    next.setDate(next.getDate() + 1);
    cells.push({ date: next, outOfMonth: true });
  }

  // Agrupa em semanas
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export function toISODate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
