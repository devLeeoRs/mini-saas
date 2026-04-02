const appDb = require('../../config/appDatabase');

async function getAll() {
  const { rows } = await appDb.query(
    `SELECT id, nome, cargo, carga_horaria_mensal
     FROM app_funcionarios
     ORDER BY nome`
  );

  return rows.map(r => ({
    id: Number(r.id),
    nome: r.nome,
    cargo: r.cargo,
    cargaHorariaMensal: Number(r.carga_horaria_mensal ?? 0),
  }));
}

async function create(data) {
  const nome = String(data?.nome ?? '').trim();
  const cargo = String(data?.cargo ?? '').trim();
  const carga = Number(data?.cargaHorariaMensal ?? 0);

  const { rows } = await appDb.query(
    `INSERT INTO app_funcionarios (nome, cargo, carga_horaria_mensal, created_at, updated_at)
     VALUES ($1, $2, $3, now(), now())
     RETURNING id, nome, cargo, carga_horaria_mensal`,
    [nome, cargo, carga]
  );

  const r = rows[0];
  return {
    id: Number(r.id),
    nome: r.nome,
    cargo: r.cargo,
    cargaHorariaMensal: Number(r.carga_horaria_mensal ?? 0),
  };
}

async function update(id, data) {
  const nome = data?.nome !== undefined ? String(data.nome).trim() : null;
  const cargo = data?.cargo !== undefined ? String(data.cargo).trim() : null;
  const carga = data?.cargaHorariaMensal !== undefined ? Number(data.cargaHorariaMensal) : null;

  const { rows } = await appDb.query(
    `UPDATE app_funcionarios
     SET nome = COALESCE($2, nome),
         cargo = COALESCE($3, cargo),
         carga_horaria_mensal = COALESCE($4::int, carga_horaria_mensal),
         updated_at = now()
     WHERE id = $1
     RETURNING id, nome, cargo, carga_horaria_mensal`,
    [Number(id), nome, cargo, carga]
  );

  if (rows.length === 0) throw Object.assign(new Error('Funcionário não encontrado.'), { status: 404 });

  const r = rows[0];
  return {
    id: Number(r.id),
    nome: r.nome,
    cargo: r.cargo,
    cargaHorariaMensal: Number(r.carga_horaria_mensal ?? 0),
  };
}

async function remove(id) {
  const result = await appDb.query('DELETE FROM app_funcionarios WHERE id = $1', [Number(id)]);
  if (result.rowCount === 0) throw Object.assign(new Error('Funcionário não encontrado.'), { status: 404 });
}

module.exports = { getAll, create, update, remove };
