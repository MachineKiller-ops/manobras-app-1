import React from 'react';
import '../nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Cemig Distribuição</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/simula">
                    <li>Simular</li>
                </Link>
                <Link style={navStyle} to="/configurase">
                    <li>Configurar</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;