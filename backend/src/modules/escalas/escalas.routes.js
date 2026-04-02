const { Router } = require('express');
const c = require('./escalas.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();
router.use(requireAuth, requireRole('admin'));
router.get('/',      c.get);
router.post('/',     c.upsert);
router.delete('/:id',c.remove);
module.exports = router;
