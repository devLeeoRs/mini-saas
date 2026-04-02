const { Router } = require('express');
const controller  = require('./contagem.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth, requireRole('admin', 'gerente'));

router.get('/',           controller.getContagem);
router.post('/:codigo',   controller.addContagem);
router.delete('/:codigo', controller.removeContagem);
router.delete('/',        controller.clearContagem);

module.exports = router;
