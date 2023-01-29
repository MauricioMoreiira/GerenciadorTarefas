import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import tarefaFetch from '../axios/config';

const Home = () => {

  const [tarefa, setTarefa] = useState([]);
  // const [deleteRow, setdeleteRow] = useState([]);

  const getTarefas = async () => {
    try {
      const response = await tarefaFetch.get("/tarefa/api");
      const data = response.data;

      setTarefa(data);
    }
    catch (error) {
      console.log(error)
    }
  }


  const deleteTarefa = async (e) => {
    console.log("ativou", e)
    const response = await tarefaFetch.delete("/tarefa/api/" + e);
    getTarefas();
  }


  useEffect(() => {
    getTarefas();
  }, [])


  return (
    <div className="home">
      <div className='card-column row col-12'>
        {tarefa.map(e => (
          <div className="card " key={e.id} style={{ width: '18rem' }}>
            <div className="card-body" >
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.body}</p>
              <div className="footer">
                <button  className="card-link left btn btn-danger" onClick={() => deleteTarefa(e.id)}>DELETE</button>
                <a href="#" className="card-link right btn btn-warning">EDITAR</a>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Home