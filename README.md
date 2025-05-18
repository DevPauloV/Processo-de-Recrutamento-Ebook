🧾 README — Projeto Top 10 Livros Bookplay


------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

**NIVEL 1**

📚 Descrição

Este projeto é uma página web desenvolvida com React + Vite que exibe os 10 livros mais acessados da plataforma Bookplay. Os dados são carregados de um arquivo JSON local (dados.json) e apresentados de forma visual, com responsividade e links para a plataforma.

<h3>🛠️ Estrutura do Projeto</h3>
<h4>🛠️ Estrutura do Projeto</h4>

<table>
  <tr><td><code>TopBooks.jsx</code></td><td>Componente principal da lista</td></tr>
@@ -72,13 +72,112 @@ Inclui também responsividade com media query para ajustar a visualização em d

```

------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
**NIVEL 2**

------------------------------------------------------------------------------------------------------------------------------
📚 Descrição

Este projeto é uma página web desenvolvida com React + Vite que exibe os 10 livros mais acessados da plataforma Bookplay, consumindo dados diretamente de uma API externa. A interface é responsiva e estilizada com CSS moderno, proporcionando uma experiência clara e amigável ao usuário.

<h4>🛠️ Estrutura do Projeto</h4>

<table>
  <tr><td><code>TopBooks.jsx</code></td><td>Componente principal que consome a API e exibe os livros</td></tr>
  <tr><td><code>TopBooks.css</code></td><td>Estilos aplicados à lista de livros</td></tr>
  <tr><td><code>App.jsx</code></td><td>Componente base que renderiza o TopBooks</td></tr>
  <tr><td><code>index.css</code></td><td>Estilos globais da aplicação</td></tr>
  <tr><td><code>main.jsx</code></td><td>Inicialização da aplicação React</td></tr>
</table>

📦 Dependências

```
npm create vite@latest projeto-nivel2 -- --template react

cd projeto-nivel2

npm install

```

💡 Funcionalidade

O componente TopBooks.jsx utiliza fetch para obter dados da API:
```
https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos
```

🔄 Renderização dos livros

```
{livros.map((livro, index) => (
  <li key={livro.CodLivro} className="book-item">
    <span className="rank">{index + 1}º</span>
    <span className="title">{livro.Nome}</span>
  </li>
))}
```

🌐 Link para cada livro

Para tornar o nome do livro clicável, levando ao site da Bookplay, basta alterar o JSX:
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

> O layout utiliza CSS puro com foco em visual moderno e responsivo:

> Cards coloridos com destaque visual

> Posição destacada com círculo branco e número azul

> Hover com leve aumento de escala

> Layout responsivo para telas pequenas

📱 Responsividade
```
@media (max-width: 600px) {
  .book-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .rank {
    margin-bottom: 0.5rem;
  }

  .title {
    font-size: 1rem;
  }

  h1 {
    font-size: 1.3rem;
    padding: 0 1rem;
    text-align: center;
  }

  .container {
    padding: 1rem;
  }
}
```

---------------------------------------------------------------------------------------------------------------
**NIVEL 3**

------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------------------------
**NIVEL 4**
