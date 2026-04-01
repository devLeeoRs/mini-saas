const service = require('./config.service');

function getConfig(req, res, next) {
  try { res.json(service.getConfig()); } catch (err) { next(err); }
}

function updateConfig(req, res, next) {
  try { res.json(service.updateConfig(req.body)); } catch (err) { next(err); }
}

module.exports = { getConfig, updateConfig };
