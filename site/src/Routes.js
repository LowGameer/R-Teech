import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./componentes/pages/home/Home";
import Produtos from "./componentes/pages/produtos/Produtos";
import Sobre from "./componentes/pages/sobre/Sobre"
import Contatos from "./componentes/pages/contatos/Contatos"
import Titulo from "./componentes/titulo/Titulo";

function Routes () {
    return (
        <Switch>
            <Route exact path="/">

                <Home />
            </Route>

            <Route exact path="/produtos">
                <Titulo titulo='PRODUTOS' />
               
               <Produtos/>              
            </Route>
            <Route exact path="/sobre">

                <Sobre />
            </Route>
            <Route exact path="/contatos">

                <Contatos />
            </Route>
        </Switch>
    );

} export default Routes;