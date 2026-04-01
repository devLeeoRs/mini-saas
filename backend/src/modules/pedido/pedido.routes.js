const { Router } = require('express');
const controller  = require('./pedido.controller');

const router = Router();

router.get('/',          controller.getPedido);
router.put('/:codigo',   controller.updatePedido);

module.exports = router;
