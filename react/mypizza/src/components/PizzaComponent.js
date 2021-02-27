import React from 'react';
import {Card,CardImg,CardBody,CardTitle,Button,Row,Col, CardText} from 'reactstrap';

const CurrentPizzas = (props) => {

    const DisplayPizza = ( {pizza} ) => {
        return (
            <div style={{ paddingTop: '50px' }} >
            <Card>
                <Row>
                    <Col lg="6">
                        <CardImg top width="100%" src={pizza.picture} alt={pizza.name}/>
                    </Col>
                <Col lg="6" >
                    <CardBody>
                        <CardTitle tag="h5">{pizza.name}</CardTitle>
                        <ul>
                            <li>{pizza.category}</li>
                            <li>{pizza.base}</li>
                            <li>{pizza.cheese_type}</li>
                        </ul>
                        <CardText> Rs: {pizza.price} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>ADD</Button> </CardText>
                        
                    </CardBody>
                </Col>
                </Row>
            </Card>
            </div>
        )
    }

    return (  
        <div>
        { props.filteredpizzas.map((pizza,i) => { return( <DisplayPizza key={i} pizza={pizza}/>) }) }
        </div>
            );
}
 
export default CurrentPizzas;