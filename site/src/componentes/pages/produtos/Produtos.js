import React from "react";
import '../produtos/style.css'
import Titulo from "../../titulo/Titulo";


class Produtos extends React.Component{
    constructor(props){
        super(props)
        this.price = this.props.price
        this.titulo = this.props.titulo
        this.description = this.props.description
        this.imgProduct = this.props.imgProduct
    }

    render(){
        return  (<div>
            
        <div className="caixaProduct">
            <img src={this.imgProduct} alt="" className="imgProduct"/>
            <h4 className="tituloProduct">{this.titulo}</h4>
            <p className="descriptionProduct"><strong>{this.description}</strong></p>
            <h2 className="priceProduct">{this.price}</h2>
            <button className="btnComprar">Comprar</button>
        </div>
        </div>
        
        )
    }
}

export default Produtos