import react, { Component } from 'react';
import Business from './Business.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const businessList = [];

//const pizzaData = {
//    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//    name: 'MarginOtto Pizzeria',
//    address: '1010 Paddington Way',
//    city: 'Flavortown',
//    state: 'NY',
//    zipCode: '10101',
//    category: 'Italian',
//    rating: 4.5,
//    reviewCount: 90
//{
//    businessList.map((business) => (
//        <Business />))
//}
//}

// businessList.push(pizzaData);

const BusinessList = () => {
        return (
            <>
                <Container>
                        <Row>
                        <Col>
                            <Business />
                        </Col>
                        <Col>

                            <Business />
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                                <Business />
                        </Col>
                        <Col>
                            <Business />
                            </Col>
                        </Row>
                </Container>
            </>
        )
}

export default BusinessList;