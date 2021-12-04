import React, { useEffect } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="homeSec navBlock" id="home">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="text-center mt-4 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Smart</span> Agency Landing Page</h2>
                        <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis temporibus minus!
                            Possimus quae recusandae corrupti sequi impedit ipsa ad enim illum, amet nisi sapiente animi quasi facere?
                        </p>
                    </Col>
                    <Col md={4} className="cards mt-5">
                        <Card className="message" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000">
                            <Card.Body>
                                <h6 className="text-center homeTitle"><span className="smart">Send</span> A Message</h6>
                                <Form>
                                    <Form.Group className="mt-3">
                                        <Form.Control type="text" placeholder="Your Name" className="inputs input1" />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Control type="email" placeholder="Your email" className="inputs" />
                                    </Form.Group>
                                    <Form.Group className="mt-3">
                                        <Form.Control as="textarea" rows={3} placeholder="Your Message" className="textarea inputs" />
                                    </Form.Group>
                                </Form>
                                <Button className="sendButton">Send Message</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;