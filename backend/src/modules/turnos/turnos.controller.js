const svc = require('./turnos.service');

exports.getAll = (req, res) => res.json(svc.getAll());

exports.create = (req, res) => {
  const item = svc.create(req.body);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const item = svc.update(req.params.id, req.body);
  res.json(item);
};

exports.remove = (req, res) => {
  svc.remove(req.params.id);
  res.status(204).end();
};
