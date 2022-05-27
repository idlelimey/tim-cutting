import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { Col } from 'react-bootstrap';

type Props = {
    icon: string,
    heading: string,
    subheading: string,
    content: string,
    list: string[]
};

function IconColumn({icon, heading, subheading, content, list}: Props) {
    const Theme = useContext(ThemeContext);

    return (
        <Col className="mb-5 d-flex">
            <div className="flex-grow-0">
                <i className={`icon-${icon} size-5 mr-3 text-${Theme === 'dark' ? 'mid' : 'lighter'}`} style={{lineHeight: '1'}}></i>
            </div>
            <div className="flex-grow-1">
                <h1 className="mb-3">{heading}<br /><small className="text-muted">{subheading}</small></h1>
                <p className="lead">{content}</p>
                <ul className="ticks">
                    {list.map((l,i) => 
                        <li key={i}>{l}</li>
                    )}
                </ul>
            </div>
        </Col>
    )
}

export default IconColumn;