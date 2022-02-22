import React, { useState, useEffect } from 'react';
import { Col, Row, Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function Header({theme, setTheme}) {
    let location = useLocation();
    const [expandNav, setExpandNav] = useState(false);
    const [showShare, setShowShare] = useState(false);

    useEffect(() => {
        setExpandNav(false);
    }, [location]);

    return (
        <>
            <Navbar expand="lg" expanded={expandNav} sticky="top" className="p-0 shadow">

                <Navbar.Brand className="p-0 px-3">
                    <NavLink to="/" className="text-decoration-none" title="Tim Cutting">
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
                        <NavLink
                            className={({isActive}) => 'nav-link ml-4 my-2 m-lg-0' + (isActive ? ' active' : '')}
                            to="/"
                            end
                        >
                            Home
                        </NavLink>

                        <NavLink className={({isActive}) => 'nav-link ml-4 my-2 m-lg-0' + (isActive ? ' active' : '')}to="/cv">CV</NavLink>
                        <NavLink className={({isActive}) => 'nav-link ml-4 my-2 m-lg-0' + (isActive ? ' active' : '')} to="/tools">Tools</NavLink>
                        <a href="#contact-form" className='nav-link ml-4 my-2 m-lg-0'>Contact</a>
                    </Nav>
                    <Nav>
                        <Row noGutters className='align-items-center'>
                            <Col className='text-right flex-grow-1'>
                                <div className="d-flex align-items-center">
                                    <div className={'share-icons ml-3 my-2 m-lg-0 flex-grow-1'}>
                                        <a
                                            href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ftimcutting.co.uk%2F&title=Tim%20Cutting&source=https%3A%2F%2Fjonsuh.com%2F&summary=Tim+Cutting+is+a+frontend+web+developer+in+Colchester%2C+UK.+JavaScript%2C+React%2C+UI%2FUX%2C+WordPress"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`share-${showShare ? 'in' : 'out'}`}
                                            aria-label="Share on LinkedIn"
                                        >
                                            <i className={'icon-linkedin text-primary size-2 cursor-pointer'}></i>
                                        </a>
                                        <a
                                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftimcutting.co.uk%2F"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`share-${showShare ? 'in' : 'out'}`}
                                            aria-label="Share on Facebook"
                                        >
                                            <i className={`icon-facebook share-${showShare ? 'in' : 'out'} text-primary size-2 cursor-pointer`}></i>
                                        </a>
                                        <a
                                            href="https://twitter.com/intent/tweet/?text=Tim+Cutting+is+a+frontend+web+developer+in+Colchester%2C+UK.+JavaScript%2C+React%2C+UI%2FUX%2C+WordPress.&url=https%3A%2F%2Ftimcutting.co.uk%2F&hashtags=web,development,js,react"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`share-${showShare ? 'in' : 'out'}`}
                                            aria-label="Share on Twitter"
                                        >
                                            <i className={`icon-twitter  share-${showShare ? 'in' : 'out'} text-primary size-2 cursor-pointer`}></i>
                                        </a>
                                        <a
                                            href="whatsapp://send?text=https%3A%2F%2Ftimcutting.co.uk+-+Tim+Cutting+is+a+frontend+web+developer+in+Colchester%2C+UK.+JavaScript%2C+React%2C+UI%2FUX%2C+WordPress"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`share-${showShare ? 'in' : 'out'}`}
                                            aria-label="Share on Whatsapp"
                                        >
                                            <i className={`icon-whatsapp share-${showShare ? 'in' : 'out'} text-primary size-2 cursor-pointer`}></i>
                                        </a>
                                    </div>
                                    <i
                                        className="icon-share px-3 my-2 m-lg-0 pl-lg-4 text-mid size-2 cursor-pointer flex-grow-0"
                                        onClick={() => setShowShare(!showShare)}
                                    ></i>
                                </div>
                                
                            </Col>
                            <Col className='text-left flex-grow-0 mr-2'>

                                <span
                                    className="theme-toggle icon-font"
                                    data-theme={theme}
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    tabIndex="0"
                                ></span>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
}

export default Header;