const service = require('./pos.service');

async function getProductByCode(req, res, next) {
  try {
    const product = await service.getProductByCode(req.params.codigo);
    res.json(product);
  } catch (error) {
    next(error);
  }
}

async function searchProducts(req, res, next) {
  try {
    const products = await service.searchProducts(req.query.desc);
    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function findClientByCpf(req, res, next) {
  try {
    const client = await service.findClientByCpf(req.params.cpf);
    res.json(client);
  } catch (error) {
    next(error);
  }
}

async function createSale(req, res, next) {
  try {
    const sale = await service.createSale(req.body, req.user);
    res.status(201).json(sale);
  } catch (error) {
    next(error);
  }
}

async function sendSaleWhatsappReceipt(req, res, next) {
  try {
    const { phone } = req.body || {};
    if (!phone || !String(phone).trim()) {
      return res.status(400).json({ error: 'Telefone WhatsApp e obrigatorio' });
    }

    const result = await service.sendSaleWhatsappReceipt(req.params.id, phone);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findClientByCpf,
  getProductByCode,
  searchProducts,
  createSale,
  sendSaleWhatsappReceipt,
};
