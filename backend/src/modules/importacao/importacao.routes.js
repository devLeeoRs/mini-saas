const { Router } = require('express');
const controller  = require('./importacao.controller');
const { requireAuth, requireRole } = require('../../middlewares/auth');

const router = Router();

router.use(requireAuth, requireRole('admin', 'gerente'));

router.get('/fornecedores',  controller.getFornecedores);
router.get('/departamentos', controller.getDepartamentos);
router.get('/categorias',    controller.getCategorias);
router.get('/marcas',        controller.getMarcas);
router.post('/importar',     controller.importar);

module.exports = router;
