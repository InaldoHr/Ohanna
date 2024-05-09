import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './componentsMenu.css';
import Logo from '../images/logo.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
} from 'reactstrap';


import { Link, useLocation, } from 'react-router-dom'


function Menu() {
    //const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const location = useLocation().pathname;
    return (
        <div className='barra'>
            <Container className=''>
                <Navbar dark expand="md">
                    <Link to="/" className='navbar-brand '><img src={Logo} alt='logo' width={150}></img></Link>
                    <NavbarToggler onClick={toggle} className='nav' />
                    <Collapse  isOpen={isOpen} navbar >

                        <Nav className="me-auto " navbar>
                            <Nav className="navbar-nav " >
                                <NavItem  >
                                    <Link to="/" className={location === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                                </NavItem>
                                <NavItem >
                                    <Link to="/sobre" className={location === '/sobre' ? 'nav-link active' : 'nav-link'}>Sobre nós</Link>
                                </NavItem>
                                <NavItem >
                                    <Link to="/localizacao" className={location === '/localizacao' ? 'nav-link active' : 'nav-link'}>Localização</Link>
                                </NavItem>
                            </Nav>
                        </Nav>

                    </Collapse>

                </Navbar>

            </Container>
            <hr className='hr mt-0'></hr>
        </div>

    )
}
export default Menu