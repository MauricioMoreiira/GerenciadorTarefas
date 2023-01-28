import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-color">
            <div className="container-fluid">
                <a className=" text-navbar navbar-titulo" href="#">Gerenciador de Tarefas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/`}> 
                                <div className="navbar-text text-navbar" aria-current="page" >Tarefas</div>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={`/new`}>
                                <div className="navbar-text text-navbar" href="#">Adiciona Tarefa</div>

                            </Link>
                        </li>
                    </ul>
                    <span className="navbar-text text-navbar" >
                        <a href="https://github.com/MauricioMoreiira">@MauricioMoreiira</a>
                    </span>
                </div>
            </div>
        </nav>

    )
}

export default Navbar