import React from "react";
import axios from "axios";
import './Posts.css';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            posts: [],
            editingPostId: null,
            newTitle: '',
            newBody: ''
        };
    }

    componentDidMount() {
        this.buscarPost();
    }

    // Buscando os posts do usuário específico (supondo que seja o usuário 3)
    buscarPost = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")
            .then((response) => {
                this.setState({ posts: response.data });
            })
            .catch((error) => {
                console.error("Erro ao buscar posts:", error);
            });
    }

    // Método DELETE
    deletarPost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    this.buscarPost();
                }
            })
            .catch((error) => {
                console.error("Erro ao deletar post:", error);
            });
    }

    // Método para iniciar a edição de um post
    editarPost = (post) => {
        this.setState({
            editingPostId: post.id,
            newTitle: post.title,
            newBody: post.body
        });
    }

    // Método para atualizar o post no servidor
    atualizarPost = () => {
        const { editingPostId, newTitle, newBody } = this.state;

        axios.put(`https://jsonplaceholder.typicode.com/posts/${editingPostId}`, {
            title: newTitle,
            body: newBody
        })
        .then((response) => {
            if (response.status === 200) {
                this.buscarPost(); // Recarregar os posts após a atualização
                this.setState({ editingPostId: null }); // Fechar o modo de edição
            }
        })
        .catch((error) => {
            console.error("Erro ao atualizar post:", error);
        });
    }

    render() {
        const { posts, editingPostId, newTitle, newBody } = this.state;

        return (
        <div>
            <div className="title-myposts">My Posts:</div>
            <div className="card">
                {
                    posts.map((post) =>
                        <div className="card-body" key={post.id}>
                            {editingPostId === post.id ? (
                                // Modo de edição
                                <div>
                                    <input
                                        type="text"
                                        value={newTitle}
                                        onChange={(e) => this.setState({ newTitle: e.target.value })}
                                    />
                                    <textarea
                                        value={newBody}
                                        onChange={(e) => this.setState({ newBody: e.target.value })}
                                    />
                                    <button onClick={this.atualizarPost}>Salvar</button>
                                    <button onClick={() => this.setState({ editingPostId: null })}>Cancelar</button>
                                </div>
                            ) : (
                                // Modo de visualização
                                <div>
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                    <div className="buttons">
                                        <button onClick={() => this.editarPost(post)}>Editar Post</button>
                                        <button onClick={() => this.deletarPost(post.id)}>Excluir</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
        );
    }
}

export default Posts;
