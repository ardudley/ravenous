import react, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Business = (({ business }) => {


        return (

                <Row className="mb-3">
                <Col>
                        <Image src={business.imageSrc} width="150" height="150" rounded />
                </Col>
                 <Col>
                    <Row className="fw-bold">{business.name}</Row>

                <Row>{business.address}</Row>
                    <Row>{business.city}, {business.state} {business.zipCode} </Row>
                    </Col>
                        <Col>
                        <Row>
                        {business.category}
                        </Row>
                        <Row>
                            {"Rating: " + business.rating}
                        </Row>
                        
                        <Row>
                            {"Reviews: " + business.reviewCount}
                        </Row>
                        </Col>
                    </Row>
        )
        });

export default Business;