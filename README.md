🧾 README — Projeto Top 10 Livros Bookplay


------------------------------------------------------------------------------------------------------------------------------

**NIVEL 1**

📚 Descrição

Este projeto é uma página web desenvolvida com React + Vite que exibe os 10 livros mais acessados da plataforma Bookplay. Os dados são carregados de um arquivo JSON local (dados.json) e apresentados de forma visual, com responsividade e links para a plataforma.

<h3>🛠️ Estrutura do Projeto</h3>

<table>
  <tr><td><code>TopBooks.jsx</code></td><td>Componente principal da lista</td></tr>
  <tr><td><code>TopBooks.css</code></td><td>Estilos aplicados à lista</td></tr>
  <tr><td><code>App.jsx</code></td><td>Ponto de entrada da aplicação React</td></tr>
  <tr><td><code>dados.json</code></td><td>Arquivo com os dados dos livros (mock)</td></tr>
  <tr><td><code>index.css</code></td><td>Estilos globais</td></tr>
  <tr><td><code>main.jsx</code></td><td>Inicialização do React</td></tr>
</table>


📦 Dependências
```
npm create vite@latest projeto-nivel1 -- --template react

cd projeto-nivel1

npm install
```
💡 Funcionalidade

O componente TopBooks.jsx carrega os dados do JSON e os renderiza em uma lista ordenada com o nome e posição do livro. Aqui está o exemplo de como os livros são exibidos:

```
{livros.map((livro, index) => (
  <li key={livro.CodLivro} className="book-item">
    <span className="rank">{index + 1}º</span>
    <span className="title">{livro.Nome}</span>
  </li>
))}
```
🌐 Link para cada livro

Para que o título leve à página do livro no site Bookplay, você pode alterar o JSX adicionando um link:

```
<a
  href={`https://bookplay.com.br/conteudo/${livro.CodLivro}`}
  target="_blank"
  rel="noopener noreferrer"
  className="title"
>
  {livro.Nome}
</a>
```

🎨 Estilização (TopBooks.css)

O estilo visual foi criado com CSS puro para deixar o layout limpo e moderno. Os itens são apresentados em formato de cards coloridos, com destaque para a posição (rank). A classe .rank mostra a posição com uma bolinha branca e número azul.

Inclui também responsividade com media query para ajustar a visualização em dispositivos móveis:

```
@media (max-width: 600px) {
  .book-item {
    flex-direction: column;
    align-items: flex-start;
  }
}

```

------------------------------------------------------------------------------------------------------------------------------
**NIVEL 2**

------------------------------------------------------------------------------------------------------------------------------
**NIVEL 3**

------------------------------------------------------------------------------------------------------------------------------
**NIVEL 4**






































































































































































