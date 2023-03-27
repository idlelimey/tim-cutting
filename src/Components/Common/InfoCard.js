import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { Col } from 'react-bootstrap';

function InfoCard(props) {
    const Theme = useContext(ThemeContext);

    return (
        <Col className='mb-5 d-flex info-card' data-aos={props.aosType} data-aos-delay={props.aosDelay}>
            <div className='flex-grow-0'>
                <i
                    className={`icon-${props.icon} size-5 mr-3 text-${Theme === 'dark' ? 'mid' : 'lighter'}`}
                    style={{ lineHeight: '1' }}
                ></i>
            </div>
            <div className='flex-grow-1'>
                <h1 className='mb-3'>
                    {props.heading}
                    <br />
                    <small className='text-muted'>{props.subheading}</small>
                </h1>
                <p className='lead'>{props.content}</p>
                <ul className='ticks'>
                    {props.list.map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                </ul>
            </div>
        </Col>
    );
}

export default InfoCard;
