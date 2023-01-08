import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../axios/config';

function Home() {

    const [posts, setPosts] = useState([])

    const getPost = async () => {
        try {
            const response = await blogFetch.get("/posts");
            const data = response.data;

            setPosts(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <h1>Ultimos posts </h1>

            <div className='container-cards row justify-content-center'>
                {posts.length === 0 ? <p>Carregando</p> : (
                posts.map(posts => {
                    return (
                        
                        <div className="card " key={posts.id} style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{posts.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Id tarefa: {posts.id}</h6>
                                <span style={{ display: 'grid' }}>
                                 <p className="card-text teste">{posts.body}</p>
                                 <Link to={`/posts/${posts.id}`} className="btn-ler-mais">Ler Mais...</Link>
                                </span>

                                <div className='footer'>
                                    <div className='teste'>
                                        <a  href="#" className="card-link btn-excluir">Deletar</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })
            )}
            </div>

        </div>
    )
}

export default Home