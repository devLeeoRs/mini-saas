const service = require('./products.service');

async function getProducts(req, res, next) {
  try {
    res.json(await service.getAll());
  } catch (err) {
    next(err);
  }
}

async function deleteProducts(req, res, next) {
  try {
    await service.clearAll();
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducts, deleteProducts };
