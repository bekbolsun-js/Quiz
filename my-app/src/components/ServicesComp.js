import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Services from '../jsonFiles/services.json';
import Watch from '../images/appleWatch.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function ServicesComp() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="servicesSec" id="service">
            <Container>
                <Row>
                    <h2 className="text-center mt-5 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Services</span> We Provide</h2>
                    <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis.
                    </p>
                    <Col md={1} lg={1} className="mt-5">
                        <div className="servicesDiv">
                            {Services.map((res) => {
                                return (
                                    <img src={res.img} alt="img"  data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" />
                                )
                            })}
                        </div>
                    </Col>
                    <Col md={7} lg={7} className="mt-5 pl-3 servicesText">
                        <h2 className="pt-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-duration="1000">Modern App Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet voluptatum dolores
                            quos ex incidunt delectus quo unde maxime! Aliquid, distinctio. Officia quas, in
                            adipisci dicta maiores ipsam minus porro.
                        </p>
                        <p className="mt-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet voluptatum dolores
                            quos ex incidunt delectus quo unde
                        </p>
                        <p className="mt-3" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-duration="2500">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        <Button className="sendButton secondButton" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-duration="1000">Know More</Button>
                    </Col>
                    <Col md={4} sm={12}>
                        <img src={Watch} alt="img" className="img-fluid mt-5" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServicesComp;