import React from 'react'
import '../footer2/style.css'
import google from '../imagens/google.png'
import ebit from '../imagens/ebit.png'
import buscape from '../imagens/buscape.png'
import facebook from'../imagens/facebook.png'
import instagram from'../imagens/instagram.png'
import twitter from'../imagens/twitter.png'



function Footer2() {
    return <div class="footer2">
        <div class="container">
            <div>
                <p><strong>ATENDIMENTO</strong></p>
                <p>Horário de atendimento<br></br> 8:00 às 20:00 - Segunda  a Sábado</p><br></br>
                <p>Centra SAC:<br></br>(19) 2114-4444 </p><br></br>
                <p>E-mail<br></br>faleconosco@kabum.com</p>
            </div>
            <div>
                <p><strong>PRODUTOS</strong></p>
                <p>Hardware<br></br>Headset <br></br>Mouse <br></br>PC </p>
            </div>
            <div>
                <p><strong>MINHA CONTA</strong></p>
                <p>Meus pedidos<br></br>Cadastrar ou Entrar<br></br>Newsletter<br></br> </p>
            </div>
            <div class="midias">
                <p><strong>MIDIAS SOCIAIS</strong></p>
                <p><img src={instagram} alt="" /><img src={facebook} alt="" /><img src={twitter} alt="" />
                </p>
            </div>

        </div>
        <div class="imagens">
            <img src={buscape} alt="" />
            <img src={google} alt="" />
            <img id="ebit" src={ebit} alt="" />
        </div>

    </div>
} export default Footer2