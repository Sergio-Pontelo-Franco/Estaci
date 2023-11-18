import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <button to="/historico">Histórico</button>
      <button to="/ocorrencias">Ocorrências</button>
      <button to="/valores">Valores</button>
      <button to="/sobre">Sobre</button>
      <button to="/sair">Sair</button>
    </div>
  );
}

export default Navbar;