const { Router } = require('express');
const controller  = require('./pedido.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth, requireRole('admin', 'gerente'));

router.get('/',          controller.getPedido);
router.put('/:codigo',   controller.updatePedido);

module.exports = router;
