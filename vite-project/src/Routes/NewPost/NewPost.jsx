import blogFetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './NewPost.css'
import Posts from '../../components/Posts/Posts'

const NewPost = () => {
  const navigate = useNavigate()

  // Estados para armazenar o título e o conteúdo do novo post e uma lista de posts
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [posts, setPosts] = useState([])


  // Função assíncrona que é chamada ao enviar o formulário para criar um novo post
  const createPost = async (e) => {
    e.preventDefault();

    // Cria um novo objeto post com um userId fixo, o título e o corpo do post
    const post = { userId: 1, title, body };

    // Envia o novo post para o "backend" usando o axios
    await blogFetch.post("/posts", {
      body: post
    });
    console.log(title, body)
    
    // Atualiza o estado dos posts
    setPosts(prevPosts => [
      ...prevPosts,
      { id: prevPosts.length + 1, title, body }
    ]);

    navigate('/')
  };

  return (
    <div className='Box'>
      <div className="new-post">
        <h2>Inserir novo Post:</h2>
        <form onSubmit={(e) => createPost(e)}>
          <div className="form-control">
            <label htmlFor="title">Título:</label>
            <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Conteúdo:</label>
            <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" value="Criar Post" className="botao"/>
        </form>
      </div>
      <Posts posts={[posts]}/>
    </div>
  )
}

export default NewPost