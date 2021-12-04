import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import footerLogo from '../jsonFiles/footerLogo.json';
import AOS from 'aos';
import "aos/dist/aos.css";

function FooterComp() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="footerSec navBlock">
            <Container>
                <Row>
                    <Col md={12} lg={12} sm={12} className="footerDiv my-5 pt-3">
                        {footerLogo.map((images) => {
                            return (
                                <div className="wrap">
                                    <img src={images.img} alt="img" className="footerImg" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000" />
                                </div>
                            )
                        })}
                    </Col>
                    <Col md={{span: 6, offset: 3}} className="mt-5">
                        <Button className="knowMoreBtn contact">Contact Us</Button>
                        <div className="copy mt-3">&copy; 2021 Made by Kulnazarov Bekbolsun</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FooterComp;