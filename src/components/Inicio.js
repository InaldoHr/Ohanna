import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";
import acai from "../images/acai.jpg";
import marmita from "../images/marmita.jpg";

import salgado from "../images/salgado.jpg";

function Inicio() {
    return (
        <div>
            <Row className="mt-5 p-5">
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemCardapio titulo="Marmita" img={marmita} descricao="Marmita montada na hora por, acompanha 1 proteina e 2 duas guarnições!" />
                </Col>

                <Col>
                    <ItemCardapio titulo="Acai" img={acai} descricao="Açái com adicionais do seu gosto!" />
                </Col>
                <Col>
                    <ItemCardapio titulo="Salgados" img={salgado} descricao="Vários mini salgados para encomenda!" />
                </Col>
            </Row>
        </div>
    )
}
export default Inicio;


