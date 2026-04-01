const service = require('./products.service');

function getProducts(req, res, next) {
  try {
    res.json(service.getAll());
  } catch (err) {
    next(err);
  }
}

function deleteProducts(req, res, next) {
  try {
    service.clearAll();
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducts, deleteProducts };
