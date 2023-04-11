import React from 'react';
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import "./Footer.css"

function Footer() {
  return (
  <div className='Footer'>
    <p>Site desenvolvido por Roberto Gonçalves de Araújo</p>
    <div className='Contact' >
        <a href=""> <RiGithubFill size={40}/> </a>
        <a href=""> <RiLinkedinBoxFill size={40}/> </a>
    </div>

    <div className='Creditos'>
      <p>
      <a href="https://www.flaticon.com/free-icons/steampunk" title="steampunk icons">Steampunk icons created by Smashicons - Flaticon</a>
      </p>
    </div>
  </div>
  );
}

export default Footer;