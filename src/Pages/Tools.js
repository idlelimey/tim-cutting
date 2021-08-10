import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../Components/Common/ScrollToTop';

function Tools(){
    return (
        <>
            <Helmet>
                <title>Tim Cutting - Web Developer, Colchester. Tools.</title>
                <meta name="description" content="Web Development tools.  CSS Gradient Generator. What is my Bitcoin-Mass-Index? How long is that new game going to take to download?  Am I meeting the WCAG requirements for colour contrast?  Is that  password any good?" />
            </Helmet>
            <ScrollToTop />
            <Container as="section">
                <Row>
                    <Col>
                        <h1>Tools</h1>
                        <p>Sometimes I need a tool to help me along with certain tasks during the day.  I built these and put them up here for others to use too.  What is my Bitcoin-Mass-Index? How long is that new game going to take to download?  Am I meeting the WCAG requirements for colour contrast?  Is that  password any good?  Answers to these below.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row xs={1} sm={2} md={3} lg={4}>
                    <Col>
                        <NavLink
                            to="/tools/download-calculator"
                            className="btn btn-outline-primary btn-block rounded mb-3 py-3"
                            style={{wordSpacing: '99vw'}}
                        >
                            <i className="icon-down-clock size-5 font-weight-normal"></i>
                            <p className="h3">Download Calculator</p>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink
                            to="/tools/contrast-ratio"
                            className="btn btn-outline-primary btn-block rounded mb-3 py-3"
                            style={{wordSpacing: '99vw'}}
                        >
                            <i className="icon-paint size-5 font-weight-normal"></i>
                            <p className="h3">Contrast Ratio</p>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink
                            to="/tools/css-gradient-generator"
                            className="btn btn-outline-primary btn-block rounded mb-3 py-3"
                        >
                            <i className="icon-code size-5 font-weight-normal"></i>
                            <p className="h3">CSS Gradient<br />Generator</p>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink
                            to="/tools/password-entropy"
                            className="btn btn-outline-primary btn-block rounded mb-3 py-3"
                            style={{wordSpacing: '99vw'}}
                        >
                            <i className="icon-password size-5 font-weight-normal"></i>
                            <p className="h3">Password Entropy</p>
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink
                            to="/tools/your-weight-in"
                            className="btn btn-outline-primary btn-block rounded mb-3 py-3"
                        >
                            <i className="icon-weight size-5 font-weight-normal"></i>
                            <p className="h3">Your Weight<br />In...</p>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Tools