import React, { useEffect, useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PlusMinus from '../Common/PlusMinus';
import ScrollToTop from '../Common/ScrollToTop';
import ToolsNav from './ToolsNavigation';

function Contrast(){
    const [FGR, setFGR] = useState(Math.floor((Math.random() * 50) + 1));
    const [FGG, setFGG] = useState(Math.floor((Math.random() * 50) + 1));
    const [FGB, setFGB] = useState(Math.floor((Math.random() * 50) + 1));
    const [BGR, setBGR] = useState(Math.floor(Math.random() * (255 - 200)+200));
    const [BGG, setBGG] = useState(Math.floor(Math.random() * (255 - 200)+200));
    const [BGB, setBGB] = useState(Math.floor(Math.random() * (255 - 200)+200));
    const [fgHex, setFgHex] = useState();
    const [bgHex, setBgHex] = useState();
    const [fgHSL, setFgHSL] = useState(['--','--','--']);
    const [bgHSL, setBgHSL] = useState(['--','--','--']);
    const [ratio, setRatio] = useState(' ');

    const luminance = (r, g, b) => {
        let colorArray = [r, g, b],
            colorFactor,
            i;
        for (i = 0; i < colorArray.length; i++) {
            colorFactor = colorArray[i] / 255;
            colorFactor <= 0.03928 ? colorFactor = colorFactor / 12.92 : colorFactor = Math.pow(((colorFactor + 0.055) / 1.055), 2.4);
            colorArray[i] = colorFactor;
        }
        return (colorArray[0] * 0.2126 + colorArray[1] * 0.7152 + colorArray[2] * 0.0722) + 0.05;
    }

    const getHex = (n) => {
        n = ('00' + n.toString(16)).substr(-2);
        return n; 
    }

    const getHSL = (rgb) => {
        let add,b,diff,g,h,hue,l,lum,max,min,r,s,sat;
        r = parseFloat(rgb[0]) / 255;
        g = parseFloat(rgb[1]) / 255;
        b = parseFloat(rgb[2]) / 255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        diff = max - min;
        add = max + min;
        hue = min === max ? 0 : r === max ? ((60 * (g - b) / diff) + 360) % 360 : g === max ? (60 * (b - r) / diff) + 120 : (60 * (r - g) / diff) + 240;
        lum = 0.5 * add;
        sat = lum === 0 ? 0 : lum === 1 ? 1 : lum <= 0.5 ? diff / add : diff / (2 - add);
        h = Math.round(hue);
        s = Math.round(sat * 100);
        l = Math.round(lum * 100);
        return [h, s, l];
    }

    const randomRoll = (set) => {
        let doSet = set || 'all';
        if(doSet === 'all' || doSet === 'fg') setFGR( Math.floor(Math.random() * 255) + 1 );
        if(doSet === 'all' || doSet === 'fg') setFGG( Math.floor(Math.random() * 255) + 1 );
        if(doSet === 'all' || doSet === 'fg') setFGB( Math.floor(Math.random() * 255) + 1 );
        if(doSet === 'all' || doSet === 'bg') setBGR( Math.floor(Math.random() * 255) + 1 );
        if(doSet === 'all' || doSet === 'bg') setBGG( Math.floor(Math.random() * 255) + 1 );
        if(doSet === 'all' || doSet === 'bg') setBGB( Math.floor(Math.random() * 255) + 1 );
    }

    useEffect(() => {
        let a,b,c,result;
        a = luminance(FGR, FGG, FGB);
        b = luminance(BGR, BGG, BGB);
        if(a < b){
            c = a;
            a = b;
            b = c;
        }
        result = a / b;
        setRatio(+(Math.round(result + 'e+' + 1)  + 'e-' + 1));
        setFgHex(`#${getHex(parseInt(FGR, 10))}${getHex(parseInt(FGG, 10))}${getHex(parseInt(FGB, 10))}`);
        setBgHex(`#${getHex(parseInt(BGR, 10))}${getHex(parseInt(BGG, 10))}${getHex(parseInt(BGB, 10))}`);
        setFgHSL(getHSL([FGR, FGG, FGB]));
        setBgHSL(getHSL([BGR, BGR, BGR]));
    }, [BGB, BGG, BGR, FGB, FGG, FGR]);

    return (
        <>
            <ScrollToTop />
            <ToolsNav />
            <Container as="section" className="contrast">
                <Row xs={1} lg={3}>
                    <Col className="d-flex flex-column mb-5 mb-lg-0">
                        <h2 className="mb-5">
                            <span
                                className="circle"
                                style={{background: 'rgb(' + FGR + ',' + FGG + ',' + FGB + ')'}}
                            ></span>
                            Foreground
                            <Button
                                onClick={(e) => randomRoll('fg',e)}
                                variant="outline-primary"
                                className="float-right p-1 mr-2"
                                aria-label="Shuffle"
                            ><i className="icon-shuffle size-2 font-weight-normal"></i></Button>
                        </h2>

                        <Form.Group controlId="fgr-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">R</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setFGR(parseInt(e.target.value, 10))}
                                value={FGR}
                            />
                            <PlusMinus theState={FGR} theSetter={setFGR} icon="minus" theLabel="Decrease Red value" />
                            <span className="rgb-label">{FGR}</span>
                            <PlusMinus theState={FGR} theSetter={setFGR} icon="add" theLabel="Increase Red value" />
                        </Form.Group>
                        <Form.Group controlId="fgg-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">G</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setFGG(parseInt(e.target.value, 10))}
                                value={FGG}
                            />
                            <PlusMinus theState={FGG} theSetter={setFGG} icon="minus" theLabel="Decrease Green value" />
                            <span className="rgb-label">{FGG}</span>
                            <PlusMinus theState={FGG} theSetter={setFGG} icon="add" theLabel="Increase Green value" />
                        </Form.Group>
                        <Form.Group controlId="fgb-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">B</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setFGB(parseInt(e.target.value, 10))}
                                value={FGB}
                            />
                            <PlusMinus theState={FGB} theSetter={setFGB} icon="minus" theLabel="Decrease Blue value" />
                            <span className="rgb-label">{FGB}</span>
                            <PlusMinus theState={FGB} theSetter={setFGB} icon="add" theLabel="Increase Blue value" />
                        </Form.Group>
                        <code className="d-block mt-5 mt-lg-auto">
                            HEX&nbsp;&nbsp;: {fgHex}<br />
                            RGB&nbsp;&nbsp;: rgb({FGR}, {FGG}, {FGB})<br />
                            RGB%&nbsp;: rgb({((100 * FGR) / 255).toFixed(1)}%, {((100 * FGG) / 255).toFixed(1)}%, {((100 * FGB) / 255).toFixed(1)}%)<br />
                            HSL&nbsp;&nbsp;: hsl({fgHSL[0]}, {fgHSL[1]}%, {fgHSL[2]}%)
                        </code>
                    </Col>
                    <Col className="d-flex flex-column mb-5 mb-lg-0">
                        <h2 className="mb-5">
                            <span
                                className='circle'
                                style={{background: 'rgb(' + BGR + ',' + BGG + ',' + BGB + ')'}}
                            ></span>
                            Background
                            <Button
                                onClick={() => randomRoll('bg')}
                                variant="outline-primary"
                                className="float-right p-1 mr-2"
                                aria-label="Shuffle"
                            ><i className="icon-shuffle size-2 font-weight-normal"></i></Button>
                        </h2>

                        <Form.Group controlId="bgr-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">R</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setBGR(parseInt(e.target.value, 10))}
                                value={BGR}
                            />
                            <PlusMinus theState={BGR} theSetter={setBGR} icon="minus" theLabel="Decrease Red value" />
                            <span className="rgb-label">{BGR}</span>
                            <PlusMinus theState={BGR} theSetter={setBGR} icon="add" theLabel="Increase Red value" />
                        </Form.Group>
                        <Form.Group controlId="bgg-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">G</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setBGG(parseInt(e.target.value, 10))}
                                value={BGG}
                            />
                            <PlusMinus theState={BGG} theSetter={setBGG} icon="minus" theLabel="Decrease Green value" />
                            <span className="rgb-label">{BGG}</span>
                            <PlusMinus theState={BGG} theSetter={setBGG} icon="add" theLabel="Increase Green value" />
                        </Form.Group>
                        <Form.Group controlId="bgb-range" className="d-flex align-items-center">
                            <Form.Label className="m-0 mr-3">B</Form.Label>
                            <Form.Control
                                type="range"
                                min="0"
                                max="255"
                                step="1"
                                variant="primary"
                                onChange={(e) => setBGB(parseInt(e.target.value, 10))}
                                value={BGB}
                            />
                            <PlusMinus theState={BGB} theSetter={setBGB} icon="minus" theLabel="Decrease Blue value" />
                            <span className="rgb-label">{BGB}</span>
                            <PlusMinus theState={BGB} theSetter={setBGB} icon="add" theLabel="Increase Blue value" />
                        </Form.Group>
                        <code className="d-block mt-5 mt-lg-auto">
                            HEX&nbsp;&nbsp;: {bgHex}<br />
                            RGB&nbsp;&nbsp;: rgb({BGR}, {BGG}, {BGB})<br />
                            RGB%&nbsp;: rgb({((100 * BGR) / 255).toFixed(1)}%, {((100 * BGG) / 255).toFixed(1)}%, {((100 * BGB) / 255).toFixed(1)}%)<br />
                            HSL&nbsp;&nbsp;: hsl({bgHSL[0]}, {bgHSL[1]}%, {bgHSL[2]}%)
                        </code>
                    </Col>
                    <Col>
                        <h2 className="mb-5">Result</h2>
                        <p className="h1 text-primary text-capitalize">{ratio} : 1</p>

                        <table className="w-100">
                            <thead>
                                <tr>
                                    <th>WCAG Level</th>
                                    <th className="text-center">Small text</th>
                                    <th className="text-center">Large text</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>AA</td>
                                    <td className="text-center">
                                        <i className={`icon-${ratio >= 4.5 ? 'tick-circle text-success' : 'attention text-warning'} size-2`}></i>
                                    </td>
                                    <td className="text-center">
                                        <i className={`icon-${ratio >= 3 ? 'tick-circle text-success' : 'attention text-warning'} size-2`}></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>AAA</td>
                                    <td className="text-center">
                                        <i className={`icon-${ratio >= 7 ? 'tick-circle text-success' : 'attention text-warning'} size-2`}></i>
                                    </td>
                                    <td className="text-center">
                                        <i className={`icon-${ratio >= 4.5 ? 'tick-circle text-success' : 'attention text-warning'} size-2`}></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="p-3 rounded mt-5" style={{
                            height: '120px',
                            background: 'rgb(' + BGR + ',' + BGG + ',' + BGB + ')',
                            color: 'rgb(' + FGR + ',' + FGG + ',' + FGB + ')'
                        }}>
                            <p className="h4">Sample Heading</p>
                            <p className="m-0"><small>The quick brown fox jumps over the lazy dog.</small></p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Contrast;