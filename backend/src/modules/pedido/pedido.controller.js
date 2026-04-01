const service = require('./pedido.service');

function getPedido(req, res, next) {
  try {
    res.json(service.getAll());
  } catch (err) {
    next(err);
  }
}

function updatePedido(req, res, next) {
  try {
    const codigo    = decodeURIComponent(req.params.codigo);
    const { quantidade } = req.body;
    service.updateItem(codigo, quantidade);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { getPedido, updatePedido };
