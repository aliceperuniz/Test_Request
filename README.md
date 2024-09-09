<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentação da Aplicação de Blog</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        h1, h2 {
            color: #333;
        }
        ul {
            list-style-type: none;
        }
        li {
            margin: 5px 0;
        }
        code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 3px;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .section h2 {
            margin-top: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Documentação da Aplicação de Blog</h1>
    </header>
    <div class="container">
        <div class="section">
            <h2>Blog Application</h2>
            <p>
                Esse projeto é uma aplicação web construída com React JS. Este projeto oferece uma plataforma simples de um Mock de um blog. A aplicação utiliza a API pública JSONPlaceholder para simular interações com um backend.
            </p>
        </div>
        
        <div class="section">
            <h2>Tecnologias Utilizadas</h2>
            <ul>
                <li><strong>React:</strong> Biblioteca para construção da interface do usuário.</li>
                <li><strong>Axios:</strong> Biblioteca para realizar requisições HTTP.</li>
                <li><strong>JSONPlaceholder:</strong> API pública para simulação de backend.</li>
            </ul>
        </div>
        
        <div class="section">
            <h2>Funcionalidades</h2>
            <ul>
                <li><strong>Página Inicial:</strong> Exibe uma lista de posts. Se não houver posts disponíveis, a mensagem "Carregando..." será exibida.</li>
                <li><strong>Criar Novo Post:</strong> Permite ao usuário criar um novo post e adicioná-lo à lista de posts. Após a criação, o usuário é redirecionado para a página inicial.</li>
                <li><strong>Visualizar e Gerenciar Posts:</strong> Exibe todos os posts do usuário com a opção de editar ou excluir cada post.</li>
            </ul>
        </div>
        
        <div class="section">
            <h2>Instalação e Execução</h2>
            <p>Para rodar o projeto em sua máquina local, siga os seguintes passos:</p>
            <ol>
                <li>Clone o Repositório</li>
                <li>Navegue até o Diretório do Projeto
                    <code>cd &lt;NOME-DO-DIRETORIO&gt;</code>
                </li>
                <li>Instale as Dependências
                    <code>npm install</code>
                </li>
                <li>Inicie a Aplicação
                    <code>npm start</code>
                </li>
            </ol>
        </div>
        
        <div class="section">
            <h2>Estrutura do Projeto</h2>
            <ul>
                <li><strong>Pasta Routes:</strong>
                    <ul>
                        <li><strong>Home:</strong> A página exibe a lista de posts obtidos de uma API.
                            <ul>
                                <li><strong>Uso do Estado:</strong> <code>posts</code> armazena a lista de posts.</li>
                                <li><strong>Efeito Colateral:</strong> O <code>useEffect</code> chama <code>getPosts</code> quando o componente é montado para buscar os dados da API.</li>
                                <li><strong>Exibição Condicional:</strong> Se não houver posts, exibe "Carregando...". Caso contrário, renderiza uma lista de posts com título, corpo e um link para ver mais detalhes.</li>
                            </ul>
                        </li>
                        <li><strong>NewPost:</strong> Permite ao usuário criar um novo post e enviar os dados para a API.
                            <ul>
                                <li><strong>Uso do Estado:</strong> <code>title</code> e <code>body</code> armazenam os valores do novo post, e <code>posts</code> armazena os posts existentes.</li>
                                <li><strong>Manipulação de Formulário:</strong> <code>createPost</code> é chamado ao enviar o formulário, criando um novo post e atualizando a lista de posts.</li>
                                <li><strong>Navegação:</strong> Após criar um post, a aplicação navega de volta para a página inicial.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Pasta components:</strong>
                    <ul>
                        <li><strong>Posts:</strong> Exibe, edita e exclui posts.
                            <ul>
                                <li><strong>Uso do Estado:</strong> <code>posts</code> armazena a lista de posts, e <code>editingPostId</code>, <code>newTitle</code>, e <code>newBody</code> são usados para gerenciar a edição de posts.</li>
                                <li><strong>Métodos:</strong> <code>buscarPost</code> busca posts do usuário específico, <code>deletarPost</code> exclui um post, <code>editarPost</code> e <code>atualizarPost</code> permitem editar e atualizar um post.</li>
                                <li><strong>Renderização Condicional:</strong> Se o post estiver em modo de edição, exibe campos de edição; caso contrário, exibe o post com opções de edição e exclusão.</li>
                            </ul>
                        </li>
                        <li><strong>Navbar:</strong> Fornece a barra de navegação da aplicação.
                            <ul>
                                <li><strong>Conteúdo:</strong> Contém links para as páginas principais: Home, My Posts e New Post.</li>
                                <li><strong>Navegação:</strong> O <code>Link</code> do <code>react-router-dom</code> é usado para a navegação dentro da aplicação sem recarregar a página.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Arquivo main.jsx:</strong> Configura a aplicação React, define as rotas usando <code>react-router-dom</code>, e renderiza a aplicação no DOM. As rotas são definidas de forma que a aplicação renderiza o componente <code>App</code> no caminho raiz (<code>/</code>), e dentro de <code>App</code>, <code>Home</code> e <code>NewPost</code> são renderizados em seus respectivos caminhos. Isso permite que a navegação entre diferentes páginas da aplicação seja feita sem recarregar a página inteira.</li>
                <li><strong>Arquivo App.jsx:</strong> Estrutura principal da aplicação React.
                    <ul>
                        <li><strong>Uso do Outlet:</strong> O <code>Outlet</code> é um componente especial do <code>react-router-dom</code> que renderiza o conteúdo da rota filha correspondente. Ele é usado para inserir o componente da página de acordo com a rota atual.</li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <div class="section">
            <h2>API Utilizada:</h2>
            <p>A aplicação se conecta à JSONPlaceholder, que fornece uma API para testes e protótipos. Os principais endpoints utilizados são:</p>
            <ul>
                <li><strong>Listar Todos os Posts:</strong> <code>GET /posts</code></li>
                <li><strong>Buscar um Post Específico:</strong> <code>GET /posts/{id}</code></li>
                <li><strong>Criar um Novo Post:</strong> <code>POST /posts</code></li>
                <li><strong>Atualizar um Post:</strong> <code>PUT /posts/{id}</code></li>
                <li><strong>Excluir um Post:</strong> <code>DELETE /posts/{id}</code></li>
            </ul>
        </div>
    </div>
</body>
</html>
