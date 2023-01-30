import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./componentes/pages/home/Home";
import Produtos from "./componentes/pages/produtos/Produtos";
import Sobre from "./componentes/pages/sobre/Sobre"
import Contatos from "./componentes/pages/contatos/Contatos"
import Titulo from "./componentes/titulo/Titulo";
import Mouse1 from '../src/componentes/imagens/Mouse1.png';
import Mouse2 from '../src/componentes/imagens/Mouse2.png';
import Mouse3 from '../src/componentes/imagens/Mouse3.png';
import Headset1 from '../src/componentes/imagens/Headset1.png';
import Headset2 from '../src/componentes/imagens/Headset2.png'
import Headset3 from '../src/componentes/imagens/Headset3.png'
import Hardware1 from '../src/componentes/imagens/Hardware1.png'
import Hardware2 from '../src/componentes/imagens/Hardware2.png'
import Hardware3 from '../src/componentes/imagens/Hardware3.png'
import Rufus from '../src/componentes/imagens/Rufus.png'
import Simensis from '../src/componentes/imagens/Simensis.png'
import Lupus from '../src/componentes/imagens/Lupus.png'

export default () => {
    return (
        <Switch>
            <Route exact path="/">

                <Home />
            </Route>

            <Route exact path="/produtos">
                <Titulo titulo='PRODUTOS' />
                <div className='produtosContainer'>

                    <Produtos
                        imgProduct={Mouse1}
                        titulo='MOUSE OMENARE'
                        description='MOUSE OMENARE Logitech G403 HERO com RGB LIGHTSYNC e Sensor HERO 25K'
                        price='R$ 310,99' />
                    <Produtos
                        imgProduct={Mouse2}
                        titulo='MOUSE IMPERAVI'
                        description='MOUSE IMPERAVI Deathadder V2 Chroma, Optical Switch, 20000 DPI'
                        price='R$ 279,99' />
                    <Produtos
                        imgProduct={Mouse3}
                        titulo='MOUSE EMULARI'
                        description='MOUSE EMULARI Cobra, Chroma RGB, 12400DPI'
                        price='R$ 256,99' />
                    <Produtos
                        imgProduct={Headset1}
                        titulo='HEADSET AMENO'
                        description='HEADSET AMENO ZEUS X RGB USB 7.1 Surround Sound Virtual H510-RGB,'
                        price='R$ 380,00' />
                    <Produtos
                        imgProduct={Headset2}
                        titulo='HEADSET DORIME'
                        description='MOUSE DORIME Preto e Vermelho P2 Com Microfone PC e Consoles PS4 / Xbox- H510'
                        price='R$ 409,00' />
                    <Produtos
                        imgProduct={Headset3}
                        titulo='HEADSET MATIREMO'
                        description='HEADSET MATIREMO Sakura Edition 7.1 P2 Com Microfone PC e Consoles PS4 / Xbox- H510'
                        price='R$ 256,99' />
                    <Produtos
                        imgProduct={Hardware1}
                        titulo='FONTE MAXIMUS'
                        description='FONTE MAXIMUS Pylon, 650W, 80 Plus Bronze - PYLON650B-BKCBR'
                        price='R$ 380,00' />
                    <Produtos
                        imgProduct={Hardware2}
                        titulo='SSD IMPERATOR'
                        description='SSD IMPERATOR 128 GB Husky Gaming, 2.5", SATA III, Leitura: 570MB/s e Gravação: 500MB/s, Preto - HGML000'
                        price='R$ 409,00' />
                    <Produtos
                        imgProduct={Hardware3}
                        titulo='COOLER ANIMUS'
                        description='Cooler Fan Rise Mode, 120mm, Preto - RM-BK-01-FB'
                        price='R$ 256,99' />
                    <Produtos
                        imgProduct={Lupus}
                        titulo='PC LUPUS'
                        description='PC LUPUS Concórdia Intel Core i7-12700F, 16GB DDR4, GeForce RTX 3070, SSD 1TB NVMe'
                        price='R$ 380,00' />
                    <Produtos
                        imgProduct={Rufus}
                        titulo='PC RUFUS'
                        description='PC RUFUS Intel Core I7-11700F, RGB, GeForce RTX 3060, 16GB, SSD 240GB - G19482-138625'
                        price='R$ 409,00' />
                    <Produtos
                        imgProduct={Simensis}
                        titulo='PC SIMENSIS'
                        description='PC SIMENSIS 7000 - I7 6700 3.4ghz 8GB DDR4 SSD 240GB Rx 550 4GB Fonte 500w'
                        price='R$ 256,99' />
                </div>
            </Route>
            <Route exact path="/sobre">

                <Sobre />
            </Route>
            <Route exact path="/contatos">

                <Contatos />
            </Route>
        </Switch>
    );

}