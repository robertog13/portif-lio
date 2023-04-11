import React from 'react';
import { RiReactjsLine, RiTestTubeFill, RiNodeTree, RiCodeBoxFill, RiServerFill } from "react-icons/ri";
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';
import TecCard from '../../components/TechnologiesCard/TechnologyCard';
import "./Home.css";

function Home() {
  return (
  <div>
    <Header />
    <div>
      <div className='FirstSection'>
        <div className='TitlePage'>
          <h1>Roberto Gonçalves</h1>
          <h2>Desenvolvedor Web</h2>
        </div>
        <img src="src/assets/let-s-research!-retro-futurism.jpg" alt="Robot" />
      </div>

      <div className='SecondSection'>
        <h3>About</h3>
        <div className='AboutInfo'>
          <div className='ImageContainer'>
        <img src="src/assets/Pefil.jpg" alt="" />
          </div>
          <p>
          Em 2022, concluí meu curso na Trybe como Desenvolvedor de Software Web, após me formar em Administração de Empresas em 2020. Desde então, tenho aplicado os aprendizados adquiridos em ambas as áreas para desenvolver uma visão ampla e estratégica em relação ao mercado de tecnologia.
          <br />
          A experiência de estudar na Trybe foi fundamental para minha trajetória profissional, já que a metodologia de ensino da escola proporciona aos alunos uma vivência prática e próxima do cotidiano do mercado de trabalho. Além disso, as habilidades de organização e trabalho em equipe que adquiri durante meu curso de administração têm sido muito úteis na minha carreira como desenvolvedor.
          <br />
          Atualmente, sigo em constante aprimoramento, buscando sempre me atualizar sobre as novidades e tendências do mercado de tecnologia. Acredito que essa combinação de conhecimentos, aliada à minha paixão pela área, me torna um profissional capaz de lidar com os desafios e oportunidades que surgem no dia a dia do trabalho como desenvolvedor de software web.
          </p>
        </div>
      </div>

      <div className='ThirdSection'>
        <h3>Tecnologias</h3>
        <div className='TecCardSection'>
          <TecCard
          iconsTec = {<RiCodeBoxFill  size={100} className='IconTec'/>}
          technology = "HTML & CSS"
          />
           <TecCard
          iconsTec = {<RiReactjsLine  size={100} className='IconTec'/>}
          technology = "React"
          />
           <TecCard
          iconsTec = {<RiNodeTree  size={100} className='IconTec'/>}
          technology = "NodeJs"
          />
            <TecCard
          iconsTec = {<RiTestTubeFill  size={100} className='IconTec'/>}
          technology = "Test"
          />
             <TecCard
          iconsTec = {<RiServerFill size={100} className='IconTec'/>}
          technology = "APIs"
          />
        </div>
      </div>

      <div className='FourthSection'>
        <h3>Projetos</h3>
        <span>Carrossel</span>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Home;