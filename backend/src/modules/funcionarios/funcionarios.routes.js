const { Router } = require('express');
const c = require('./funcionarios.controller');

const router = Router();
router.get('/',      c.get);
router.post('/',     c.create);
router.put('/:id',   c.update);
router.delete('/:id',c.remove);
module.exports = router;
