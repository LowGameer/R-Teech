import React from 'react';
import './style.css'
import Mouse1 from '../../imagens/Mouse1.png';
import Mouse2 from '../../imagens/Mouse2.png';
import Mouse3 from '../../imagens/Mouse3.png';
import Headset1 from '../../imagens/Headset1.png';
import Headset2 from '../../imagens/Headset2.png';
import Headset3 from '../../imagens/Headset3.png';
import Hardware1 from '../../imagens/Hardware1.png';
import Hardware2 from '../../imagens/Hardware2.png';
import Hardware3 from '../../imagens/Hardware3.png';
import Lupus from '../../imagens/Lupus.png';
import Rufus from '../../imagens/Rufus.png';
import Simensis from '../../imagens/Simensis.png';

function Produtos () {

    return (
        <div className="containerProduct">
            <div className='boxProduct'>
                <img src={Mouse1} alt="Imagem de um mouse" className="imgProduct" />
                <h4 className="tituloProduct">MOUSE OMENARE</h4>
                <p className="descriptionProduct"><strong>MOUSE OMENARE Logitech G403 HERO com RGB LIGHTSYNC e Sensor HERO 25K</strong></p>
                <h2 className="priceProduct">R$ 310,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Mouse2} alt="Imagem de um mouse" className="imgProduct" />
                <h4 className="tituloProduct">MOUSE IMPERAVI</h4>
                <p className="descriptionProduct"><strong>MOUSE IMPERAVI Deathadder V2 Chroma, Optical Switch, 20000 DPI</strong></p>
                <h2 className="priceProduct">R$ 279,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Mouse3} alt="Imagem de um mouse" className="imgProduct" />
                <h4 className="tituloProduct">MOUSE EMULARI</h4>
                <p className="descriptionProduct"><strong>MOUSE EMULARI Cobra, Chroma RGB, 12400DPI</strong></p>
                <h2 className="priceProduct">R$ 256,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Headset1} alt="Imagem de um headset" className="imgProduct" />
                <h4 className="tituloProduct">HEADSET AMENO</h4>
                <p className="descriptionProduct"><strong>HEADSET AMENO ZEUS X RGB USB 7.1 Surround Sound Virtual H510-RGB</strong></p>
                <h2 className="priceProduct">R$ 380,00</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Headset2} alt="Imagem de um headset" className="imgProduct" />
                <h4 className="tituloProduct">HEADSET DORIME</h4>
                <p className="descriptionProduct"><strong>MOUSE DORIME Preto e Vermelho P2 Com Microfone PC e Consoles PS4 / Xbox- H510</strong></p>
                <h2 className="priceProduct">R$ 409,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Headset3} alt="Imagem de um headset" className="imgProduct" />
                <h4 className="tituloProduct">HEADSET MATIREMO</h4>
                <p className="descriptionProduct"><strong>HEADSET MATIREMO Sakura Edition 7.1 P2 Com Microfone PC e Consoles PS4 / Xbox- H510</strong></p>
                <h2 className="priceProduct">R$ 256,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Hardware1} alt="Imagem de um aparelho hardware" className="imgProduct" />
                <h4 className="tituloProduct">FONTE MAXIMUS</h4>
                <p className="descriptionProduct"><strong>FONTE MAXIMUS Pylon, 650W, 80 Plus Bronze - PYLON650B-BKCBR</strong></p>
                <h2 className="priceProduct">R$ 380,00</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Hardware2} alt="Imagem de um aparelho hardware" className="imgProduct" />
                <h4 className="tituloProduct">SSD IMPERATOR</h4>
                <p className="descriptionProduct"><strong>SSD IMPERATOR 128 GB Husky Gaming, 2.5", SATA III, Leitura: 570MB/s e Gravação: 500MB/s, Preto - HGML000</strong></p>
                <h2 className="priceProduct">R$ 380,00</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Hardware3} alt="Imagem de um aparelho hardware" className="imgProduct" />
                <h4 className="tituloProduct">COOLER ANIMUS</h4>
                <p className="descriptionProduct"><strong>Cooler Fan Rise Mode, 120mm, Preto - RM-BK-01-FB</strong></p>
                <h2 className="priceProduct">R$ 256,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Lupus} alt="Imagem de um pc" className="imgProduct" />
                <h4 className="tituloProduct">PC LUPUS</h4>
                <p className="descriptionProduct"><strong>PC LUPUS Concórdia Intel Core i7-12700F, 16GB DDR4, GeForce RTX 3070, SSD 1TB NVMe</strong></p>
                <h2 className="priceProduct">R$ 11.755,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Rufus} alt="Imagem de um pc" className="imgProduct" />
                <h4 className="tituloProduct">PC RUFUS</h4>
                <p className="descriptionProduct"><strong>PC RUFUS Intel Core I7-11700F, RGB, GeForce RTX 3060, 16GB, SSD 240GB - G19482-138625</strong></p>
                <h2 className="priceProduct">R$ 8.755,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>
            <div className='boxProduct'>
                <img src={Simensis} alt="Imagem de um pc" className="imgProduct" />
                <h4 className="tituloProduct">PC SIMENSIS</h4>
                <p className="descriptionProduct"><strong>PC SIMENSIS 7000 - I7 6700 3.4ghz 8GB DDR4 SSD 240GB Rx 550 4GB Fonte 500w</strong></p>
                <h2 className="priceProduct">R$ 5.699,99</h2>
                <button className="btnComprar">Comprar</button>
            </div>

        </div>
    )
} export default Produtos
