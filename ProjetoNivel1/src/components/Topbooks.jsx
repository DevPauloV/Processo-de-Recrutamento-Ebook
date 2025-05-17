import dados from '../dados.json';
import './TopBooks.css';

export default function TopBooks() {
  const livros = dados.data;

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
