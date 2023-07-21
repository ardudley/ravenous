import react, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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


    render() {
        return (
                
            <Container><img src={pizzaData.imageSrc} />
                <Row>{pizzaData.name}</Row>
                <Row>{pizzaData.address}</Row>
                <Row>{pizzaData.city}, {pizzaData.state} {pizzaData.state} </Row>
                    <Row>
                        <Col>{pizzaData.category}</Col>
                        <Col>{pizzaData.rating}</Col>
                        <Col>{pizzaData.reviewCount}</Col>
                     </Row>
        </Container>
        )
    };
}

export default Business;