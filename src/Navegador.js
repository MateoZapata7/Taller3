import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navegador = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid" >
                <img src="img/logo1.png" alt="logo" className="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/inicio">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="buscar">Buscar</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Nuevo">Nuevo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
