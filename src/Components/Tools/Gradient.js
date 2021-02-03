import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup, FormLabel, FormControl, Accordion, Button } from 'react-bootstrap';
import ScrollToTop from '../Common/ScrollToTop';
import ToolsNav from './ToolsNavigation';
import { DefaultGradient, newLayer, newColourStop } from '../../Data/Gradients';

function Gradient() {
    const [bgCSS, setBgCSS] = useState('');
    const [currentLayer, setCurrentLayer] = useState(1);
    const [layers, setLayers] = useState(DefaultGradient);

    useEffect(() => {
        let temp = '';
        layers.filter(layer => layer.visible === true).map((layer, li, a) => {
            let lastColour = Object.keys(layer.colours).length - 1;
            temp += 'linear-gradient(' + layer.angle + 'deg, ';
            layer.colours.map((colour, ci) => {
                temp += 'rgba(' + colour.r + ', ' + colour.g + ', ' + colour.b + ', ' + colour.a + ') ' + colour.p + '%';
                temp += (lastColour === ci) ? ')' : ', ';
            });
            temp += ((a.length - 1) === li) ? ';' : ', ';

        });
        setBgCSS(temp);
    }, [layers]);

    const setAngle = (value, layer) => {
        let newState = [...layers];
        newState[layer].angle = value;
        setLayers(newState);
    }

    const setColour = (colour, value, layer, stop) => {
        let newState = [...layers];
        newState[layer].colours[stop][colour] = value;
        setLayers(newState);
    }

    const setAlpha = (value, layer, stop) => {
        let newState = [...layers];
        newState[layer].colours[stop].a = value;
        setLayers(newState);
    }

    const setPosition = (value, layer, stop) => {
        let newState = [...layers];
        newState[layer].colours[stop].p = value;
        setLayers(newState);
    }

    const addLayer = () => {
        let newState = [...layers];
        newState.push(newLayer);
        setLayers(newState);
    }

    const deleteLayer = (index) => {
        let newState = [...layers];
        newState.splice(index, 1);
        setCurrentLayer(1);
        setLayers(newState);
    }

    const addColourStop = (index) => {
        let newState = [...layers];
        newState[index].colours.push(newColourStop);
        setLayers(newState);
    }

    const deleteColourStop = (layer, stop) => {
        let newState = [...layers];
        newState[layer].colours.splice(stop, 1);
        setLayers(newState);
    }

    const setLayerVisiblity = (layer, value) => {
        let newState = [...layers];
        newState[layer].visible = value;
        //setCurrentLayer(layer + 1);
        setLayers(newState);
    }

    document.title = 'CSS Gradient Generator - Easily create multi-layer CSS gradients';

    return (
        <>
            <ScrollToTop />
            <ToolsNav />
            <Container className="p-0 mt-3 rounded" style={{backgroundColor: 'white', backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc),linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)', backgroundSize: '2rem 2rem', backgroundPosition: '0 0, 1rem 1rem', overflow: 'hidden'}}>
                <Container fluid style={{backgroundImage: bgCSS.replace(';',''), height: '20vw', maxHeight: '570px'}}></Container>
            </Container>
            
            <Container as="section">
                <Row>
                    <Col xs={12} lg={4} className="pr-lg-5 pl-lg-0">
                        <div className="d-flex align-items-center mb-5">
                            <div className="flex-grow-1">
                                <h2 className="m-0">Layers</h2>
                            </div>
                            <div className="flex-grow-0">
                                <Button
                                    variant="outline-primary"
                                    onClick={addLayer}
                                    className="py-1 px-3"
                                    size="sm"
                                >Add Layer</Button>
                            </div>
                        </div>
                        <Accordion defaultActiveKey={1} className="mb-5">
                            {layers.map((layer, i) => {
                                return (
                                    <div key={i}>

                                        <div className={`d-flex align-items-center accordion-toggle${currentLayer === i+1 ? ' active ' : ' '}`}>
                                            <div className="flex-grow-1">
                                                <Accordion.Toggle
                                                    eventKey={i+1}
                                                    as="div"
                                                    className={`${currentLayer === i+1 ? ' active ' : ' '}cursor-pointer`}
                                                    onClick={() => setCurrentLayer(i+1)}
                                                ><p className="h3 m-0">Layer {i+1}</p>
                                                </Accordion.Toggle>
                                            </div>
                                            <div className="flex-grow-0">
                                                {i !== 0 && (
                                                    <button
                                                        className="colour-adjust mx-3"
                                                        aria-label="Delete Layer"
                                                        onClick={() => deleteLayer(i)}
                                                    >
                                                        <i className="icon-delete size-2 font-weight-normal"></i>
                                                    </button>
                                                )}
                                            </div>
                                            <div className="flex-grow-0">
                                                <button
                                                    className="colour-adjust mx-3"
                                                    aria-label="Delete Layer"
                                                    onClick={() => setLayerVisiblity(i, !layer.visible)}
                                                >
                                                    <i className={`icon-${layer.visible ? 'show' : 'hide'} size-2 font-weight-normal`}></i>
                                                </button>
                                            </div>
                                        </div>

                                        <Accordion.Collapse eventKey={i+1}>
                                            <FormGroup controlId={`angle-${i+1}`} className="d-flex align-items-center m-0">
                                                <FormLabel className="m-0 mr-2">Angle</FormLabel>
                                                <FormControl
                                                    type="range"
                                                    min="0"
                                                    max="360"
                                                    step="1"
                                                    variant="primary"
                                                    onChange={(e) => setAngle(parseInt(e.target.value, 10), i)}
                                                    value={layer.angle}
                                                />

                                                <button
                                                    className="colour-adjust mx-2"
                                                    disabled={layer.angle === 0}
                                                    onClick={() => setAngle(parseInt(layer.angle - 1, 10), i)}
                                                    aria-label="Lower Angle"
                                                >
                                                    <i className="icon-minus size-2"></i>
                                                </button>

                                                <span className="range-label">{layer.angle}</span>
                                                <button
                                                    className="colour-adjust mx-2"
                                                    disabled={layer.angle === 360}
                                                    onClick={() => setAngle(parseInt(layer.angle + 1, 10), i)}
                                                    aria-label="Increase Angle"
                                                >
                                                    <i className="icon-add size-2"></i>
                                                </button>
                                            </FormGroup>
                                        </Accordion.Collapse>
                                    </div>
                                )
                            })}
                        </Accordion>
                        <h2>CSS Code</h2>
                        <pre className="mt-5 mt-lg-auto text-warning bg-darker rounded p-3" style={{whiteSpace: 'pre-line'}}>
                            background-image: {bgCSS}
                        </pre>
                        <p className="text-muted">CSS excludes hidden layers.</p>
                    </Col>
                    <Col xs={12} lg={8} className="pl-lg-5 pr-lg-0">
                        <div className="d-flex align-items-center mb-5">
                            <div className="flex-grow-1">
                                <h2 className="m-0">Layer {currentLayer} Stops</h2>
                            </div>
                            <div className="flex-grow-0">
                                <Button
                                    variant="outline-primary"
                                    onClick={() => addColourStop(currentLayer - 1)}
                                    className="py-1 px-3"
                                    size="sm"
                                >Add Colour Stop</Button>
                            </div>
                        </div>
                        
                        <Row xs={1} lg={2}>
                            {layers[currentLayer - 1]['colours'].map((c, i, a) => {
                                return (
                                    <Col key={i} className="mb-5">

                                        <div className="d-flex align-items-center mb-5">
                                            <div className="flex-grow-1">
                                                <h3 className="m-0">
                                                    <span
                                                        className="colour-circle"
                                                        style={{backgroundColor: `rgb(${c.r},${c.g},${c.b})`}}
                                                    ></span> Colour {i+1}
                                                </h3>
                                            </div>
                                            <div className="flex-grow-0">
                                                <button
                                                    className="colour-adjust mx-2"
                                                    disabled={a.length === 2}
                                                    onClick={() => deleteColourStop(currentLayer - 1, i)}
                                                    aria-label="Delete Colour Stop"
                                                ><i className="icon-delete size-2 font-weight-normal"></i></button>
                                            </div>
                                        </div>
                                        <FormGroup controlId={`cr-${currentLayer - 1}`} className="d-flex align-items-center">
                                            <FormLabel className="m-0 mr-3">R</FormLabel>
                                            <FormControl
                                                type="range"
                                                min="0"
                                                max="255"
                                                step="1"
                                                variant="primary"
                                                onChange={(e) => setColour('r', parseInt(e.target.value, 10), currentLayer - 1, i)}
                                                value={c.r}
                                            />
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.r === 0}
                                                onClick={() => setColour('r', parseInt(c.r - 1, 10), currentLayer - 1, i)}
                                                aria-label="Lower Red"
                                            >
                                                <i className="icon-minus size-2"></i>
                                            </button>
                                            <span className="range-label">{c.r}</span>
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.r === 255}
                                                onClick={() => setColour('r', parseInt(c.r + 1, 10), currentLayer - 1, i)}
                                                aria-label="Increase Red"
                                            >
                                                <i className="icon-add size-2"></i>
                                            </button>
                                        </FormGroup>

                                        <FormGroup controlId={`cg-${currentLayer - 1}`} className="d-flex align-items-center">
                                            <FormLabel className="m-0 mr-3">G</FormLabel>
                                            <FormControl
                                                type="range"
                                                min="0"
                                                max="255"
                                                step="1"
                                                variant="primary"
                                                onChange={(e) => setColour('g', parseInt(e.target.value, 10), currentLayer - 1, i)}
                                                value={c.g}
                                            />
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.g === 0}
                                                onClick={() => setColour('g', parseInt(c.g - 1, 10), currentLayer - 1, i)}
                                                aria-label="Lower Green"
                                            >
                                                <i className="icon-minus size-2"></i>
                                            </button>
                                            <span className="range-label">{c.g}</span>
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.g === 255}
                                                onClick={() => setColour('g', parseInt(c.g + 1, 10), currentLayer - 1, i)}
                                                aria-label="Increase Green"
                                            >
                                                <i className="icon-add size-2"></i>
                                            </button>
                                        </FormGroup>

                                        <FormGroup controlId={`cb-${currentLayer - 1}`} className="d-flex align-items-center">
                                            <FormLabel className="m-0 mr-3">B</FormLabel>
                                            <FormControl
                                                type="range"
                                                min="0"
                                                max="255"
                                                step="1"
                                                variant="primary"
                                                onChange={(e) => setColour('b', parseInt(e.target.value, 10), currentLayer - 1, i)}
                                                value={c.b}
                                            />
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.b === 0}
                                                onClick={() => setColour('b', parseInt(c.b - 1, 10), currentLayer - 1, i)}
                                                aria-label="Lower Blue"
                                            >
                                                <i className="icon-minus size-2"></i>
                                            </button>
                                            <span className="range-label">{c.b}</span>
                                            <button
                                                className="colour-adjust mx-2"
                                                disabled={c.b === 255}
                                                onClick={() => setColour('b', parseInt(c.b + 1, 10), currentLayer - 1, i)}
                                                aria-label="Increase Blue"
                                            >
                                                <i className="icon-add size-2"></i>
                                            </button>
                                        </FormGroup>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <FormLabel>Alpha</FormLabel>
                                                    <FormControl
                                                        type="number"
                                                        pattern="^\d*(\.\d{0,2})?$"
                                                        min="0"
                                                        max="1"
                                                        step=".01"
                                                        onChange={(e) => setAlpha(Number(e.target.value), currentLayer - 1, i)}
                                                        value={c.a}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <FormLabel>Position</FormLabel>
                                                    <FormControl
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        step="1"
                                                        onChange={(e) => setPosition(Number(e.target.value), currentLayer - 1, i)}
                                                        value={c.p}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            <Container as="section">
                <h1 className="mb-3">CSS Gradient Generator</h1>
                <p>Build a multi-layer CSS gradient easily with this generator.  Modify the layers gradient angle and set colour stops, you can set the visibility of each layer to make it easier to see what is going on with individual layers.  When you&apos;re finished, simply copy the CSS and apply it to your elements.  I would welcome feedback, send me a message using the <a href="#contact-form">contact form</a> below.</p>
            </Container>
        </>
        
    );
}

export default Gradient;