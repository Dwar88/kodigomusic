import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Kodigo Music</Link>
      <nav className="nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/perfil">Mi Perfil</Link></li>
          <li><Link to="/registro">Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;