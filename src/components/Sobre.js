import { Col, Row } from 'reactstrap';
import ohana from '../images/ohana.jpg'

function Sobre() {

    return (
        <div>
            <Row className='d-flex justify-content-center mt-5 p-5'>
                <Col xs="12" md="6">
                    <h1>Quem somos ?</h1>

                    <p>
                        O <b>Cantinho da Ohana</b> é um restaurante e sorveteria encantadora que oferece uma variedade deliciosa de opções, desde marmitex até sorvetes, açaí, lanches e salgados. O nome "Ohana" é uma palavra havaiana que significa família, e isso reflete na atmosfera calorosa e acolhedora do estabelecimento.</p>
                    <p>
                        Localizado em um espaço aconchegante, o Cantinho da Ohana é administrado por membros dedicados da família, que trabalham juntos para criar uma experiência única para os clientes. A equipe é composta por parentes que compartilham não apenas o amor pela culinária, mas também a paixão por oferecer um serviço excepcional.
                    </p>
                    <p>
                        No cardápio diversificado, os clientes podem escolher entre uma variedade de marmitex com opções caseiras e saudáveis. Os lanches e salgados são preparados com ingredientes frescos e de alta qualidade, proporcionando uma explosão de sabores a cada mordida. Além disso, o Cantinho da Ohana é conhecido por seus sorvetes artesanais, oferecendo uma ampla gama de sabores que certamente agradarão a todos os gostos.
                    </p>
                    <p>
                        O destaque do menu é o açaí, preparado com frutas frescas e coberturas saborosas. Os clientes podem personalizar seus açaís de acordo com suas preferências, tornando a visita ao Cantinho da Ohana uma experiência única e personalizada.
                    </p>
                    <p>
                        O ambiente do restaurante é decorado com toques familiares, criando uma sensação acolhedora e convidativa. É um lugar onde os clientes se sentem em casa, cercados por uma atmosfera amigável e uma equipe dedicada que coloca o cliente em primeiro lugar.
                    </p>
                    <p>
                        O Cantinho da Ohana não é apenas um local para refeições, mas também um ponto de encontro para amigos e familiares desfrutarem de momentos especiais juntos. Com um compromisso firme com a qualidade e o serviço excepcional, este restaurante/sorveteria se destaca como um lugar único e querido na comunidade.
                    </p>

                </Col>
                <Col xs="12" md="6">
                    <p className='text-center'><img className='img-fluid' src={ohana} width={700}></img></p>
                </Col>
            </Row>

        </div>
    )


}
export default Sobre;