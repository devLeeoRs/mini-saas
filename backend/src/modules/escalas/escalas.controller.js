const service = require('./escalas.service');

async function get(req, res, next) {
  try {
    const { funcionarioId, mes } = req.query;
    if (!funcionarioId || !mes) return res.status(400).json({ error: 'funcionarioId e mes são obrigatórios.' });
    res.json(await service.getByMes(funcionarioId, mes));
  } catch (e) { next(e); }
}

async function upsert(req, res, next) {
  try { res.json(await service.upsert(req.body)); } catch (e) { next(e); }
}

async function remove(req, res, next) {
  try { await service.remove(req.params.id); res.json({ success: true }); } catch (e) { next(e); }
}

module.exports = { get, upsert, remove };
