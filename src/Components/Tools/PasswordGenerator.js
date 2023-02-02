import { useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';

function PasswordGenerator() {
    const [generated, setGenerated] = useState('Hit the button to generate a password.');
    const [appendNum, setAppendNum] = useState(true);
    const [incSymbols, setIncSymbols] = useState(false);

    const generatePassword = () => {
        const words = {
            colours: [
                'red',
                'orange',
                'yellow',
                'green',
                'blue',
                'indigo',
                'violet',
                'black',
                'white',
                'grey',
                'bronze',
                'silver',
                'gold',
                'amber',
                'amtheyst',
                'azure',
                'emerald',
                'ruby',
                'sapphire',
                'beige',
                'brown',
                'crimson',
                'cyan',
                'pink',
                'purple',
                'teal',
            ],
            subjects: [
                'horse',
                'dog',
                'cat',
                'tree',
                'fish',
                'cow',
                'pig',
                'chicken',
                'duck',
                'goat',
                'sheep',
                'bird',
                'robot',
                'android',
                'cyborg',
                'crab',
                'turtle',
                'shark',
                'puppy',
                'kitten',
                'monkey',
            ],
            verbs: [
                'jumps',
                'climbs',
                'punches',
                'cleans',
                'washes',
                'scrubs',
                'leaps',
                'vaults',
                'smashes',
                'rides',
                'says',
                'shouts',
                'mutters',
                'yells',
                'brushes',
                'strokes',
                'types',
                'writes',
                'pens',
            ],
            objects: [
                'gate',
                'house',
                'building',
                'hotel',
                'shop',
                'fence',
                'leaves',
                'boats',
                'cars',
                'trucks',
                'windows',
                'phone',
                'xbox',
                'computer',
                'television',
                'toilet',
                'biscuits',
                'coffee',
            ],
        };

        const capitalizeFirstLetter = (string) => {
            return string[0].toUpperCase() + string.slice(1);
        };

        let pw = [],
            fw = '';
        pw.push(words.colours[Math.floor(Math.random() * words.colours.length)]);
        pw.push(words.subjects[Math.floor(Math.random() * words.subjects.length)]);
        pw.push(words.verbs[Math.floor(Math.random() * words.verbs.length)]);
        pw.push(words.objects[Math.floor(Math.random() * words.objects.length)]);
        if (incSymbols) {
            let n = Math.floor(Math.random() * pw.length),
                w = pw[n];
            if (w.includes('i')) w = w.replace('i', '!');
            else if (w.includes('a')) w = w.replace('a', '@');
            else if (w.includes('e')) w = w.replace('e', '£');
            else if (w.includes('s')) w = w.replace('s', '$');
            else if (w.includes('o')) w = w.replace('o', '()');
            pw[n] = w;
        }

        pw.forEach((n) => {
            fw += capitalizeFirstLetter(n);
        });
        if (appendNum) {
            fw += ('' + Math.floor(Math.random() * 1000)).padStart(4, 0);
        }
        setGenerated(fw);
    };

    return (
        <Container as='section'>
            <Row>
                <Col xs={12} lg={8}>
                    <h2 className='mb-3'>Generate a Password</h2>
                    <p>
                        Ever see a password that looks like <code>Th1$i5b@D</code>? Impossible to remember, easy to
                        mistype and surprisingly simple for a machine to guess (hint, it&apos;s too short). Instead, we
                        could use some words that we already know, perhaps throw in some patterns unique to us and
                        substitute one or two letters for symbols. We could append some numbers that we can remember
                        too. Suddenly we&apos;re rocking more secure passwords that we don&apos;t have to write on a
                        post-it note stuck to the monitor. Beat the 1337 H4x0R, use better passwords.
                    </p>
                </Col>
                <Col xs={12} lg={4}>
                    <h2 className='mb-3'>&nbsp;</h2>
                    <code className='d-block p-3 mb-5'>{generated}</code>
                    <Button onClick={generatePassword} variant='outline-primary' className='mb-5' block size='lg'>
                        <i className='icon-shuffle size-2 font-weight-normal'></i> Generate Password
                    </Button>

                    <Form.Group controlId='appNum-switch' className='m-0'>
                        <Form.Switch
                            label='Append random number'
                            checked={appendNum}
                            onChange={() => setAppendNum(!appendNum)}
                        />
                    </Form.Group>

                    <Form.Group controlId='incSym-switch' className='m-0'>
                        <Form.Switch
                            label='Include symbols'
                            checked={incSymbols}
                            onChange={() => setIncSymbols(!incSymbols)}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

export default PasswordGenerator;
