import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, InputGroup, Form, FormControl, DropdownButton, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import { ThemeContext } from '../../App';
import ToolsNav from './ToolsNavigation';

function DownloadCalc() {
    const [fileSize, setFileSize] = useState(0);
    const [fileSizeType, setFileSizeType] = useState('MiB');
    const [bandwidth, setBandwidth] = useState(0);
    const [bandwidthType, setBandwidthType] = useState('Mbps');
    const [result, setResult] = useState(0);
    const [wittyText, setWittyText] = useState(' ');
    const [binary, setBinary] = useState(true);
    const Theme = useContext(ThemeContext);

    const formatResult = (t) => {   
        let h = ~~(t / 3600),
            m = ~~((t % 3600) / 60),
            s = ~~t % 60,
            r = '';

        if (h > 0) r += '' + h + 'h ' + (m < 10 ? '0' : '');
        if (m > 0)r += '' + m + 'm ' + (s < 10 ? '0' : '');
        r += s + 's';

        if( h === 0 && m === 0 && s === 0 ) return '<1s';
        return r;
    }

    useEffect(() => {
        let bd = 0;
        switch (bandwidthType) {
            case 'Kbps':
                bd = 1000;
                break;
            case 'Mbps':
                bd = 1000000;
                break;
            case 'Gbps':
                bd = 1000000000;
                break;
        }

        let fd = 0;
        switch (fileSizeType) {
            case 'KiB':
                fd = 1024;
                break;
            case 'MiB':
                fd = 1024000;
                break;
            case 'GiB':
                fd = 1024000000;
                break;
            case 'kB':
                fd = 1000;
                break;
            case 'mB':
                fd = 1000000;
                break;
            case 'gB':
                fd = 1000000000;
                break;
        }

        let tr = ((fileSize * fd) * 8) / (bandwidth * bd),
            wt = ' ';

        if(tr > 60 * 60 * 40) wt = 'You can\'t download Google.';
        if(tr < 60 * 60 * 40) wt = 'I hope it\'s worth it!';
        if(tr < 60 * 60 * 10) wt = 'That\'s an overnight job.';
        if(tr < 60 * 60 * 5) wt = 'You want faster? I know a guy.';
        if(tr < 60 * 60) wt = 'Time enough for that new Netflix show.';
        if(tr < 60 * 5) wt = 'Get the kettle on.';
        if(tr < 60) wt = 'Blink and you\'ll miss it!';
        if(tr < 1) wt = 'You needed to work that out?!';
        if(tr === 0) wt = ' ';

        setWittyText( wt );
        setResult( formatResult( tr ) );

    }, [fileSize, bandwidth, bandwidthType, fileSizeType]);

    useEffect(() => {
        const changeFileSizeTypeSelected = () => {
            if(fileSizeType === 'KiB' && !binary) setFileSizeType('kB');
            if(fileSizeType === 'MiB' && !binary) setFileSizeType('mB');
            if(fileSizeType === 'GiB' && !binary) setFileSizeType('gB');
            if(fileSizeType === 'kB' && binary) setFileSizeType('KiB');
            if(fileSizeType === 'mB' && binary) setFileSizeType('MiB');
            if(fileSizeType === 'gB' && binary) setFileSizeType('GiB');
        }
        
        changeFileSizeTypeSelected();
    }, [binary, fileSizeType]);

    return (
        <>
            <ToolsNav />
            <Container as="section">
                <Row xs={1} md={3}>
                    <Col>
                        <h2>File Size</h2>
                        <label htmlFor="filesize">{`Enter the filesize in ${fileSizeType}`}</label>
                        <InputGroup>
                            <FormControl
                                type="number"
                                placeholder="e.g 12.34"
                                onChange={(e) => setFileSize(e.target.value)}
                                id="filesize"
                                size="lg"
                            />
                            <DropdownButton
                                as={InputGroup.Prepend}
                                title={fileSizeType}
                                variant="outline-primary"
                                className="rounded-right"
                            >
                                {binary ? (
                                    <>
                                        <Dropdown.Item onClick={() => setFileSizeType('KiB')}>KiB</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFileSizeType('MiB')}>MiB</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFileSizeType('GiB')}>GiB</Dropdown.Item>
                                    </>
                                ) : (
                                    <>
                                        <Dropdown.Item onClick={() => setFileSizeType('kB')}>kB</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFileSizeType('mB')}>mB</Dropdown.Item>
                                        <Dropdown.Item onClick={() => setFileSizeType('gB')}>gB</Dropdown.Item>
                                    </>
                                )}
                                
                            </DropdownButton>
                        </InputGroup>
                        <div className="d-flex align-items-center mt-5">
                            <Form.Group controlId="binary-switch" className="m-0">
                                <Form.Switch 
                                    label='Use Binary?'
                                    checked={binary}
                                    onChange={() => setBinary(!binary)}
                                />
                            </Form.Group>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={
                                <Popover className={`shadow${Theme === 'dark' ? ' dark-mode' : ''}`}>
                                    <Popover.Title as="h2" className="text-capitalize p-3">File size info</Popover.Title>
                                    <Popover.Content className="p-3">
                                        A KiloByte can be describes as either 1,024 or 1,000 bytes.  Typically, this can be referred to as binary (1,024 bytes) or decimal (1,000 bytes).  By default, this tool uses 1,024 bytes to a KiloByte but you can change that.
                                    </Popover.Content>
                                </Popover>
                            }>
                                <i className="icon-info text-primary size-2 ml-auto mr-3 cursor-pointer"></i>
                                
                            </OverlayTrigger>
                        </div>
                    </Col>
                    <Col>
                        <h2>Bandwidth</h2>
                        <label htmlFor="bandwidth">{`Enter your Broadband speed in ${bandwidthType}`}</label>
                        <InputGroup>
                            <FormControl
                                type="number"
                                placeholder="e.g 98.76"
                                onChange={(e) => setBandwidth(e.target.value)}
                                id="bandwidth"
                                size="lg"
                            />
                            <DropdownButton
                                as={InputGroup.Prepend}
                                title={bandwidthType}
                                variant="outline-primary"
                            >
                                <Dropdown.Item onClick={() => setBandwidthType('Kbps')}>Kbps</Dropdown.Item>
                                <Dropdown.Item onClick={() => setBandwidthType('Mbps')}>Mbps</Dropdown.Item>
                                <Dropdown.Item onClick={() => setBandwidthType('Gbps')}>Gbps</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

                        <p className="mt-5">Don&apos;t know what your speed is?  Try an online speed test using 
                            <a 
                                href="https://www.google.com/search?q=speed+test"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-2"
                            >Google</a>
                                or 
                            <a
                                href="https://www.bing.com/search?q=speed+test"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-2"
                            >Bing</a>
                        </p>
                    </Col>
                    <Col>
                        <h2>Result</h2>
                        <p className="mb-2">{wittyText === ' ' ? '\u00A0' : wittyText}</p>
                        {!fileSize || !bandwidth ? (
                            <p className="text-muted">Enter a file size and your bandwidth to see a result.</p>

                        ) : (
                            <p className="h1 text-primary text-capitalize">{result}</p>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <small className="text-muted">Download time will be an estimate as there are <i>many</i> variables that can affect the result. Download speeds will depend on the fidelity of your connection and the quality of your hardware among other things.  Let&apos;s call it a reasonable guess.</small>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DownloadCalc;