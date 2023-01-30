import React from 'react';
import '../titulo/style.css'

class Titulo extends React.Component{
    constructor(props){
        super(props)
        this.titulo = this.props.titulo
    }

    render(){
        return <div>
            <h1 id="textTitle" className="boxTitle">{this.titulo}</h1>
        </div>
    }
}

export default Titulo;