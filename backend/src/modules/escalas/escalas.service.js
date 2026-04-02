const appDb = require('../../config/appDatabase');

function monthRange(mes) {
  const [y, m] = String(mes).split('-').map(Number);
  if (!y || !m || m < 1 || m > 12) throw Object.assign(new Error('Parâmetro mes inválido. Use YYYY-MM.'), { status: 400 });
  const start = new Date(Date.UTC(y, m - 1, 1));
  const end = new Date(Date.UTC(y, m, 1));
  return {
    start: start.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
  };
}

async function getByMes(funcionarioId, mes) {
  const { start, end } = monthRange(mes);
  const { rows } = await appDb.query(
    `SELECT id, funcionario_id, data, tipo, turnos
     FROM app_escalas
     WHERE funcionario_id = $1
       AND data >= $2::date
       AND data <  $3::date
     ORDER BY data`,
    [Number(funcionarioId), start, end]
  );

  return rows.map(r => ({
    id: Number(r.id),
    funcionarioId: Number(r.funcionario_id),
    data: String(r.data).slice(0, 10),
    tipo: r.tipo,
    turnos: r.turnos || [],
  }));
}

/** Upsert: atualiza se já existe registro para funcionario+data, senão cria. */
async function upsert(data) {
  const funcionarioId = Number(data?.funcionarioId);
  const dia = String(data?.data ?? '').slice(0, 10);
  const tipo = String(data?.tipo ?? '');
  const turnos = Array.isArray(data?.turnos) ? data.turnos : [];

  const { rows } = await appDb.query(
    `INSERT INTO app_escalas (funcionario_id, data, tipo, turnos, created_at, updated_at)
     VALUES ($1, $2::date, $3, $4::jsonb, now(), now())
     ON CONFLICT (funcionario_id, data)
     DO UPDATE SET tipo = EXCLUDED.tipo,
                   turnos = EXCLUDED.turnos,
                   updated_at = now()
     RETURNING id, funcionario_id, data, tipo, turnos`,
    [funcionarioId, dia, tipo, JSON.stringify(turnos)]
  );

  const r = rows[0];
  return {
    id: Number(r.id),
    funcionarioId: Number(r.funcionario_id),
    data: String(r.data).slice(0, 10),
    tipo: r.tipo,
    turnos: r.turnos || [],
  };
}

async function remove(id) {
  const result = await appDb.query('DELETE FROM app_escalas WHERE id = $1', [Number(id)]);
  if (result.rowCount === 0) throw Object.assign(new Error('Escala não encontrada.'), { status: 404 });
}

module.exports = { getByMes, upsert, remove };
