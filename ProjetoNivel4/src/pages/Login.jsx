
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/login', { email, password });

      sessionStorage.setItem('usuarioLogado', JSON.stringify(res.data.user));
      navigate('/topbooks');
    } catch (err) {
      setErrorMessage(err.response?.data?.error || 'Erro ao logar');
    }
  };

  return (

    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />


        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <p className="forgot-password-link-text">
          <Link to="/forgot-password" className="forgot-password-link">Esqueci minha senha</Link>
        </p>

        <button type="submit">Entrar</button>

        <p className="register-link-text">
          Não tem conta? <Link to="/register" className="register-link">Faça seu registro</Link>
        </p>
      </form>
    </div>

  );
}

export default Login;
