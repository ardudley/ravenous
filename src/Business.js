import react, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


export const pizzaData = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

const Business = () => {



        return (

                <Row className="mb-3">
                <Col>
                        <Image src={pizzaData.imageSrc} width="150" height="150" rounded />
                </Col>
                 <Col>
                    <Row className="fw-bold">{pizzaData.name}</Row>
                    <Row>
                        {pizzaData.category}
                    </Row>
                <Row>{pizzaData.address}</Row>
                    <Row>{pizzaData.city}, {pizzaData.state} {pizzaData.zipCode} </Row>
   
                    <Row>
    
                        <Col>
                            {"Rating: " + pizzaData.rating}
                        </Col>
                        <Col>
                            {"Reviews: " + pizzaData.reviewCount}
                        </Col>
                    </Row>
                 </Col>
                </Row>
        )
    
};

export default Business;