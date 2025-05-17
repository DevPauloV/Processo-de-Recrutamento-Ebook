
import { useState, useEffect } from 'react';
import './Topbooks.css';

export default function TopBooks() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro na requisição: ' + res.status);
        }
        return res.json();
      })
      .then((dados) => {
        setLivros(dados.data); 
        setCarregando(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar dados:', err);
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

   if (carregando) {
    return <p className="message">⏳ Carregando os livros mais acessados...</p>;
  }

  if (erro) {
    return <p className="message">❌ Ocorreu um erro: {erro}</p>;
  }

   return (
    <div className="container">
      <h1>📚 Top 10 Livros Mais Acessados do Bookplay</h1>
      <ul className="book-list">
        {livros.map((livro, index) => (
          <li key={livro.CodLivro} className="book-item">
            <span className="rank">{index + 1}º</span>
            <span className="title">{livro.Nome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}