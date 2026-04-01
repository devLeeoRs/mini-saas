const { Router } = require('express');
const controller  = require('./contagem.controller');

const router = Router();

router.get('/',           controller.getContagem);
router.post('/:codigo',   controller.addContagem);
router.delete('/:codigo', controller.removeContagem);
router.delete('/',        controller.clearContagem);

module.exports = router;
