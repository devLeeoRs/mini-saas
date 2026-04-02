const { Router } = require('express');
const c = require('./turnos.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();
router.use(requireAuth, requireRole('admin'));
router.get('/',       c.getAll);
router.post('/',      c.create);
router.put('/:id',    c.update);
router.delete('/:id', c.remove);
module.exports = router;
