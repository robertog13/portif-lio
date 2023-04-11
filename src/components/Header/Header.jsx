import React from 'react';
import { RiHome2Fill, RiContactsFill, RiCodeSSlashFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
  <div className='Header'>
    <img src="src/assets/top-hat.png" alt="top hat" />
    <h1 className='HeaderTitle'>Roberto Gonçalves</h1>
    <nav className='Navegation'>
     <Link className="Link" to="/"><RiHome2Fill size={20} /></Link>
     <Link className="Link" to="/about"><RiContactsFill size={20} /></Link>
     <Link className="Link" to="/projects"><RiCodeSSlashFill size={20} /></Link>
    </nav>
  </div>
  );
}

export default Header;