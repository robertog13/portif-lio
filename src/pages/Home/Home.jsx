import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';
import TecCard from '../../components/TechnologiesCard/TechnologyCard';

function Home() {
  return (
  <div>
    <Header />
    <div>
      <div className='FirstSection'>
        <h1>Roberto Gonalves</h1>
        <h2>Desenvolvedor Web</h2>
      </div>

      <div className='SecondSection'>
        <div className='AboutInfo'>
          <h3>About</h3>
          <p>
          Em 2022, concluí meu curso na Trybe como Desenvolvedor de Software Web, após me formar em Administração de Empresas em 2020. Desde então, tenho aplicado os aprendizados adquiridos em ambas as áreas para desenvolver uma visão ampla e estratégica em relação ao mercado de tecnologia.
          <br />
          A experiência de estudar na Trybe foi fundamental para minha trajetória profissional, já que a metodologia de ensino da escola proporciona aos alunos uma vivência prática e próxima do cotidiano do mercado de trabalho. Além disso, as habilidades de organização e trabalho em equipe que adquiri durante meu curso de administração têm sido muito úteis na minha carreira como desenvolvedor.
          <br />
          Atualmente, sigo em constante aprimoramento, buscando sempre me atualizar sobre as novidades e tendências do mercado de tecnologia. Acredito que essa combinação de conhecimentos, aliada à minha paixão pela área, me torna um profissional capaz de lidar com os desafios e oportunidades que surgem no dia a dia do trabalho como desenvolvedor de software web.
          </p>
        </div>
        <span>Image</span>
      </div>

      <div className='ThirdSecond'>
        <h3>Tecnologias</h3>
        <div className='TecCartSection'>
          <TecCard
          iconsTec = {<RiReactjsLine  size={100}/>}
          technology = "React"
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