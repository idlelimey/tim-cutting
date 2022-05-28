import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import svgTop from '../Assets/images/404-top.svg';
import svgBot from '../Assets/images/404-bottom.svg';

function NotFound() {
    document.title = 'Page not found';
    return (
        <>
            <Container className="d-flex flex-column flex-grow-1 ">
                <Row>
                    <Col className="text-right">
                        <img src={svgTop} style={{ maxWidth: '25vh' }} alt="404 Top" />
                    </Col>
                </Row>
                <Row className=" d-flex flex-grow-1 align-items-center">
                    <Col className="text-center">
                        <h1 style={{ fontSize: '15vh'}}>
                            404
                        </h1>
                        <p>The page you are looking for doesn&apos;t exist or was removed.</p>
                        <Link to="/">Return to home page</Link>
                    </Col>
                </Row>
                <Row className="mt-auto">
                    <Col className="text-left">
                        <img src={svgBot} style={{ maxWidth: '25vh' }} alt="404 Bottom" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NotFound;
