import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/register', { name, email, password });
      alert('Cadastrado com sucesso!');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Erro no cadastro');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;
