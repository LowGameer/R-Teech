import React from "react";
import '../contatos/style.css'
import Titulo from "../../titulo/Titulo";
import email from '../../imagens/email.png'
import telefone from '../../imagens/telefone.png'


class Contatos extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className ="mestreContato">
                <Titulo titulo="CONTATOS" />
                <div className="paiContato">
                
                    <div className='textos'>
                        <label htmlFor="">Digite seu nome:</label>
                    <input type="text"placeholder='nome' className='nome' id="idpName"></input>
                    <label htmlFor="">Seu melhor E-mail:</label>
                    <input type="email"placeholder='Email' className='nome' id="idpEmail"></input>
                    <label htmlFor="">Escreve sua mensagem:</label>
                    <input type="text"placeholder='Envie sua mensagem' className='nome' id="idpText"></input>
                    </div>
                   
                    <div className='emaildiv'>
                        <h1 className='mensagem'>Entre em contato conosco</h1>
                        <div class='textoMsg'>
                        <p >  Ficou com alguma dúvida?<br></br> Mande uma mensagem, estamos ansiosos para te atender!</p>
                        </div>
                        
                        <img src={email} id="emailid"/>
                        <h3 id="titulo">Envie-me:</h3>
                        <h2 id="idmail">R-tech@gmail.com</h2>
                        <img src={telefone} id="emailid"/>
                        <h3 id="titulo2">Ligue para mim:</h3>
                        <h2 id="telefoneid">(21) 2114-4444</h2>
                    </div>
                </div>
                
           
            </div>
        )
    }
}
export default Contatos 