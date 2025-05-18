🧾 README — Projeto Top 10 Livros Bookplay

---------------------------------------------------------------------------------------------------------------
**NIVEL 1**

🔗 [Acesse o projeto online](https://nomedoseuprojeto.vercel.app)

📚 Descrição

Este projeto é uma página web desenvolvida com React + Vite que exibe os 10 livros mais acessados da plataforma Bookplay. Os dados são carregados de um arquivo JSON local (dados.json) e apresentados de forma visual, com responsividade e links para a plataforma.

<h4>🛠️ Estrutura do Projeto</h4>

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

---------------------------------------------------------------------------------------------------------------

**NIVEL 2**

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

📚 Descrição

Este projeto é uma aplicação web construída com React + Vite, que exibe os 10 conteúdos mais acessados da plataforma Bookplay, incluindo livros, cursos, videoaulas, audiobooks e banca. Os dados são carregados dinamicamente de uma API externa e armazenados no sessionStorage para otimizar requisições subsequentes.

A interface inclui uma barra de navegação interativa com menu suspenso, permitindo a seleção do tipo de conteúdo exibido.

<h4>🛠️ Estrutura do Projeto</h4>

<table>
  <tr><td><code>TopBooks.jsx</code></td><td>Componente principal que exibe os dados da API</td></tr>
  <tr><td><code>TopBooks.css</code></td><td>Estilos personalizados do componente</td></tr>
  <tr><td><code>App.jsx</code></td><td>Componente base que renderiza o TopBooks</td></tr>
  <tr><td><code>index.css</code></td><td>Estilos globais da aplicação</td></tr>
  <tr><td><code>main.jsx</code></td><td>Inicialização da aplicação React</td></tr>
</table>

📦 Dependências

```
npm create vite@latest ProjetoNivel3 -- --template react

cd ProjetoNivel3

npm install
```

💡 Funcionalidade

O componente `Topbooks.jsx` realiza uma chamada `fetch` com base no tipo de conteúdo selecionado pelo usuário (livros, cursos, etc). Ele trata os estados de carregamento, erro e implementa cache local com `sessionStorage` para evitar chamadas desnecessárias.

🧠 Estados controlados:

> tipo: controla o tipo de conteúdo selecionado

> carregando: indica se os dados estão sendo carregados

> erro: armazena mensagens de erro

> livros: armazena os dados da API

🔄 Exibição dinâmica

```
<ul className="topbooks-list">
  {livros.slice(0, 10).map((item, i) => (
    <li key={item.CodLivro ?? i} className="topbooks-list-item">
      <a
        href={`https://bookplay.com.br/conteudo/${item.CodLivro}`}
        target="_blank"
        rel="noopener noreferrer"
        className="topbooks-link"
      >
        {i + 1}. {item.Nome}
      </a>
    </li>
  ))}
</ul>
```

🌐 Navegação e Tipos

A barra de navegação permite ao usuário escolher o tipo de conteúdo a ser exibido:

```
<select
  className="topbooks-select"
  value={tipo}
  onChange={(e) => setTipo(Number(e.target.value))}
>
  <option value={1}>Livros</option>
  <option value={2}>Cursos</option>
  <option value={3}>Videoaulas</option>
  <option value={5}>Banca</option>
  <option value={6}>Audiobooks</option>
</select>
```
🎨 Estilização (Topbooks.css)

A interface é composta por um card centralizado, com barra superior colorida, seleção de tipo e lista de conteúdos estilizados com sombra, bordas suaves e responsividade.

✨ Destaques de estilo:

> Cores principais: #48a0dc (azul Bookplay) e white

> Sombreamento suave nos itens da lista

> Links estilizados e interativos

> Feedback visual para hover

📱 Responsivo

> Layout adaptado com flex-wrap

> Fonte adaptável para telas menores

> Alinhamento vertical para dispositivos móveis






---------------------------------------------------------------------------------------------------------------
**NIVEL 4**
