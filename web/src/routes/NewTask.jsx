import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './NewTask.css'
import tarefaFetch from '../axios/config';
import { Link } from 'react-router-dom';



const NewTask = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [select, setSelect] = useState('');

  const hendleTitulo = (e) => {
    setTitulo(e.target.value);
  }

  const hendleDescricao = (e) => {
    setDescricao(e.target.value);
  }

  const hendleData = (e) => {
    debugger
    setData(e.target.value);
  }

  const hendleSelect = (e) => {
    debugger
    setSelect(e.target.value);
  }

  const salvaTarefa = async (e) => {

    const response = await tarefaFetch.post("/tarefa/api", {
      title: titulo,
      body: descricao,
      data_vigencia: data,
      tipo_tarefa: select,
    });
  }


  return (
    <div>
      <div className='new-task'>
        <form onSubmit={salvaTarefa}>
          <div className="mb-3">
            <label className="form-label">Título da Tarefa</label>
            <input type="text" className="form-control" value={titulo} onChange={hendleTitulo}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Descrição</label>
            <div className="form-text">A descrição da tarefa deve conter no maximo 100 caracteres!</div>
            <input type="text" className="form-control" value={descricao} onChange={hendleDescricao} />
          </div>
          <div className="mb-3">
            <div className="form-text">Prazo para entrega</div>
            <input type="date" className="form-control" value={data} onChange={hendleData} />
          </div>
          <div className="mb-3">
            <select  value={select} onChange={hendleSelect} className="form-select form-select-sm" aria-label=".form-select-sm example">
              <option  >Selecione o Tipo da tarefa</option>
              <option value={1}>Trabalho</option>
              <option value={2}>Casa</option>
              <option value={3}>Casual</option>
            </select>

          </div>
          <button type="submit" className="btn btn-primary" >Salvar</button>
        </form>
      </div>

    </div>
  )
}

export default NewTask