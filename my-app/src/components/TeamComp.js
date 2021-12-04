import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import TeamImg1 from '../images/team1.png';
import TeamImg2 from '../images/team2.jpg';
import TeamImg3 from '../images/team3.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

function TeamComp() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="teamSec navBlock my-5" id="about">
            <Container>
                <Row>
                    <h2 className="text-center mt-5 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Team</span> Chinen $ Skills</h2>
                    <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis.
                    </p>
                    <Col md={4} lg={4} sm={12} xs={12} className="mt-5">
                        <Card className="teamCard" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                            <Card.Body>
                                <div className="teamCards">
                                    <img src={TeamImg1} alt="img" />
                                    <div className="teamName">
                                        <h5>Bedi Manos</h5>
                                        <p><i>Marketolog</i></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={4} sm={12} xs={12} className="mt-5">
                        <Card className="teamCard" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                            <Card.Body>
                                <div className="teamCards">
                                    <img src={TeamImg3} alt="img" />
                                    <div className="teamName tops">
                                        <h5>Al Rayhan</h5>
                                        <p><i>Business owner</i></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={4} sm={12} xs={12} className="mt-5">
                        <Card className="teamCard" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                            <Card.Body>
                                <div className="teamCards">
                                    <img src={TeamImg2} alt="img" />
                                    <div className="teamName">
                                        <h5>Ali Sayed</h5>
                                        <p><i>Manager</i></p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeamComp;