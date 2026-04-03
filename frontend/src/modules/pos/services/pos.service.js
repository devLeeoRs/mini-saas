const BASE = '/api/pos';

function getToken() {
  try {
    return localStorage.getItem('auth_token') || '';
  } catch {
    return '';
  }
}

async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const token = getToken();

  if (token) headers.set('Authorization', `Bearer ${token}`);

  const res = await fetch(`${BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Erro ${res.status}`);
  }
  return res.json();
}

export function getProductByCode(code) {
  return request(`/produtos/codigo/${encodeURIComponent(code)}`);
}

export function searchProducts(description) {
  return request(`/produtos/search?desc=${encodeURIComponent(description || '')}`);
}

export function findClientByCpf(cpf) {
  return request(`/clientes/cpf/${encodeURIComponent(cpf || '')}`);
}

export function createSale(data) {
  return request('/vendas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
