import React from "react";
import '../home/style.css'
import { Link } from 'react-router-dom'
import office from '../../imagens/office.jpg'

function Home() {
  return (
    <div className="homeContainer">

      <div className="slideContainer">
        <div class="imgg">
          <div className="textSlide">
            <h1>MOUSE OMENARE</h1>
            <p>Conheça os modelos de mouses da R-tech <br /> e mude a forma como você joga seus jogos.</p>
            <Link to='/produtos'>
              <button type="submit" className="btn"><strong>Compre agora!</strong></button>
            </Link>
          </div>
        </div>
      </div>

      <section className="sobreContainer">

        <div className="sobre">
          <h1 class="titulo1"><strong>SOBRE NÓS</strong></h1>
          <p className="pSobre"><strong>Conheça a R-Tech</strong></p>
          <p class="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br />It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="pick">
          <div className="containerPick">
            <h2 className="titulo2">POR QUE NOS ESCOLHER?</h2>
            <img src={office} alt='Imagem do escritório R-tech' className="office" />

            <div className="boxContent">
              <div className="box"><h3 className="box">QUALIDADE</h3> <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div>
              <div className="box"><h3 className="box">INOVAÇÃO</h3> <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
              <div className="box"> <h3 className="box">SATISFAÇÃO</h3> <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
            
          </div>
        </div>
      </section>


    </div>
  )
}
export default Home;
