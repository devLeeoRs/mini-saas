const { Router } = require('express');
const controller  = require('./inventario.controller');

const router = Router();

router.get('/buscar-produto',  controller.buscarProduto);   // GET /inventarios/buscar-produto?q=...
router.get('/',                controller.listar);
router.post('/',               controller.criar);
router.get('/:id',             controller.obter);
router.put('/:id',             controller.atualizar);
router.delete('/:id',          controller.excluir);
router.post('/:id/produto',    controller.salvarProduto);

module.exports = router;
