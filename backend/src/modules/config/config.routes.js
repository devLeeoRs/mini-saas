const { Router } = require('express');
const controller  = require('./config.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth, requireRole('admin', 'gerente'));

router.get('/',  controller.getConfig);
router.put('/',  controller.updateConfig);

module.exports = router;
