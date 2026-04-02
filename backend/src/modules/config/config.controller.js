const service = require('./config.service');

async function getConfig(req, res, next) {
  try { res.json(await service.getConfig()); } catch (err) { next(err); }
}

async function updateConfig(req, res, next) {
  try { res.json(await service.updateConfig(req.body)); } catch (err) { next(err); }
}

module.exports = { getConfig, updateConfig };
