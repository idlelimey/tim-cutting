import React, {useEffect, useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Contact() {
    const [validated, setValidated] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const sendButton = useRef();

    const sendEmail = (e) => {

        const form = e.currentTarget;
        sendButton.current.disabled = true;
        sendButton.current.innerHTML = 'Sending...';

        if (form.checkValidity() === false) {
            sendButton.current.disabled = false;
            sendButton.current.innerHTML = 'Check and try again';
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            sendButton.current.disabled = true;
            sendButton.current.innerHTML = 'Sending...';

            emailjs.sendForm('service_2tycxse', 'template_4klxh5c', e.target, 'user_DBLub1SoPNOiZrKb1nEMy')
                .then((result) => {
                    console.info(result);
                    sendButton.current.disabled = true;
                    sendButton.current.innerHTML = 'Thanks!';
                    setIsSent(true);
                }, (error) => {
                    console.info(error);
                });            
        }
        
        setValidated(true);
    }

    useEffect(() => {
        sendButton.current.disabled = false;
        sendButton.current.innerHTML = 'Send Message';
    }, []);
  
    return (
        <Form noValidate validated={validated} onSubmit={sendEmail} id='contact-form'>
            <Container as="section">
                {!isSent ? (
                    <Row xs={1} md={2}>
                        <Col>
                            <Form.Group controlId="from_name" className="position-relative">
                                <Form.Label className="d-block">
                                    Your name
                                </Form.Label>
                                <Form.Control type="text" name="from_name" placeholder="Your name..." size="lg" required />

                                <Form.Control.Feedback type="invalid" className="position-absolute text-right" style={{top: '.5rem'}}>
                                    Gonna need a name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="from_email" className="position-relative">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="from_email" placeholder="Your email address..." size="lg" required />
                                <Form.Control.Feedback type="invalid" className="position-absolute text-right" style={{top: '.5rem'}}>
                                    Enter your email address.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="from_phone">
                                <Form.Label>Telephone</Form.Label>
                                <Form.Control type="text" name="from_phone" placeholder="Your phone number..." size="lg" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="message" className='d-flex flex-column h-100 pb-3 position-relative'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} name="message" required minLength={12} className='flex-grow-1' />
                                <Form.Control.Feedback type="invalid" className="position-absolute text-right" style={{top: '.5rem'}}>
                                    Write a short message
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        <Col className="text-center">
                            <p className="h2 text-muted"><i className="icon-tick-circle"></i> Copy that!</p>
                            <p className="text-muted">Your message has been sent.</p>
                        </Col>
                    </Row>
                )}
                <Row className='d-flex justify-content-center mt-4'>
                    <Col className='text-center' lg={3}>
                        <Button type="submit" variant="outline-primary" size='lg' block ref={sendButton}>Submit form</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    );
}

export default Contact;