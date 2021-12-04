import React, { useEffect } from 'react';
import workingProccess from '../jsonFiles/workingProccess.json';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";

function WorkingComp() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="workingSec">
            <Container>
                <Row>
                <h2 className="text-center mt-5 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Working</span> Process</h2>
                <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="2500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis.
                </p>
                    {workingProccess.map((post) => {
                        return (
                            <Col md={3} className="processCol mt-4 pt-4">
                                <Card data-aos="flip-up" data-aos-offset="200" data-aos-duration="1000">
                                    <Card.Body>
                                        <img src={post.img} alt="img" />
                                        <h5>{post.name}</h5>
                                        <p>{post.text}</p>
                                    </Card.Body>
                                </Card>
                                <Button className="knowMoreBtn">Know More</Button>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default WorkingComp;