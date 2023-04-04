import React from 'react';
import { RiHome2Fill, RiContactsFill, RiCodeSSlashFill } from "react-icons/ri";
import { Link } from 'react-router-dom'

function Header() {
  return (
  <div className='Header'>
    <span>Icon</span>
    <h1>Roberto Gonçalves</h1>
    <nav className='Navegation'>
     <Link to="/"><RiHome2Fill /></Link>
     <Link to="/about"><RiContactsFill /></Link>
     <Link to="/projects"><RiCodeSSlashFill /></Link>
    </nav>
  </div>
  );
}

export default Header;