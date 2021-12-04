import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Products from '../jsonFiles/products.json';
import AOS from 'aos';
import "aos/dist/aos.css";

function ProductsComp() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="productsSec navBlock my-5" id="product">
            <Container>
                <Row>
                    <h2 className="text-center mt-5 pt-5 homeTitle" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000"><span className="smart">Products</span> New</h2>
                    <p className="text-center homeText pt-2" data-aos="fade-down" data-aos-offset="200" data-aos-duration="1000">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam est officiis veritatis.
                    </p>
                    {Products.map((data) => {
                        return (
                            <Col md={4}>
                                <Card className="mt-5 productCards" data-aos="flip-left" data-aos-offset="200" data-aos-duration="1000">
                                    <Card.Body>
                                        <img src={data.img} alt="img" className="productImg" />
                                        <div className="opacityDiv">
                                            <h3>{data.name}</h3>
                                            <p>{data.info}</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default ProductsComp;