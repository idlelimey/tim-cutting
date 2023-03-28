import { useEffect } from 'react';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BlockQuote from '../Components/Common/BlockQuote';
import ScrollToTop from '../Components/Common/ScrollToTop';
import InfoCard from '../Components/Common/InfoCard';
import { Helmet } from 'react-helmet-async';
import { blockquotes, icons, infoCards, logos } from '../Data/Content';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BrandLogoCol from '../Components/Common/BrandLogoCol';

function Home() {
    const heroButtons = [
        {
            icon: 'mail',
            label: 'Email me',
            href: '#contact-form',
            type: 'button',
        },
        {
            icon: 'document',
            label: 'Read CV',
            href: '/cv',
            type: 'link',
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 500, easing: 'ease-in-out-back' });
    }, []);

    return (
        <>
            <Helmet>
                <title>Tim Cutting - Web Developer, Colchester. JS, React, Wordpress</title>
                <meta
                    name='description'
                    content='Web Developer in Colchester with a number of essential and valuable digital skills from many years in development, design and marketing. Frontend React, Wordpress, etc.'
                />
                <script type='application/ld+json'>
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Person",
                        "name": "Tim Cutting",
                        "givenName": "Tim",
                        "familyName": "Cutting",
                        "birthDate": "1979",
                        "url": "https://timcutting.co.uk",
                        "image": "https://timcutting.co.uk/logo512.png",
                        "jobTitle": {
                            "@type": "DefinedTerm",
                            "inDefinedTermSet": "https://targetjobs.co.uk/careers-advice/job-descriptions",
                            "termCode": "456249-web-developer-job-description",
                            "name": "Web Developer",
                            "url": "https://targetjobs.co.uk/careers-advice/job-descriptions/456249-web-developer-job-description"
                        },
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Tim Cutting"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Colchester",
                            "addressRegion": "Essex",
                            "addressCountry": "GB"
                        },
                        "sameAs": [
                            "https://github.com/idlelimey",
                            "https://www.linkedin.com/in/idlelimey",
                            "https://twitter.com/idlelimey"
                        ]
                    }`}
                </script>
            </Helmet>
            <ScrollToTop />
            <div
                className='d-flex flex-column align-items-center justify-content-center hero'
                style={{ minHeight: 'calc(100vh - 76px)' }}
            >
                <Container className='p-0'>
                    <svg x='0px' y='0px' viewBox='0 0 318.8 247.4' xmlSpace='preserve' id='hello'>
                        <path strokeLinecap='round' d='M63.5,197.1c-3.8-46.6-9.4-93-16.8-139.2' />
                        <path strokeLinecap='round' d='M101.1,19.2c-2.2,69.5-1.8,139.2,1.1,208.6' />
                        <path strokeLinecap='round' d='M99.7,112.6c-31.2,26.2-38.2,35-78.1,43.5' />
                        <path
                            strokeLinecap='round'
                            d='M139.6,151.1c11.2-7.2,31.4-54.1-1.1-33.5c-40,25.4,5.1,104.5,44.3,31.2'
                        />
                        <path strokeLinecap='round' d='M181.1,205.4c2.4-59.1,2.7-118.4,0.9-177.7' />
                        <path strokeLinecap='round' d='M219.7,22.5c-5.6,53.9-8.8,108.3-9.6,162.5' />
                        <path
                            strokeLinecap='round'
                            d='M261.9,99.5c-48.1,5.9-29.7,89.4,16.7,67.7c20.3-9.5,20.1-56.9-22.8-57.1'
                        />
                    </svg>
                    <BlockQuote content={[blockquotes.top[0]]} buttons={heroButtons} />
                </Container>
            </div>
            <Container as='section'>
                <Row xs={1} lg={2}>
                    {infoCards.map((c, i) => {
                        return (
                            <InfoCard
                                key={i}
                                icon={c.icon}
                                heading={c.heading}
                                subheading={c.subheading}
                                content={c.content}
                                list={c.list}
                                aosType='fade-up'
                                aosDelay={i * 100 + 100}
                            />
                        );
                    })}
                </Row>
            </Container>

            <Container as='section'>
                <Row>
                    {icons.map((icon, i) => {
                        return (
                            <Col
                                key={i}
                                xs={4}
                                sm={3}
                                lg='auto'
                                className='text-center flex-grow-1'
                                data-aos='fade-up'
                                data-aos-delay={icon.aosDelay * 2}
                            >
                                <OverlayTrigger
                                    placement='top'
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip>{icon.text}</Tooltip>}
                                >
                                    <i className={`icon-${icon.icon} size-4 text-mid`}></i>
                                </OverlayTrigger>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

            <Container as='section'>
                <Row>
                    <Col>
                        <h1 className='text-center'>
                            I&apos;ve worked with some <span className='scribble'>great brands</span> ...
                        </h1>
                    </Col>
                </Row>
                <Row className='py-5'>
                    {/* Convert to compoonent */}
                    {logos.map((logo, i) => (
                        <BrandLogoCol logo={logo.logo} key={i} aosType='fade-up' aosDelay={logo.aosDelay} />
                    ))}
                </Row>
                <Row>
                    <Col>
                        <p className='text-center'>And dozens more.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
