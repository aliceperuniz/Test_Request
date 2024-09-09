### Blog API

Esse projeto é uma aplicação web construída com React JS. Este projeto oferece uma plataforma simples de um Mock de um blog. A aplicação utiliza a API pública JSONPlaceholder para simular interações com um backend.

---

## Tecnologias Utilizadas

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) Biblioteca para construção da interface do usuário.
- ![Axios](https://img.shields.io/badge/Axios-5A29E3?style=for-the-badge&logo=axios&logoColor=white) Biblioteca para realizar requisições HTTP.
- ![JSONPlaceholder](https://img.shields.io/badge/JSONPlaceholder-8B9D4F?style=for-the-badge&logo=json&logoColor=white) API pública para simulação de backend.

---

## Funcionalidades

- **Página Inicial:** Exibe uma lista de posts. Se não houver posts disponíveis, a mensagem "Carregando..." será exibida.
- **Criar Novo Post:** Permite ao usuário criar um novo post e adicioná-lo à lista de posts. Após a criação, o usuário é redirecionado para a página inicial.
- **Visualizar e Gerenciar Posts:** Exibe todos os posts do usuário com a opção de editar ou excluir cada post.

---

## Instalação e Execução

Para rodar o projeto em sua máquina local, siga os seguintes passos:

1. **Clone o Repositório**  
   ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
2. **Navegue até o Diretório do Projeto**  
   - `cd <NOME-DO-DIRETÓRIO>`
3. **Instale as Dependências**  
   ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
   - `npm install`
4. **Inicie a Aplicação**  
   ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
   - `npm start`

---

## Estrutura do Projeto

A aplicação é dividida em várias partes principais:

-> **Pasta Routes:**
   - **Home:** A página exibe a lista de posts obtidos de uma API.
     - Uso do Estado: `posts` armazena a lista de posts.
     - Efeito Colateral: O `useEffect` chama `getPosts` quando o componente é montado para buscar os dados da API.
     - Exibição Condicional: Se não houver posts, exibe "Carregando...". Caso contrário, renderiza uma lista de posts com título, corpo e um link para ver mais detalhes.
   - **NewPost:** Permite ao usuário criar um novo post e enviar os dados para a API.
     - Uso do Estado: `title` e `body` armazenam os valores do novo post, e `posts` armazena os posts existentes.
     - Manipulação de Formulário: `createPost` é chamado ao enviar o formulário, criando um novo post e atualizando a lista de posts.
     - Navegação: Após criar um post, a aplicação navega de volta para a página inicial.

-> **Pasta components:**
   - **Posts:** Exibe, edita e exclui posts.
     - Uso do Estado: `posts` armazena a lista de posts, e `editingPostId`, `newTitle`, e `newBody` são usados para gerenciar a edição de posts.
     - Métodos: `buscarPost` busca posts do usuário específico, `deletarPost` exclui um post, `editarPost` e `atualizarPost` permitem editar e atualizar um post.
     - Renderização Condicional: Se o post estiver em modo de edição, exibe campos de edição; caso contrário, exibe o post com opções de edição e exclusão.
   - **Navbar:** Fornece a barra de navegação da aplicação.
     - Contém links para as páginas principais: Home, My Posts e New Post.
     - O `Link` do `react-router-dom` é usado para a navegação dentro da aplicação sem recarregar a página.

-> **Arquivo `main.jsx`:**
   - Configura a aplicação React, define as rotas usando `react-router-dom`, e renderiza a aplicação no DOM. As rotas são definidas de forma que a aplicação renderiza o componente `App` no caminho raiz (/), e dentro de `App`, Home e NewPost são renderizados em seus respectivos caminhos. Isso permite que a navegação entre diferentes páginas da aplicação seja feita sem recarregar a página inteira.

-> **Arquivo `App.jsx`:**
   - Estrutura principal da aplicação React
   - Uso do `Outlet`: O `Outlet` é um componente especial do `react-router-dom` que renderiza o conteúdo da rota filha correspondente. Ele é usado para inserir o componente da página de acordo com a rota atual.

---

## API Utilizada

A aplicação se conecta à JSONPlaceholder, que fornece uma API para testes e protótipos. Os principais endpoints utilizados são:

- **Listar Todos os Posts:** `GET /posts`  
  ![GET](https://img.shields.io/badge/GET-007ACC?style=for-the-badge&logo=http&logoColor=white)
- **Buscar um Post Específico:** `GET /posts/{id}`  
  ![GET](https://img.shields.io/badge/GET-007ACC?style=for-the-badge&logo=http&logoColor=white)
- **Criar um Novo Post:** `POST /posts`  
  ![POST](https://img.shields.io/badge/POST-28A745?style=for-the-badge&logo=http&logoColor=white)
- **Atualizar um Post:** `PUT /posts/{id}`  
  ![PUT](https://img.shields.io/badge/PUT-FFC107?style=for-the-badge&logo=http&logoColor=white)
- **Excluir um Post:** `DELETE /posts/{id}`  
  ![DELETE](https://img.shields.io/badge/DELETE-D9534F?style=for-the-badge&logo=http&logoColor=white)
