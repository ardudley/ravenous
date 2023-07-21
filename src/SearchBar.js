import react, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const searchTypes = [
    {
    name: "Best Match",
    value: "best_match"
}, {
    name: "Highly Rated",
    value: "rating"
},
{
    name: "Most reviewed",
    value: "review_count"
}
]


export default class SearchBar extends Component {
    render() {
        return (
            <Form>
                <Container>
                    <Row>
                        <Col>
                           <Form.Label htmlFor="Search">Search</Form.Label>
                            <Form.Control className="mb-3" id="Search" type="text" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="Location">Location</Form.Label>
                            <Form.Control className="mb-3" id="Location" type="text" />
                        </Col>
                    </Row>
                           <Form.Label for="searchType">Search type:</Form.Label>
                           <Form.Select name="searchType">
                        {searchTypes.map((type) => {
                            return (<option value={type.value}>{type.name}</option>)
                        })}
                    </Form.Select>
                    <Button type="submit" className="my-2" variant="secondary" value="Search" >Search</Button>
                </Container>
             </Form>
        )
    };
}
