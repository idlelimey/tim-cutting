import React from 'react';
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BlockQuote from '../Components/Common/BlockQuote';
import ScrollToTop from '../Components/Common/ScrollToTop';
import SingleJob from '../Components/SingleJob';
import Content from '../Data/Content.json';

function CV() {
    document.title = 'Tim Cutting - Curriculum Vitae, Frontend Developer, Colchester';
    return (
        <>
            <ScrollToTop />
            <div className="pt-5 px-3 px-md-0">
                <Container as="section">
                    <Row noGutters>
                        <Col md={4} lg={3} xl={2} className='text-center text-md-left mb-5'>
                            <h1>
                                <i className='icon-tim size-10 text-primary'></i>
                            </h1>
                            <div className='pl-md-3'>
                                <p className='h3'>Tim Cutting</p>
                                <p className='h3'>3<small><sup>rd</sup></small> July, 1979</p>
                                <Button href='#contact-form' size='sm' variant="outline-primary" className='mt-3' title="Contact Tim">
                                    <i className='icon-mail size-2 p-1 font-weight-normal'></i>
                                </Button><br />
                                <Button href='/Tim-Cutting-CV-fe-2021.pdf' size='sm' variant="outline-primary" className='mt-3' title="Download CV">
                                    <i className='icon-pdf size-2 p-1 font-weight-normal'></i>
                                </Button>
                            </div>
                        
                        </Col>
                        <Col md={8} lg={9} xl={10}>
                            <BlockQuote content={Content.blockquotes.top} />
                        </Col>
                    </Row>
                </Container>

                <Container as="section">
                    <Row>
                        <Col lg={8}>
                            <h2>Competencies</h2>
                            <hr />
                            <Row xs={1} md={2}>
                                <Col>
                                    <ul className='list-unstyled'>
                                        <li className='pb-3'>Responsive Web Design</li>
                                        <li className='pb-3'>User Experience</li>
                                        <li className='pb-3'>Brand Design</li>
                                        <li className='pb-3'>B2C Design &amp; Marketing</li>
                                        <li className='pb-3'>Print Design</li>
                                        <li className='pb-3'>Web Analytics</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul className='list-unstyled'>
                                        <li className='pb-3'>JavaScript</li>
                                        <li className='pb-3'>ES5/6, ReactJS, jQuery</li>
                                        <li className='pb-3'>CSS 3, SASS</li>
                                        <li className='pb-3'>HTML, Pug, HandleBars </li>
                                        <li className='pb-3'>WordPress</li>
                                        <li className='pb-3'>Bootstrap &amp; Foundation</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4}>
                            <h2>Software</h2>
                            <hr />
                            <ul className='list-unstyled'>
                                <li className='pb-3'>Visual Studio Code</li>
                                <li className='pb-3'>Git/GitHub</li>
                                <li className='pb-3'>DevTools in Chromium/FF</li>
                                <li className='pb-3'>Adobe Illustrator</li>
                                <li className='pb-3'>Adobe Photoshop</li>
                                <li className='pb-3'>Microsoft Office Applications</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className='py-5 justify-content-between'>
                        {Content.icons.map((icon, i) => {
                            return (
                                <Col key={i} xs={4} sm={3} md={'auto'} className='text-center'>
                                    <OverlayTrigger
                                        placement='top'
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={<Tooltip>{icon.text}</Tooltip>}
                                    >
                                        <i className={`icon-${icon.icon} size-3 text-mid`}></i>
                                    </OverlayTrigger>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>

                <Container as="section">
                    <Row xs={1} md={2}>
                        {Content.jobs.sort((a,b) => {return a.order - b.order;}).map((job, i) => {
                            return (
                                <Col key={i} className='mb-5'>
                                    <SingleJob title={job.title} company={job.company} period={job.period} content={job.content} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>

                <Container as="section">
                    <Row>
                        <Col>
                            <BlockQuote content={Content.blockquotes.bottom} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default CV;