const service = require('./funcionarios.service');

const get    = (req, res, next) => { try { res.json(service.getAll()); }             catch (e) { next(e); } };
const create = (req, res, next) => { try { res.status(201).json(service.create(req.body)); } catch (e) { next(e); } };
const update = (req, res, next) => { try { res.json(service.update(req.params.id, req.body)); } catch (e) { next(e); } };
const remove = (req, res, next) => { try { service.remove(req.params.id); res.json({ success: true }); } catch (e) { next(e); } };

module.exports = { get, create, update, remove };
