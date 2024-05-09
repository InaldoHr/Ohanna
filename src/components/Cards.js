import React from 'react';
import './componentsCards.css';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';



function Cards({ img, titulo, descricao }) {

    return (
        <div className="center-container">
            <Card className='card'
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody className="card-body">
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>

                    <CardText>
                        {descricao}
                    </CardText>
                    <a href='https://api.whatsapp.com/send/?phone=5512982365360&text&type=phone_number&app_absent=0s' target="_blank">
                        <Button className='botao'>
                            Peça já
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    )
}
export default Cards;