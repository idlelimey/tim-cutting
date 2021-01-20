import React, { useState, useEffect } from 'react';
import { Col, Form, Row, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function Header({theme, setTheme}) {
    let location = useLocation();
    const [expandNav, setExpandNav] = useState(false);

    useEffect(() => {
        setExpandNav(false);
    }, [location]);

    return (
        <>
            <Navbar expand="lg" expanded={expandNav} sticky="top" className="p-0 shadow">

                <Navbar.Brand className="p-0 px-3">
                    <NavLink to="/" exact className="text-decoration-none">
                        <i className='icon-tim size-4 text-primary'></i>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="nav"
                    id="nav-toggle"
                    onClick={() => setExpandNav(!expandNav)}
                >
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link ml-4 my-2 m-lg-0" activeClassName="active" to="/" exact>Home</NavLink>
                        <NavLink className="nav-link ml-4 my-2 m-lg-0" activeClassName="active" to="/cv">CV</NavLink>
                        <NavLink className="nav-link ml-4 my-2 m-lg-0" activeClassName="active" to="/tools">Tools</NavLink>
                    </Nav>
                    <Nav>
                        <Row noGutters className='align-items-center'>
                            <Col className='text-right flex-grow-1'>
                                <span className='icon-font size-2 pr-2 text-mid' id="theme-label">F</span>
                            </Col>
                            <Col className='text-left flex-grow-0 mr-2'>
                                <Form.Group controlId="theme-switch" className="m-0">
                                    <Form.Label className="sr-only">Theme</Form.Label>
                                    <Form.Switch 
                                        id='set-mode'
                                        checked={theme === 'dark'}
                                        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        aria-labelledby="theme-label"
                                    />
                                </Form.Group>  
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
}

export default Header;