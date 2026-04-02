const appDb = require('../../config/appDatabase');

async function getAll() {
  const { rows } = await appDb.query(
    `SELECT id, nome, turnos
     FROM app_turnos
     ORDER BY nome`
  );

  return rows.map(r => ({
    id: Number(r.id),
    nome: r.nome,
    turnos: r.turnos || [],
  }));
}

async function create(data) {
  const nome = String(data?.nome ?? '').trim();
  const turnos = Array.isArray(data?.turnos) ? data.turnos : [];

  const { rows } = await appDb.query(
    `INSERT INTO app_turnos (nome, turnos, created_at, updated_at)
     VALUES ($1, $2::jsonb, now(), now())
     RETURNING id, nome, turnos`,
    [nome, JSON.stringify(turnos)]
  );

  const r = rows[0];
  return { id: Number(r.id), nome: r.nome, turnos: r.turnos || [] };
}

async function update(id, data) {
  const nome = data?.nome !== undefined ? String(data.nome).trim() : null;
  const hasTurnos = Object.prototype.hasOwnProperty.call(data || {}, 'turnos');
  const turnos = hasTurnos ? (Array.isArray(data.turnos) ? data.turnos : []) : null;

  const { rows } = await appDb.query(
    `UPDATE app_turnos
     SET nome = COALESCE($2, nome),
         turnos = COALESCE($3::jsonb, turnos),
         updated_at = now()
     WHERE id = $1
     RETURNING id, nome, turnos`,
    [Number(id), nome, turnos === null ? null : JSON.stringify(turnos)]
  );

  if (rows.length === 0) throw Object.assign(new Error('Turno não encontrado.'), { status: 404 });
  const r = rows[0];
  return { id: Number(r.id), nome: r.nome, turnos: r.turnos || [] };
}

async function remove(id) {
  const result = await appDb.query('DELETE FROM app_turnos WHERE id = $1', [Number(id)]);
  if (result.rowCount === 0) throw Object.assign(new Error('Turno não encontrado.'), { status: 404 });
}

module.exports = { getAll, create, update, remove };
