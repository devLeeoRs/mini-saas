import { formatCurrency } from '../utils/calculations';

export default function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-label">Total produtos</span>
        <span className="stat-value green">{stats.total}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Precisam repor</span>
        <span className="stat-value orange">{stats.reposicao}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Selecionados</span>
        <span className="stat-value blue">{stats.selectedCount}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Valor selecionados</span>
        <span className="stat-value">{formatCurrency(stats.totalSelected)}</span>
      </div>
    </div>
  );
}
