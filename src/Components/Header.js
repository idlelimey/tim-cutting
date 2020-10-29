import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {

    return (
        <Container fluid className='position-sticky'>
            <Container>
                <Row>
                    <Col>
                        <p className='text-center'><i className='icon-tim size-5 text-primary'></i></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Header;