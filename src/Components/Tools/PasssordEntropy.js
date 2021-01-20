import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import ScrollToTop from '../Common/ScrollToTop';
import ToolsNav from './ToolsNavigation';

function PasswordEntropy() {

    const [alhpaLower, setAlphaLower] = useState(true);
    const [alhpaUpper, setAlphaUpper] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [numberSymbols, setNumberSymbols] = useState(true);
    const [otherSymbols, setOtherSymbols] = useState(true);
    const [password, setPassword] = useState('');
    const [result, setResult] = useState(0);
    const [charSet, setCharSet] = useState(0);
    const [wittyText, setWittyText] = useState(' ');
    const Theme = useContext(ThemeContext);

    const calcEntropy = (len, chars , pw) => {
        const crap = [
            '123456',
            '123456789',
            'picture1',
            'password',
            '12345678',
            '111111',
            '123123',
            '12345',
            '1234567890',
            'senha',
            '1234567',
            'qwerty',
            'abc123',
            'Million2',
            '000000',
            '1234',
            'iloveyou',
            'aaron431',
            'password1',
            'qqww1122'
        ];

        let bits = parseInt(Math.log2(Math.pow(chars, len)), 10),
            txt = 'So very, very bad';

        if(bits > 29) txt = 'Not good enough';
        if(bits > 39) txt = 'You could do better';
        if(bits > 59) txt = 'That\'ll do nicely!';
        if(bits > 79) txt = 'Good luck cracking that, H4x0r';
        if(bits > 127) txt = 'The NSA is scared of you!';
        if(bits === 0) txt = ' ';

        if(crap.includes(pw)) return {res: '💩', strength: 'Do you even care?'};
        return {res: bits, strength: txt};
    }

    useEffect(() => {
        let chars = 0,
            ret;
        if(alhpaLower) chars = chars + 26;
        if(alhpaUpper) chars = chars + 26;
        if(numbers) chars = chars + 10;
        if(numberSymbols) chars = chars + 10;
        if(otherSymbols) chars = chars + 23;

        ret = calcEntropy(password.length, chars, password);

        setResult(ret.res);
        setWittyText(ret.strength)
        setCharSet(chars);

    }, [alhpaLower, alhpaUpper, numberSymbols, numbers, otherSymbols, password]);

    return (
        <>
            <ScrollToTop />
            <ToolsNav />
            <Container as="section">
                <Row xs={1} lg={3}>
                    <Col>
                        <h2 className="mb-3">
                            <span className="d-flex align-items-center">
                                 Character Set
                                <small className="text-muted ml-2">{charSet}</small>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={
                                    <Popover className={`shadow${Theme === 'dark' ? ' dark-mode' : ''}`}>
                                        <Popover.Title as="h2" className="text-capitalize p-3">Character Set</Popover.Title>
                                        <Popover.Content className="p-3">
                                    Sometimes you will have rules imposed on you about which characters you can use.  Usually these are upper and lowercase letters, numbers and some symobls.  You can choose to limit the character set with these options to better reflect the strength of the password.
                                        </Popover.Content>
                                    </Popover>
                                }>
                                    <i className="icon-info text-primary size-2 cursor-pointer ml-auto"></i>           
                                </OverlayTrigger>
                            </span>
                           
                        </h2>
                        <div className="d-flex align-items-start mt-4">
                            <div>
                                <Form.Group controlId="al-switch" className="m-0">
                                    <Form.Switch 
                                        label="Lowercase Letters"
                                        checked={alhpaLower}
                                        onChange={() => setAlphaLower(!alhpaLower)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="au-switch" className="m-0">
                                    <Form.Switch 
                                        label="Uppercase Letters"
                                        checked={alhpaUpper}
                                        onChange={() => setAlphaUpper(!alhpaUpper)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="n-switch" className="m-0">
                                    <Form.Switch 
                                        label="Numbers"
                                        checked={numbers}
                                        onChange={() => setNumbers(!numbers)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="ns-switch" className="m-0">
                                    <Form.Switch 
                                        label="Number Symbols"
                                        checked={numberSymbols}
                                        onChange={() => setNumberSymbols(!numberSymbols)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="os-switch" className="m-0">
                                    <Form.Switch 
                                        label="Other Symbols"
                                        checked={otherSymbols}
                                        onChange={() => setOtherSymbols(!otherSymbols)}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                     
                    </Col>
                    <Col>
                        <h2>Password</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter a password example</Form.Label>
                            <Form.Control
                                type="password"
                                size="lg"
                                placeholder="e.g M3m3L0rd!"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                            This will not be sent anywhere.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <h2>Result</h2>
                        <p className="mb-2">{result === '💩' ? 'This password is too common' : (wittyText === ' ' ? '\u00A0' : wittyText)}</p>
                        {password.length === 0 ? (
                            <p className="text-muted">Enter a password to see a result.</p>
                        ) : (
                            <p className="h1 text-primary text-capitalize">
                                {result === '💩' ? result : `~${result} Bits`}
                            </p>
                        )}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <small className="text-muted">This calculator is intended as a proof-of-concept and should be used in conjuction with best advice from a security professional.  You are responbible for protecting your passwords and use of this tool is no guarantee of accuracy.  Use at your own risk.</small>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PasswordEntropy;