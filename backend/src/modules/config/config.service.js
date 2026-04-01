const db = require('../../shared/jsonDb');

function getConfig() {
  return db.read().config;
}

function updateConfig(patch) {
  const data = db.read();
  data.config = { ...data.config, ...patch };
  db.write(data);
  return data.config;
}

module.exports = { getConfig, updateConfig };
