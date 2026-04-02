const service = require('./contagem.service');

async function getContagem(req, res, next) {
  try { res.json(await service.getAll()); } catch (err) { next(err); }
}

async function addContagem(req, res, next) {
  try {
    await service.addItem(decodeURIComponent(req.params.codigo));
    res.json({ success: true });
  } catch (err) { next(err); }
}

async function removeContagem(req, res, next) {
  try {
    await service.removeItem(decodeURIComponent(req.params.codigo));
    res.json({ success: true });
  } catch (err) { next(err); }
}

async function clearContagem(req, res, next) {
  try { await service.clearAll(); res.json({ success: true }); } catch (err) { next(err); }
}

module.exports = { getContagem, addContagem, removeContagem, clearContagem };
