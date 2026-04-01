const { Router } = require('express');
const multer      = require('multer');
const controller  = require('./upload.controller');

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), controller.uploadFile);

module.exports = router;
