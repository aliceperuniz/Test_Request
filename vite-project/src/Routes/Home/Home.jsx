import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    //Resgata os dados da API:
    const getPosts = async () => {

        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );

            console.log(response);
            const data = response.data;

            console.log(data);
            setPosts(data);
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
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default Home