import React from 'react';
import { Col, Row } from "reactstrap";
import './componentsLocalizacao.css';
import macaco from '../images/macaco.webp'

function localizacao() {
    return (
        <Row className='localizacao'>

            <Col className='.col-10 mapa'>

                <iframe className='mapa' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Av.%20Darcy%20Vieira%20Marcondes,%20n%C2%B0%20218%20-%20Res.%20Comercial%20Cidade%20Vista%20Alegre,%20Pindamonhangaba%20-%20SP,%2012442-010+(Cantinho%20da%20Ohana)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
            </Col>

            <Col>
                <a href="https://www.google.com/maps/place/Restaurante+Cantinho+da+Ohana/@-22.9436929,-45.3953412,15z/data=!4m2!3m1!1s0x0:0x34b1aebc6214d47c" target="_blank" rel="noopener noreferrer">
                    <img className='img-fluid .col-2 imgg' src={macaco} width={374}></img>
                </a>
            </Col>
        </Row >
    )
}
export default localizacao;


