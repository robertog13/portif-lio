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
      <p>Ilustrações feitas por : <br />
      <a href="https://br.freepik.com/vetores-gratis/desenho-de-robo-engracado-vector_9374792.htm#page=2&query=maquina%20de%20escrever%20Steam%20Punk%20art&position=41&from_view=search&track=ais">gleb_guralnyk</a> no Freepik
      </p>
    </div>
  </div>
  );
}

export default Footer;