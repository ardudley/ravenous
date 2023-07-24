import react, { Component } from 'react';
import Business from './Business.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from './App.js';
import React from 'react';


const BusinessList = (({businesses}) => {
    return (
        <>
        <Container>
        {
            businesses.map(business => {
                return <Business business={business} />
            })
        }
        </Container>
        </>
    )
});

export default BusinessList;