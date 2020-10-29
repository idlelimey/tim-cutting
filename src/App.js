import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.scss';
import Header from './Components/Header';
import SingleJob from './Components/SingleJob';
import Jobs from './Data/History.json';
import Contact from './Components/Contact';

function App() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <blockquote className='blockquote'>
                            <p>I am an experienced and enthusiastic web developer with a number of essential and valuable digital skills from many years in development, design and marketing.</p>
                            <p>I have a strong background in web development using standards-led JavaScript, SASS and PHP to produce high quality design &amp; data driven user experiences within many frameworks including Wordpress, React and native platforms.</p>
                        </blockquote>
                    </Col>
                </Row>
            </Container>

            <Container>
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
                                    <li className='pb-3'>Javascript</li>
                                    <li className='pb-3'>ES5/6, ReactJS, jQuery</li>
                                    <li className='pb-3'>CSS 3, SASS</li>
                                    <li className='pb-3'>HTML, Pug, HandleBars </li>
                                    <li className='pb-3'>Wordpress</li>
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
            </Container>

            <Container>
                <Row xs={1} md={2}>
                    {Jobs.jobs.sort((a,b) => {return a.order - b.order;}).map((job, i) => {
                        return (
                            <Col key={i} className='mb-5'>
                                <SingleJob title={job.title} company={job.company} period={job.period} content={job.content} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <blockquote className='blockquote'>
                            <p>Years of experience and the skills necessary to produce modern front-end applications from conception and design through to development, testing and deployment.</p>
                        </blockquote>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Contact />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className='text-center'>
                        <small>&copy;</small> <i className='icon-tim h1'></i> <small>{new Date().getFullYear()}</small>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
