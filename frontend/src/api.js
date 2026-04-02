const BASE = '/api';

async function request(url, options = {}) {
  const res = await fetch(BASE + url, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Erro ${res.status}`);
  }
  return res.json();
}

export const uploadFile = (file) => {
  const fd = new FormData();
  fd.append('file', file);
  return request('/upload', { method: 'POST', body: fd });
};

export const getProducts = () => request('/products');
export const deleteProducts = () => request('/products', { method: 'DELETE' });

export const getConfig = () => request('/config');
export const updateConfig = (config) =>
  request('/config', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config),
  });

export const getPedido = () => request('/pedido');
export const updatePedidoQtd = (codigo, quantidade) =>
  request(`/pedido/${encodeURIComponent(codigo)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantidade }),
  });

export const getContagem = () => request('/contagem');
export const addContagem = (codigo) =>
  request(`/contagem/${encodeURIComponent(codigo)}`, { method: 'POST' });
export const removeContagem = (codigo) =>
  request(`/contagem/${encodeURIComponent(codigo)}`, { method: 'DELETE' });
export const clearContagem = () => request('/contagem', { method: 'DELETE' });

// ── Funcionários ─────────────────────────────────────────────────────────────
export const getFuncionarios     = () => request('/funcionarios');
export const createFuncionario   = (data) => request('/funcionarios', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateFuncionario   = (id, data) => request(`/funcionarios/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deleteFuncionario   = (id) => request(`/funcionarios/${id}`, { method: 'DELETE' });

// ── Escalas ───────────────────────────────────────────────────────────────────
export const getEscalas    = (funcionarioId, mes) => request(`/escalas?funcionarioId=${funcionarioId}&mes=${mes}`);
export const upsertEscala  = (data) => request('/escalas', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deleteEscala  = (id) => request(`/escalas/${id}`, { method: 'DELETE' });

// ── Turnos Padrão ─────────────────────────────────────────────────────────────
export const getTurnos     = () => request('/turnos');
export const createTurno   = (data) => request('/turnos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateTurno   = (id, data) => request(`/turnos/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deleteTurno   = (id) => request(`/turnos/${id}`, { method: 'DELETE' });

// ── Inventário ────────────────────────────────────────────────────────────────
export const getInventarios    = () => request('/inventarios');
export const criarInventario   = (nome) => request('/inventarios', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nome }) });
export const getInventario     = (id) => request(`/inventarios/${id}`);
export const atualizarInventario = (id, data) => request(`/inventarios/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const salvarProdutoInventario = (id, produto) => request(`/inventarios/${id}/produto`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(produto) });
export const excluirInventario       = (id) => request(`/inventarios/${id}`, { method: 'DELETE' });
export const buscarProdutoInventario = (q) => request(`/inventarios/buscar-produto?q=${encodeURIComponent(q)}`);

// ── PostgreSQL ────────────────────────────────────────────────────────────────
export const getPgFornecedores = () => request('/pg/fornecedores');
export const getPgDepartamentos = () => request('/pg/departamentos');
export const getPgCategorias = (grp_codigo) =>
  request(`/pg/categorias${grp_codigo ? `?grp_codigo=${grp_codigo}` : ''}`);
export const getPgMarcas = () => request('/pg/marcas');

export const importFromPg = (filtros) =>
  request('/pg/importar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filtros),
  });
