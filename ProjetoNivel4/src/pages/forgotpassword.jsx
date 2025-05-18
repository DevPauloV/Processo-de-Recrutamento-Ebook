import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3001/reset-password', {
        email,
        newPassword,
      });
      setMessage(res.data.message || 'Senha alterada com sucesso.');
    } catch (err) {
      setMessage(err.response?.data?.error || 'Erro ao alterar a senha.');
    }
  };

  return (
    <div className="forgot-container">
      <form onSubmit={handleSubmit} className="forgot-form">
        <h2>Alterar Senha</h2>

        <input
          type="email"
          placeholder="Email cadastrado"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirmar nova senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Alterar senha</button>

        {message && <p className="message">{message}</p>}

        <p>
          <Link to="/" className="register-link">Voltar para o login</Link>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
