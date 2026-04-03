const { Router } = require('express');
const controller = require('./pos.controller');
const { requireAuth } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth);

router.get('/produtos/codigo/:codigo', controller.getProductByCode);
router.get('/produtos/search', controller.searchProducts);
router.get('/clientes/cpf/:cpf', controller.findClientByCpf);
router.post('/vendas', controller.createSale);
router.post('/vendas/:id/whatsapp', controller.sendSaleWhatsappReceipt);

module.exports = router;
