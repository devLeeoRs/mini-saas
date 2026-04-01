const { Router } = require('express');
const controller  = require('./config.controller');

const router = Router();

router.get('/',  controller.getConfig);
router.put('/',  controller.updateConfig);

module.exports = router;
