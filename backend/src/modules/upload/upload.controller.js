const service = require('./upload.service');

function uploadFile(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
    }
    const count = service.parseXlsx(req.file.buffer);
    res.json({ success: true, count });
  } catch (err) {
    err.status = 400;
    next(err);
  }
}

module.exports = { uploadFile };
