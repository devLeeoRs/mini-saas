const env = require('../../config/env');

function buildBaseUrl() {
  if (env.UAZAPI_BASE_URL) return String(env.UAZAPI_BASE_URL).replace(/\/+$/, '');
  if (!env.UAZAPI_SUBDOMAIN) return '';
  return `https://${String(env.UAZAPI_SUBDOMAIN).trim()}.uazapi.com`;
}

async function uazapiRequest(path, options = {}) {
  const baseUrl = buildBaseUrl();
  if (!baseUrl) {
    const err = new Error('Uazapi nao configurado (UAZAPI_BASE_URL/UAZAPI_SUBDOMAIN)');
    err.status = 500;
    throw err;
  }

  const token = String(env.UAZAPI_TOKEN || '').trim();
  if (!token) {
    const err = new Error('Uazapi nao configurado (UAZAPI_TOKEN)');
    err.status = 500;
    throw err;
  }

  const url = `${baseUrl}${String(path || '').startsWith('/') ? '' : '/'}${String(path || '')}`;
  const headers = new Headers(options.headers || {});
  headers.set('Accept', 'application/json');

  const headerName = String(env.UAZAPI_TOKEN_HEADER || 'Authorization');
  const prefix = String(env.UAZAPI_TOKEN_PREFIX || '');
  headers.set(headerName, `${prefix}${token}`);

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const text = await res.text();
  if (!res.ok) {
    const err = new Error(text || `Uazapi erro ${res.status}`);
    err.status = 502;
    throw err;
  }

  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

async function sendText({ to, text, options }) {
  const path = String(env.UAZAPI_SEND_TEXT_PATH || '').trim();
  if (!path) {
    const err = new Error('Uazapi nao configurado (UAZAPI_SEND_TEXT_PATH)');
    err.status = 500;
    throw err;
  }

  const toField = String(env.UAZAPI_TO_FIELD || 'number');
  const textField = String(env.UAZAPI_TEXT_FIELD || 'text');
  const numberFormat = String(env.UAZAPI_NUMBER_FORMAT || 'digits');

  const payload = {
    [toField]: numberFormat === 'e164' ? String(to || '') : String(to || '').replace(/^\+/, ''),
    [textField]: String(text || ''),
    ...(options && typeof options === 'object' ? options : {}),
  };

  return uazapiRequest(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

module.exports = {
  sendText,
};
