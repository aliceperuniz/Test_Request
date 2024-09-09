import blogFetch from '../../axios/config'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    //Resgata os dados da API:
    const getPosts = async () => {

        try {
            const response = await blogFetch.get("/posts");

            console.log(response);
            const data = response.data; // Extrai os dados dos posts da resposta.

            console.log(data);
            setPosts(data); // Atualiza o estado dos posts com os dados recebidos
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

        getPosts();
    }, []);

  return (
    <div className="home">
        <h1>Últimos posts</h1>
        {posts.length === 0 ? <p>Carregando...</p> : (
            //  itera sobre a lista de posts, formando blocos de código para cada um
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="read-more">
                        Ler mais
                    </Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home