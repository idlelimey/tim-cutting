import { useEffect, useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../Common/ScrollToTop';
import ToolsNav from './ToolsNavigation';

function YourWeightIn() {
    if( !sessionStorage.getItem('commodityData') ){
        fetch('https://openexchangerates.org/api/latest.json?app_id=046f4efc9ec34337a2112b7eb9e31dd8&show_alternative=true&symbols=GBP,BTC,ETH,XAG,XAU,XPD,XPT')
            .then(response => response.text())
            .then(result => {
                sessionStorage.setItem('commodityData', result);
                setCommodityData(JSON.parse(result));
            })
            .catch(error => console.error('error', error));
    }

    const weights = (input, type) => {
        let output = {
            kg: 0,
            lb: 0,
            st: 0,
            gr: 0
        };
        if(type === 'kg') {
            output.kg = input;
            output.lb = +(input * 2.20462262).toFixed(2);
            output.st = +(output.lb / 14).toFixed(2);
            output.gr = +(input * 1000).toFixed(2);
        } else if (type === 'lb') {
            output.lb = input;
            output.kg = +(input / 2.20462262).toFixed(2);
            output.st = +(output.lb / 14).toFixed(2);
            output.gr = +(output.kg * 1000).toFixed(2);
        } else if (type === 'st') {
            output.st = input;
            output.lb = +(input * 14).toFixed(2);
            output.kg = +(output.lb / 2.20462262).toFixed(2);
            output.gr = +(output.kg * 1000).toFixed(2);
        }
        return output;
    }

    const [weightType, setWeightType] = useState('kg');
    const [weight, setWeight] = useState(0);
    const [weightData, setWeightData] = useState(weights(0, 'kg'));
    const [commodity, setCommodity] = useState('XAU');
    const [commodityData, setCommodityData] = useState({rates: {
        'BTC': 0,
        'ETH': 0,
        'GBP': 0,
        'XAG': 0,
        'XAU': 0,
        'XPD': 0,
        'XPT': 0
    }});
    const [prices, setPrices] = useState();
    const [currency, setCurrency] = useState('BTC');

    const currencyTable = {
        'USD': {
            symbol:'$',
            name: 'US Dollar'
        },
        'GBP': {
            symbol: '£',
            name: 'British Pound'
        },
        'BTC': {
            symbol: '₿',
            name: 'Bitcoin'
        },
        'ETH': {
            symbol: 'Ξ',
            name: 'Etherium'
        }
    };

    const commodityTable = {
        'XAU': 'Gold',
        'XAG': 'Silver',
        'XPT': 'Platinum',
        'XPD': 'Paladium'
    };

    useEffect(() => {
        setWeightData(weights(weight, weightType));
    }, [weight, weightType]);

    useEffect(() => {
        let ozType = 28.3495231;
        let output = {
            USD: 0,
            GBP: 0,
            BTC: 0,
            ETH: 0
        };

        if (commodity === 'XAU' || commodity === 'XAG') ozType = 31.1034768;
        output.USD = (1 / commodityData.rates[commodity]) / ozType,
        output.GBP = (commodityData.rates.GBP / commodityData.rates[commodity]) / ozType,
        output.BTC = (commodityData.rates.BTC / commodityData.rates[commodity]) / ozType,
        output.ETH = (commodityData.rates.ETH / commodityData.rates[commodity]) / ozType
        setPrices(output);
    }, [weightData, commodity, commodityData.rates]);

    return (
        <>
            <Helmet>
                <title>Your Weight In Gold by Tim Cutting - Web Developer, Colchester.</title>
                <meta name="description" content="BMI? That means Bitcoin-Mass-Index, right?! We've all heard the saying &quot;worth your weight in Gold&quot;, but just what is that worth? Now you can find out using up to date pricing data and multiple currencies and commoditites." />
            </Helmet>
            <ScrollToTop />
            <ToolsNav />
            <Container as="section">
                <Row xs={1} lg={3}>
                    <Col>
                        <h2>Weight</h2>
                        <label htmlFor="bandwidth">{`Enter your weight in ${weightType}`}</label>
                        <InputGroup>
                            <FormControl
                                type="number"
                                placeholder="e.g 98.76"
                                onChange={(e) => setWeight(+(e.target.value))}
                                id="bandwidth"
                                size="lg"
                            />
                            <DropdownButton
                                as={InputGroup.Append}
                                title={weightType}
                                variant="outline-primary"
                                id="bw-dd"
                            >
                                <Dropdown.Item onClick={() => setWeightType('kg')}>Kilograms</Dropdown.Item>
                                <Dropdown.Item onClick={() => setWeightType('lb')}>Pounds</Dropdown.Item>
                                <Dropdown.Item onClick={() => setWeightType('st')}>Stone</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            This will not be shared.
                        </Form.Text>
                    </Col>
                    <Col>
                        <h2>Commodity</h2>
                        <Form.Group controlId="commodity">
                            <Form.Label>Choose a precious metal</Form.Label>
                            <Form.Control as="select" size="lg" onChange={(e) => setCommodity(e.target.value)}>
                                <option className="py-3" value="XAU">Gold</option>
                                <option className="py-3" value="XAG">Silver</option>
                                <option className="py-3" value="XPT">Platinum</option>
                                <option className="py-3" value="XPD">Paladium</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <h2>Result</h2>
                        <label htmlFor="bandwidth">&nbsp;</label>
                        <Row>
                            <Col xs={{span: true}}>
                                {weight === 0 ? (
                                    <p className="h2 text-dark text-capitalize">£-.--</p>
                                        
                                ) : (
                                    <p className="h2 text-primary text-capitalize">
                                        {`${currencyTable[currency].symbol}${(+(prices[currency] * weightData.gr).toFixed(2)).  toLocaleString('en', {minimumFractionDigits: 2})}`}
                                    </p>
                                )}
                                
                            </Col>
                            <Col xs={'auto'}>
                                <DropdownButton variant="outline-primary py-2" title={currency} as={InputGroup.Prepend}>
                                    {Object.keys(currencyTable).map((item) => (
                                        <Dropdown.Item key={item} onClick={() => setCurrency(item)}>{currencyTable[item].name}</    Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </Col>
                            {weight === 0 && (
                                <small className="text-muted">Enter your weight to see how much you&apos;re worth in {commodityTable[commodity]}</small>
                            )}
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            <Container as="section">
                <h1 className="mb-3">How much is your weight in {commodityTable[commodity]}?</h1>
                <p>BMI?  That means Bitcoin-Mass-Index, right?!  We&apos;ve all heard the saying &quot;worth your weight in Gold&quot;, but just what is that worth?  Now you can find out using up to date pricing data and multiple currencies - including Bitcoin and Etherium.  Not only that, but you can change the commodity and find out how much you&apos;re worth in Paladium, or Silver, or Platinum.   You can send me feedback or feature requests using the <a href="#contact-form">contact form</a> below.</p>
            </Container>
        </>
    );
}

export default YourWeightIn;