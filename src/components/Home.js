import './componentsHome.css';
import { Col, Row } from "reactstrap";
import Carousell from "./Carousell";
import Cards from "./Cards";
import marmita from "../images/marmita.jpg";
import acai from "../images/acai.jpg";
import hamburguer from "../images/hamburguer.png";
import mg2 from "../images/mg2.jpg";

function Home() {
    return (
        <div>
            <Carousell />

            <Row className="mt-4">
                <Col xs="12" sm="6" md="4">
                    <Cards img={marmita} titulo="Marmitas" descricao="Marmitas com várias opções de proteínas e guarnições!" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Cards img={acai} titulo="Gelados" descricao="Várias opções de gelados para refrescar o seu dia!" />
                </Col>
                <Col xs="12" sm="6" md="4">
                    <Cards img={hamburguer} titulo="Hamburguer Gourmet" descricao="Utiliza ingredientes de alta qualidade com ótimos sabores" />
                </Col>
            </Row>

            <Row className='texto'>
                <h1 className='textoh1'>
                    COMIDA DE QUALIDADE SÓ AQUI
                </h1>

                <Row>
                    <Col xs="12">
                        <hr className='hrdaora '></hr>
                    </Col>
                </Row>

            </Row>
            <Row>
                <Col className='anuncio'>
                    <img className='imagge img-fluid d-block mx-auto' src={mg2} alt="anuncio"></img>
                </Col>
            </Row>
        </div>
    );
}

export default Home;