import { Col } from 'react-bootstrap';

const BrandLogoCol = (props) => {
    return (
        <Col
            xs={6}
            sm={4}
            md={3}
            lg='auto'
            className='text-center flex-grow-1'
            data-aos={props.aosType}
            data-aos-delay={props.aosDelay}
        >
            {props.logo}
        </Col>
    );
};

export default BrandLogoCol;
