import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
    content: string[],
    fluid: boolean,
    icon: string,
    buttons: {
        icon: string,
        label: string,
        href: string,
        type: string
    }[]
}

function BlockQuote({content, fluid, icon, buttons}: Props) {
    return (
        <Container fluid={fluid}>
            <blockquote className="blockquote d-block d-md-flex">
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
                                        size="lg"
                                        href={b.href}
                                        className="mr-3 mt-3"
                                    >
                                        <i className={`icon-${b.icon} size-2 font-weight-normal`}></i>{b.label && ` ${b.label}`}
                                    </Button>
                                );
                            case 'link':
                                return (
                                    <Link className='btn btn-outline-primary btn-lg mr-3 mt-3' to={b.href} key={i}>
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