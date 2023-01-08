import React from 'react'
import { Link } from 'react-router-dom'
import NewTask from '../routes/NewTask'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg color-navbar">
                <div className="container-fluid">
                    {/* <a className="nav-link  text-navbar titulo-navbar" href="#">Gerenciador de Tarefas</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="nav-link  text-navbar" aria-current="page" href="#">
                                <Link to={`/`}>Home</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link text-navbar" href="#">
                                    <Link to={`/new`}>NewTask</Link>
                                </div>
                            </li>
                        </ul>
                        <span className="nav-link  navbar-text text-navbar" >
                            <a href="https://github.com/MauricioMoreiira">@MauricioMoreiira</a>
                        </span>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Navbar