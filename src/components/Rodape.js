import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom'
import './componentsRodape.css';
import logo from '../images/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";






function Rodape() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;

    return (
        <footer className="rodape">
            <hr className='hrpe'></hr>
            <Container>
                <Row className='footer'>
                    <Col xs="12" sm="12" md="3" className=''>
                        <img className='logo img-fluid mx-auto d-block' src={logo}></img>

                    </Col>

                    <Col xs="12" sm="12" md="3" >
                        <ul>
                            <li className='title'>Cantinho da Ohana</li>
                            <li>Endereço:  Av. Darcy Vieira Marcondes, n° 218 - Res. Comercial Cidade Vista Alegre, Pindamonhangaba - SP, 12442-010</li>
                        </ul>
                    </Col>
                    <Col xs="12" sm="12" md="3" >


                        <ul className={`list-unstyled ${isOpen ? 'open' : ''}`}>
                            <li className='title'>Menu</li>
                            <li><Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link></li>
                            <li><Link to="/sobre" className={location === '/sobre' ? 'nav-link active' : 'nav-link'}>Sobre</Link></li>
                            <li><Link to="/localizacao" className={location === '/localizacao' ? 'nav-link active' : 'nav-link'}>Localizacao</Link></li>
                        </ul>
                    </Col>
                    <Col xs="12" sm="12" md="3" >
                        <ul className='semana'>
                            <li className='horario'>Horários</li>
                            <li>segunda-feira <b>*Fechado*</b></li>
                            <li>terça-feira	<b>11:00–19:00</b></li>
                            <li>quarta-feira <b>11:00–19:00</b></li>
                            <li>quinta-feira <b>11:00–23:00</b></li>
                            <li>sexta-feira	<b>11:00–23:00</b></li>
                            <li>sábado <b>11:00–23:00</b></li>
                            <li>domingo	<b>11:00–23:00</b></li>
                        </ul>

                    </Col>

                    <Col xs="12">
                        <ul className='links'>
                            <li className='insta'><a href='https://www.instagram.com/cantinhodaohana.oficial/' target='_blank' style={{ color: 'inherit', textDecoration: 'none' }}><FaInstagram /></a></li>
                            <li className='facee'><a href='https://www.facebook.com/vanessa.pessoa.7528' target='_blank' style={{ color: 'inherit', textDecoration: 'none' }}><FaFacebook /></a></li>
                        </ul>
                    </Col>
                    <p><b></b>© {new Date().getFullYear()} Todos os direitos reservados.</p>
                </Row>




            </Container>
        </footer >
    );
}

export default Rodape;