import React from 'react'
import '../nav/style.css'
import{ Link } from 'react-router-dom'

function Nav() {
    return <div>
        <nav id="nav">
            <ul>
                <Link class="links" to='/'> HOME</Link> 
                <Link class="links" to='/produtos'> PRODUTOS</Link> 
                <Link class="links"to='/contatos'> CONTATOS</Link> 
                <Link class="links" to='/sobre'>SOBRE</Link> 
            </ul>
        </nav>
    </div>
}


export default Nav