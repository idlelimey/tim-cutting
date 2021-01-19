import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Contact from './Contact';

function Footer() {
    const {pathname} = useLocation();
    const noContactForm = ['/404'];

    return (
        <>
            {!noContactForm.includes(pathname) && (
                <Contact />
            )}
            <Container className="mt-5">
                <Row className='align-items-center'>
                    <Col className='text-center'>
                        <p className="text-muted mb-0">Built from scratch in Colchester.</p>
                        <p>
                            <small>&copy;</small> <i className='icon-tim h1'></i> <small>{new Date().getFullYear()}</small>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
