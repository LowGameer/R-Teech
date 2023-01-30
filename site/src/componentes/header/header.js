import React from 'react'
import '../header/style.css'
import logoMarca from '../imagens/logoMarca.png'
import pesquisa from '../imagens/pesquisa.png'
import perfil from '../imagens/perfil.png'
import compras from '../imagens/compras.png'
import{ Link } from 'react-router-dom'

function Header(){
    return <div class= "header">
       <Link to="/"><img class="logo" src={logoMarca} alt="" /></Link> 
        <div class="textBox">
        <input type="text"  placeholder=' Pesquise'/>
        <button type="submit">
      <Link to="/produtos"><img src={pesquisa} alt="desenho linear de uma lupa" /></Link> 
       </button>
       </div>
       <div class="cadastro">
       <img src={perfil} alt="" />
       <p> <strong>Entre</strong> <br></br>ou <strong>cadastre-se</strong>
       </p>
       </div>
        <div class="carrinho">
        <img src={compras} alt="" />
        </div>
        
        
       </div>
    }

export default Header


