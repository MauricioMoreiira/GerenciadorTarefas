import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import tarefaFetch from '../axios/config';

const Home = () => {

  const [tarefa, setTarefa] = useState([

  ]);

  const getTarefas = async() => {
    try {
      const response = await tarefaFetch.get("/tarefa/api.com", function(req, res, next){
        res.json({msg: "te"})
      })
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTarefas();
  },[])

  return (
    <div className="home">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

export default Home