import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function ToolsNav() {
    const { pathname } = useLocation();
    return (
        <Container fluid className="shadow py-4">
            <Container>
                <Row>
                    <Col>
                        <h1 className="m-0 h5"><NavLink to="/tim-cutting/tools">Tools</NavLink> / {pathname.replace('/tim-cutting/tools/','').replace('-',' ')}</h1>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ToolsNav;