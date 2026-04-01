const { Router } = require('express');
const controller  = require('./products.controller');

const router = Router();

router.get('/',    controller.getProducts);
router.delete('/', controller.deleteProducts);

module.exports = router;
