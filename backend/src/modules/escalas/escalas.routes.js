const { Router } = require('express');
const c = require('./escalas.controller');

const router = Router();
router.get('/',      c.get);
router.post('/',     c.upsert);
router.delete('/:id',c.remove);
module.exports = router;
