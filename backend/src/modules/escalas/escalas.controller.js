const service = require('./escalas.service');

function get(req, res, next) {
  try {
    const { funcionarioId, mes } = req.query;
    if (!funcionarioId || !mes) return res.status(400).json({ error: 'funcionarioId e mes são obrigatórios.' });
    res.json(service.getByMes(funcionarioId, mes));
  } catch (e) { next(e); }
}

function upsert(req, res, next) {
  try { res.json(service.upsert(req.body)); } catch (e) { next(e); }
}

function remove(req, res, next) {
  try { service.remove(req.params.id); res.json({ success: true }); } catch (e) { next(e); }
}

module.exports = { get, upsert, remove };
