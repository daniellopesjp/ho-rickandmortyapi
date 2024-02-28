import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/characters">
                                Personagens
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/episodes">
                                Episódios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/locations">
                                Localizações
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;