import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row, Form, OverlayTrigger, Popover } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '../../App';
import ScrollToTop from '../Common/ScrollToTop';
import PasswordGenerator from './PasswordGenerator';
import ToolsNav from './ToolsNavigation';

function PasswordEntropy() {
    const [password, setPassword] = useState('');
    const [result, setResult] = useState(0);
    const [charSet, setCharSet] = useState(0);
    const [wittyText, setWittyText] = useState(' ');
    const [includes, setIncludes] = useState({
        lower: null,
        upper: null,
        num: null,
        csymb: null,
        osymb: null
    });
    const Theme = useContext(ThemeContext);

    const calcEntropy = (len, chars , pw) => {
        const crap = ['123456','123456789','picture1','password','12345678','111111','123123','12345','1234567890','senha','1234567','qwerty','abc123','Million2','000000','1234','iloveyou','aaron431','password1','qqww1122'];

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

        if(/[a-z]/.test(password)) chars = chars + 26;
        if(/[A-Z]/.test(password)) chars = chars + 26;
        if(/[0-9]/.test(password)) chars = chars + 10;
        if(/[!"£$%^&*()]/.test(password)) chars = chars + 10;
        if(/[`¬\-=_+[\]{};'#:@~,./<>?\\|]/.test(password)) chars = chars + 23;

        ret = calcEntropy(password.length, chars, password);

        setIncludes({
            lower:  /[a-z]/.test(password),
            upper:  /[A-Z]/.test(password),
            num:    /[0-9]/.test(password),
            csymb:  /[!"£$%^&*()]/.test(password),
            osymb:  /[`¬\-=_+[\]{};'#:@~,./<>?\\|]/.test(password)
        });
        
        if(password.length < 1) {
            setIncludes({
                lower: null,
                upper: null,
                num: null,
                csymb: null,
                osymb: null
            });
        }

        setResult(ret.res);
        setWittyText(ret.strength)
        setCharSet(chars);

    }, [password]);

    const charIcon = (v) => {
        if(v === null) return 'double-dash text-mid';
        if(v === true) return 'tick-circle text-success';
        return 'attention text-warning';
    }

    return (
        <>
            <Helmet>
                <title>Password Entropy Calculator by Tim Cutting - Web Developer, Colchester.</title>
                <meta name="description" content="Get help using better, stronger passwords and check your existing passwords strength and resiliance to brute force attacks.  Use this Password Strength Test to see how your passwords perform." />
            </Helmet>
            <ScrollToTop />
            <ToolsNav />
            <Container as="section">
                <Row xs={1} lg={3}>
                    <Col>
                        <h2>Type a Password</h2>
                        <Form.Group controlId="password">
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
                        <p className="text-muted">Start typing a password to see its entropy score and related insights.</p>
                    </Col>
                    <Col>
                        <h2 className="mb-3">
                            <span className="d-flex align-items-center">
                                &nbsp;
                                <OverlayTrigger trigger="click" placement="bottom" overlay={
                                    <Popover className={`shadow${Theme === 'dark' ? ' dark-mode' : ''}`}>
                                        <Popover.Title as="h2" className="text-capitalize p-3">Character Set</Popover.Title>
                                        <Popover.Content className="p-3">
                                            These numbers indicate the total character set based on the types of characters used in the password.  Use a range of characters to increase the subset of characters, which in turn increases the calculated entropy.
                                        </Popover.Content>
                                    </Popover>
                                }>
                                    <i className="icon-info text-primary size-2 cursor-pointer ml-auto mr-5"></i>           
                                </OverlayTrigger>
                            </span>
                        </h2>
                        
                        <p className="mb-2">
                            <i className={`icon-${charIcon(includes.lower)} mr-2`}></i>
                            Lowercase Letters
                            <small className="text-muted float-right mt-1 mr-5">26 chars</small>
                        </p>
                        <p className="mb-2">
                            <i className={`icon-${charIcon(includes.upper)} mr-2`}></i>
                            Uppercase Letters
                            <small className="text-muted float-right mt-1 mr-5">26 chars</small>
                        </p>
                        <p className="mb-2">
                            <i className={`icon-${charIcon(includes.num)} mr-2`}></i>
                            Numbers
                            <small className="text-muted float-right mt-1 mr-5">10 chars</small>
                        </p>
                        <p className="mb-2">
                            <i className={`icon-${charIcon(includes.csymb)} mr-2`}></i>
                            Shift + <kbd>[0-9]</kbd> Symbols
                            <small className="text-muted float-right mt-1 mr-5">10 chars</small>
                        </p>
                        <p className="mb-2">
                            <i className={`icon-${charIcon(includes.osymb)} mr-2`}></i>
                            Other Symbols
                            <small className="text-muted float-right mt-1 mr-5">23 chars</small>
                        </p>
                        <p>
                            <small className="text-muted float-right mt-1 mr-5">Total {charSet} chars</small>
                        </p>
                    </Col>
                    <Col>
                        <h2>Result</h2>
                        <p className="mb-2">{result === '💩' ? 'This password is too common' : (wittyText === ' ' ? '\u00A0' : wittyText)}</p>
                        {password.length !== 0 ? (
                            <p className="h1 text-primary text-capitalize">
                                {result === '💩' ? result : `~${result} Bits`}
                            </p>
                        ) : (
                            <>
                                <p className="h1 text-mid text-capitalize">
                                    <i className="icon-double-dash"></i> Bits
                                </p>
                                <small className="text-muted">Start typing to see the entropy score</small>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
            <PasswordGenerator />
            <Container as="section">
                <Row>
                    <Col>
                        <small className="text-muted">This entropy calculator and password generator are intended as a proof-of-concept and should be used in conjunction with best advice from a security professional.  You are responsible for protecting your passwords and use of these tools is no guarantee of accuracy or safety online.  Use at your own risk.</small>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PasswordEntropy;