const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('../../config/env');
const appDb = require('../../config/appDatabase');

async function login(req, res, next) {
  const username = String(req.body?.username || '').trim();
  const password = String(req.body?.password || '');

  if (!username || !password) return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });

  try {
    const { rows } = await appDb.query(
      `SELECT id, username, password_hash, role, active
       FROM app_users
       WHERE username = $1
       LIMIT 1`,
      [username]
    );

    if (rows.length === 0) return res.status(401).json({ error: 'Credenciais inválidas' });
    const u = rows[0];
    if (!u.active) return res.status(403).json({ error: 'Usuário desativado' });

    const ok = await bcrypt.compare(password, u.password_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });

    await appDb.query('UPDATE app_users SET last_login_at = now() WHERE id = $1', [u.id]);
    await appDb.query(
      'INSERT INTO app_audit_log (user_id, action, payload) VALUES ($1, $2, $3)',
      [u.id, 'login', { ip: req.ip, ua: req.headers['user-agent'] || '' }]
    );

    const token = jwt.sign(
      { username: u.username, role: u.role },
      env.AUTH_JWT_SECRET,
      { subject: String(u.id), expiresIn: env.AUTH_JWT_EXPIRES }
    );

    res.json({
      token,
      user: { id: u.id, username: u.username, role: u.role },
    });
  } catch (err) {
    next(err);
  }
}

function me(req, res) {
  res.json({ user: req.user });
}

module.exports = { login, me };
