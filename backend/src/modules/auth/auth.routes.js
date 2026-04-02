const { Router } = require('express');
const c = require('./auth.controller');
const { requireAuth } = require('../../middlewares/auth');

const router = Router();

router.post('/login', c.login);
router.get('/me', requireAuth, c.me);

module.exports = router;
