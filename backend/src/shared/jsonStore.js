const fs   = require('fs');
const path = require('path');

/**
 * Cria um store baseado em arquivo JSON.
 * @param {string} filename   - nome do arquivo em /data
 * @param {*}      defaultData - valor inicial se o arquivo não existir
 */
function createStore(filename, defaultData = []) {
  const filePath = path.join(__dirname, '../../data', filename);

  return {
    read() {
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
        return Array.isArray(defaultData) ? [...defaultData] : { ...defaultData };
      }
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    },
    write(data) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    },
  };
}

module.exports = createStore;
