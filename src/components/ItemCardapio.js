import { Card, CardBody, CardTitle, CardText, Tooltip } from 'reactstrap'
import { useState, useId } from 'react';


function ItemCardapio({ img, titulo, descricao }) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const idUnico = useId().replaceAll(/:/g, "");
    return (
        <div>
            <Card
                className='mb-4 mx-auto bg-black text-white'

                style={{
                    width: '18rem',
                    height: '500px'

                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                    <CardText id={idUnico}>
                        {descricao.substring(0, 70)}{descricao.length >= 70 && '...'}
                        <Tooltip
                            isOpen={tooltipOpen}
                            target={idUnico}
                            toggle={toggle}>
                            {descricao}
                        </Tooltip>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemCardapio