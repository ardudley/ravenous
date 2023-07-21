import react, { Component } from 'react';
import Business from './Business.js';

const businessList = [];

const pizzaData = {
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

businessList.push(pizzaData);

export default class BusinessList extends Component {
    render() {
        return (
            <>
                {businessList.map((business) => (
                    <Business />))}
            </>
        )
    };
}