import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
  
        setValidated(true);
    };
  
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <Form.Group controlId="contactName">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" placeholder="Your name..." required />
                        </Form.Group>
                        <Form.Group controlId="contactEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your email address..." required />
                        </Form.Group>
                        <Form.Group controlId="contactNumber">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" placeholder="Your phone number..." />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlTextarea1" className='d-flex flex-column h-100 pb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} required minLength={24} className='flex-grow-1' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='text-center' lg={3}>
                        <Button type="submit" block>Submit form</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Contact;