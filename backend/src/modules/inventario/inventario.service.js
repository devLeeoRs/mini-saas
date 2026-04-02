const fs     = require('fs');
const path   = require('path');
const crypto = require('crypto');

const INVENTARIOS_DIR = path.join(__dirname, '../../../data/inventarios');

function ensureDir() {
  if (!fs.existsSync(INVENTARIOS_DIR)) {
    fs.mkdirSync(INVENTARIOS_DIR, { recursive: true });
  }
}

function filePath(id) {
  return path.join(INVENTARIOS_DIR, `inventario-${id}.json`);
}

function listar() {
  ensureDir();
  const files = fs.readdirSync(INVENTARIOS_DIR).filter(f => f.endsWith('.json'));
  return files
    .map(f => {
      const data = JSON.parse(fs.readFileSync(path.join(INVENTARIOS_DIR, f), 'utf8'));
      return {
        id: data.id,
        nome: data.nome,
        status: data.status,
        dataCriacao: data.dataCriacao,
        totalProdutos: data.produtos.length,
      };
    })
    .sort((a, b) => b.dataCriacao.localeCompare(a.dataCriacao));
}

function criar(nome) {
  ensureDir();
  const id = crypto.randomUUID();
  const inventario = {
    id,
    nome,
    status: 'aberto',
    dataCriacao: new Date().toISOString().split('T')[0],
    produtos: [],
  };
  fs.writeFileSync(filePath(id), JSON.stringify(inventario, null, 2));
  return inventario;
}

function obter(id) {
  ensureDir();
  const fp = filePath(id);
  if (!fs.existsSync(fp)) return null;
  return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

function atualizar(id, updates) {
  const inv = obter(id);
  if (!inv) return null;
  const permitidos = ['nome', 'status'];
  const updated = { ...inv };
  permitidos.forEach(k => { if (updates[k] !== undefined) updated[k] = updates[k]; });
  fs.writeFileSync(filePath(id), JSON.stringify(updated, null, 2));
  return updated;
}

function salvarProduto(id, produto) {
  const inv = obter(id);
  if (!inv) return null;

  const idx = inv.produtos.findIndex(p => p.codigo === produto.codigo);
  if (idx >= 0) {
    inv.produtos[idx] = produto;
  } else {
    inv.produtos.push(produto);
  }

  if (inv.status === 'aberto') inv.status = 'em_andamento';

  fs.writeFileSync(filePath(id), JSON.stringify(inv, null, 2));
  return inv;
}

function excluir(id) {
  const fp = filePath(id);
  if (!fs.existsSync(fp)) return false;
  fs.unlinkSync(fp);
  return true;
}

module.exports = { listar, criar, obter, atualizar, salvarProduto, excluir };
