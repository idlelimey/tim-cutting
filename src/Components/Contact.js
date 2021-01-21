import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Contact() {
    const [validated, setValidated] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        emailjs.sendForm('service_2tycxse', 'template_4klxh5c', e.target, 'user_DBLub1SoPNOiZrKb1nEMy')
            .then((result) => {
                console.info(result);
            }, (error) => {
                console.info(error);
            });
    }
  
    return (
        <Form noValidate validated={validated} onSubmit={sendEmail} id='contact-form'>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <Form.Group controlId="from_name">
                            <Form.Label>Your name</Form.Label>
                            <Form.Control type="text" name="from_name" placeholder="Your name..." size="lg" required />
                        </Form.Group>
                        <Form.Group controlId="from_email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="from_email" placeholder="Your email address..." size="lg" required />
                        </Form.Group>
                        <Form.Group controlId="from_phone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" name="from_phone" placeholder="Your phone number..." size="lg" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="message" className='d-flex flex-column h-100 pb-3'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} name="message" required minLength={24} className='flex-grow-1' />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='text-center' lg={3}>
                        <Button type="submit" variant="outline-primary" size='lg' block>Submit form</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Contact;