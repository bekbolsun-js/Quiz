import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import img1 from '../images/team1.png';
import img2 from '../images/team2.jpg';
import img3 from '../images/team3.jpg';

function ClientsSaid() {

    useEffect(() => {
        AOS.init();
    })

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <div className="client" onDragStart={handleDragStart}>
            <div className="slideDiv">
                <img src={img1} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Kita Say <i className="italic">HR Director</i></h5>
            </div>
            <div className="slideDiv">
                <img src={img2} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Ali dae <i className="italic">UX Director</i></h5>
            </div>
        </div>,
        <div className="client" onDragStart={handleDragStart}>
            <div className="slideDiv">
                <img src={img3} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Kita Say <i className="italic">HR Director</i></h5>
            </div>
            <div className="slideDiv">
                <img src={img2} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Kita Say <i className="italic">HR Director</i></h5>
            </div>
        </div>,
        <div className="client" onDragStart={handleDragStart}>
            <div className="slideDiv">
                <img src={img1} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Kita Say <i className="italic">HR Director</i></h5>
            </div>
            <div className="slideDiv">
                <img src={img3} alt="img" />
                <p>
                    <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quis animi natus aspernatur
                    esse laborum distinctio culpa nam eum, fuga nobis beatae porro alias odio soluta temporibus tempora
                    ullam!"</i>
                </p>
                <h5>Kita Say <i className="italic">HR Director</i></h5>
            </div>
        </div>
    ]

    return (
        <div className="clientsSec">
            <Container>
                <Row>
                    <h2 className="text-center mt-5 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Clients</span> Said</h2>
                    <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis.
                    </p>
                    <div className="slideShow mt-5">
                        <Container>
                            <Row>
                                <Col md={12} lg={12} sm={12} xs={12}>
                                    <Card className="mt" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                                        <Card.Body>
                                            <AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ClientsSaid;