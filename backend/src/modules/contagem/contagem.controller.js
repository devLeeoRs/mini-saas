const service = require('./contagem.service');

function getContagem(req, res, next) {
  try { res.json(service.getAll()); } catch (err) { next(err); }
}

function addContagem(req, res, next) {
  try {
    service.addItem(decodeURIComponent(req.params.codigo));
    res.json({ success: true });
  } catch (err) { next(err); }
}

function removeContagem(req, res, next) {
  try {
    service.removeItem(decodeURIComponent(req.params.codigo));
    res.json({ success: true });
  } catch (err) { next(err); }
}

function clearContagem(req, res, next) {
  try { service.clearAll(); res.json({ success: true }); } catch (err) { next(err); }
}

module.exports = { getContagem, addContagem, removeContagem, clearContagem };
