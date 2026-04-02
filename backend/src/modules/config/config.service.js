const appDb = require('../../config/appDatabase');

async function getConfig() {
  const { rows } = await appDb.query('SELECT dias_estoque FROM app_config WHERE id = 1');
  if (rows.length === 0) {
    await appDb.query('INSERT INTO app_config (id) VALUES (1) ON CONFLICT (id) DO NOTHING');
    return { dias_estoque: 30 };
  }
  return { dias_estoque: Number(rows[0].dias_estoque ?? 30) };
}

async function updateConfig(patch) {
  const dias = patch?.dias_estoque;

  const { rows } = await appDb.query(
    `UPDATE app_config
     SET dias_estoque = COALESCE($1::int, dias_estoque),
         updated_at = now()
     WHERE id = 1
     RETURNING dias_estoque`,
    [dias === undefined ? null : Number(dias)]
  );

  if (rows.length === 0) {
    // Should not happen, but keep it safe.
    await appDb.query('INSERT INTO app_config (id, dias_estoque) VALUES (1, $1) ON CONFLICT (id) DO UPDATE SET dias_estoque = EXCLUDED.dias_estoque, updated_at = now()', [Number(dias) || 30]);
    return { dias_estoque: Number(dias) || 30 };
  }

  return { dias_estoque: Number(rows[0].dias_estoque ?? 30) };
}

module.exports = { getConfig, updateConfig };
