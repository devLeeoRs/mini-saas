const { Router } = require('express');
const c = require('./turnos.controller');

const router = Router();
router.get('/',       c.getAll);
router.post('/',      c.create);
router.put('/:id',    c.update);
router.delete('/:id', c.remove);
module.exports = router;
