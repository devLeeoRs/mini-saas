import { useState } from 'react';
import * as api from '../api';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await api.login(username, password);
      onLogin({ token, user });
    } catch (err) {
      setError(err.message || 'Falha no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          Pedido <span>/ Ferragem</span>
        </div>

        <h1 className="login-title">Entrar</h1>
        <p className="login-sub">Use seu usuário e senha.</p>

        <form onSubmit={submit} className="login-form">
          <label className="login-label">Usuário</label>
          <input
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            disabled={loading}
          />

          <label className="login-label">Senha</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            disabled={loading}
          />

          {error && <div className="login-error">{error}</div>}

          <button className="btn login-btn" type="submit" disabled={loading || !username.trim() || !password}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
