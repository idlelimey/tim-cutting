import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../Components/Common/ScrollToTop';
import ToolCard from '../Components/Tools/ToolCard';
import {tools} from '../Data/Content';

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
                <Row className="tool-cards">
                    {tools.map((t,i) => (
                        <ToolCard
                            key={i}
                            to={t.to}
                            icon={t.icon}
                            title={t.title}
                            description={t.description}
                            size={t.size}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Tools