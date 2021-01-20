import React from 'react'
import { Button, Container } from 'react-bootstrap';

function BlockQuote({content, fluid, icon, buttons}) {
    console.info('x', buttons.length);
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
                        return (
                            <Button
                                key={i}
                                variant="outline-primary"
                                href={b.href}
                                className="mr-3 mt-3"
                            >
                                <i className={`icon-${b.icon} size-2 font-weight-normal`}></i>{b.label && ` ${b.label}`}
                            </Button>
                        )}
                    )}
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