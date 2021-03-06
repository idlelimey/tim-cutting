import React from 'react';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BlockQuote from '../Components/Common/BlockQuote';
import Content from '../Data/Content.json';
import {Sony, TheSun, Sky, Telegraph, TypeCreative, Breakfree, BulkPowders} from '../Components/Common/BrandLogos';
import ScrollToTop from '../Components/Common/ScrollToTop';

function Home() {
    const heroButtons = [
        {
            icon: 'mail',
            label: 'Email me',
            href: '#contact-form'
        },
        {
            icon: 'document',
            label: 'Read CV',
            href: '/tim-cutting/cv'
        }
    ];

    console.info('y', heroButtons);
    
    return (
        <>
            <ScrollToTop />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 'calc(100vh - 76px)'}}>
                <Container className="p-0">
                    <svg x="0px" y="0px" viewBox="0 0 318.8 247.4" xmlSpace="preserve" id="hello">
                        <path strokeLinecap="round" d="M63.5,197.1c-3.8-46.6-9.4-93-16.8-139.2"/>
                        <path strokeLinecap="round" d="M101.1,19.2c-2.2,69.5-1.8,139.2,1.1,208.6"/>
                        <path strokeLinecap="round" d="M99.7,112.6c-31.2,26.2-38.2,35-78.1,43.5"/>
                        <path strokeLinecap="round" d="M139.6,151.1c11.2-7.2,31.4-54.1-1.1-33.5c-40,25.4,5.1,104.5,44.3,31.2"/>
                        <path strokeLinecap="round" d="M181.1,205.4c2.4-59.1,2.7-118.4,0.9-177.7"/>
                        <path strokeLinecap="round" d="M219.7,22.5c-5.6,53.9-8.8,108.3-9.6,162.5"/>
                        <path strokeLinecap="round" d="M261.9,99.5c-48.1,5.9-29.7,89.4,16.7,67.7c20.3-9.5,20.1-56.9-22.8-57.1"/>
                    </svg>
                    <BlockQuote
                        content={[Content.blockquotes.top[0]]}
                        buttons={heroButtons}
                    />
                </Container>
                
            </div>

            <Container as="section">
                <Row xs={1} lg={3}>
                    <Col className="mb-5 mb-lg-0">
                        <h1 className="mb-3">Frontend<br /><span className="text-muted">Front and centre</span></h1>
                        <p className="lead">Modern frontend web development using the latest technology to drive performance and scalability.</p>
                        <ul className="ticks">
                            <li>Javascript, React</li>
                            <li>Responsive</li>
                            <li>Wordpress</li>
                        </ul>
                    </Col>
                    <Col className="mb-5 mb-lg-0">
                        <h1 className="mb-3">Design<br /><span className="text-muted">Modern, Useful</span></h1>
                        <p className="lead">Attractive and usable design combining the best UX/UI and design practices with browser compatibility.</p>
                        <ul className="ticks">
                            <li>User Experience</li>
                            <li>Web &amp; Packaing Design</li>
                            <li>Branding</li>
                        </ul>
                    </Col>
                    <Col>
                        <h1 className="mb-3">Search Optimised<br /><span className="text-muted">Human readable</span></h1>
                        <p className="lead">Delivering SEO compliant code with an emphasis on maintaining readability for your end users.</p>
                        <ul className="ticks">
                            <li>AMP Development</li>
                            <li>Page Optimisation</li>
                            <li>JSON-LD Schema</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container as="section">
                <Row>
                    {Content.icons.map((icon, i) => {
                        return (
                            <Col key={i} xs={4} sm={3} lg="auto" className='text-center flex-grow-1'>
                                <OverlayTrigger
                                    placement='top'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>{icon.text}</Tooltip>}
                                >
                                    <i className={`icon-${icon.icon} size-4 text-mid`}></i>
                                </OverlayTrigger>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <Container as="section">
                <Row>
                    <Col>
                        <h1 className="text-center">I&apos;ve worked with some great brands...</h1>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <Breakfree />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <BulkPowders />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <Sky />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <Sony />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <Telegraph />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <TheSun />
                    </Col>
                    <Col xs={6} sm={4} md={3} lg="auto" className='text-center flex-grow-1'>
                        <TypeCreative />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center">And dozens more.</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;