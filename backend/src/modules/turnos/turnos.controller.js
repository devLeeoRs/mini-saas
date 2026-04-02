const svc = require('./turnos.service');

exports.getAll = async (req, res, next) => {
  try {
    res.json(await svc.getAll());
  } catch (e) {
    next(e);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await svc.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await svc.update(req.params.id, req.body);
    res.json(item);
  } catch (e) {
    next(e);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await svc.remove(req.params.id);
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
