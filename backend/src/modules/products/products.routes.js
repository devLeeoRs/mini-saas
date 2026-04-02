const { Router } = require('express');
const controller  = require('./products.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth, requireRole('admin', 'gerente'));

router.get('/',    controller.getProducts);
router.delete('/', controller.deleteProducts);

module.exports = router;
