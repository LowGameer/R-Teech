import React from 'react'
import '../footer/style.css'
import logoMarca2 from '../imagens/logoMarca2.png'
import{ Link } from 'react-router-dom'


function Footer () {
    return <div>
   
        <footer>
            <div class="logoFooter">

               <Link to="/"><img src={logoMarca2} alt="" /></Link> 

            </div>
            <div>
                <ul class="text1">
                   <Link to="/sobre">SOBRE NÓS</Link>
                   <Link to="/produtos">PRODUTOS</Link>
                   <Link to="/contatos">CONTATOS</Link>
                    <a href="https://www.gupy.io/" target="_blank">TRABALHE CONOSCO</a>
                    <a href="politicaprivacidade.html">POLITICA DE PRIVACIDADE</a>
                </ul>
            </div>
            <br></br>
            <div class="grupo">
                <p><a href="https://www.linkedin.com/in/camila-silva-462bb3249/" target="_blank">CAMILA</a> | <a href="https://www.linkedin.com/in/eduardo-marques-a08770249/" target="_blank">EDUARDO</a> | <a href="https://www.linkedin.com/in/low-comanche/" target="_blank">LUCIANO</a> | <a href="https://www.linkedin.com/in/rafapili/" target="_blank">RAFAEL</a> | <a href="https://www.linkedin.com/in/thais-souza7/" target="_blank">THAIS</a> </p>
            </div>
        </footer>

    </div>
} export default Footer
