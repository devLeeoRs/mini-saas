const jwt = require('jsonwebtoken');
const env = require('../config/env');

function getBearerToken(req) {
  const h = req.headers.authorization || '';
  const m = /^Bearer\s+(.+)$/i.exec(h);
  return m ? m[1].trim() : '';
}

function requireAuth(req, res, next) {
  const token = getBearerToken(req);
  if (!token) return res.status(401).json({ error: 'Não autenticado' });

  try {
    const payload = jwt.verify(token, env.AUTH_JWT_SECRET);
    req.user = {
      id: payload.sub,
      username: payload.username,
      role: payload.role,
    };
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

function requireRole(...roles) {
  const allowed = new Set(roles);
  return function roleMiddleware(req, res, next) {
    if (!req.user) return res.status(401).json({ error: 'Não autenticado' });
    if (!allowed.has(req.user.role)) return res.status(403).json({ error: 'Sem permissão' });
    next();
  };
}

module.exports = { requireAuth, requireRole };
