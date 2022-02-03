import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BlockQuote({content, fluid, icon, buttons}) {
    return (
        <Container fluid={fluid}>
            <blockquote className="blockquote d-flex">
                <div>
                    <i className={`icon-${icon}`}></i>
                </div>
                <div className="flex-grow-1">
                    {content.map( (p,i) => {
                        return ( <p key={i}>{p}</p> )
                    })}
                    {buttons && buttons.map((b,i) => {
                        switch (b.type) {
                            case 'button':
                                return (
                                    <Button
                                        key={i}
                                        variant="outline-primary"
                                        href={b.href}
                                        className="mr-3 mt-3"
                                    >
                                        <i className={`icon-${b.icon} size-2 font-weight-normal`}></i>{b.label && ` ${b.label}`}
                                    </Button>
                                );
                            case 'link':
                                return (
                                    <Link className='btn btn-outline-primary mr-3 mt-3' to={b.href} key={i}>
                                        <i className={`icon-${b.icon} size-2 font-weight-normal`}></i>{b.label && ` ${b.label}`}
                                    </Link>
                                );
                            default:
                                break;
                        }

                    })}
                </div>
            </blockquote>
        </Container>
    );
}

BlockQuote.defaultProps = {
    content: 'Wot?! No content?',
    fluid: false,
    icon: 'quote',
    buttons: false
}

export default BlockQuote;