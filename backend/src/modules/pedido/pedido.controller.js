const service = require('./pedido.service');

async function getPedido(req, res, next) {
  try {
    res.json(await service.getAll());
  } catch (err) {
    next(err);
  }
}

async function updatePedido(req, res, next) {
  try {
    const codigo    = decodeURIComponent(req.params.codigo);
    const { quantidade } = req.body;
    await service.updateItem(codigo, quantidade);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { getPedido, updatePedido };
