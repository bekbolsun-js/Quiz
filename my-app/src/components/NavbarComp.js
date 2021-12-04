import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';
import Logo from '../images/logo.png';

function NavbarComp() {

    return (
        <div className="navBlock">
            <Container>
                <Row>
                    <Navbar className="navbar" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <img src={Logo} alt="logo" className="logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="#home">Trends</Nav.Link>
                                    <Nav.Link href="#about">About us</Nav.Link>
                                    <Nav.Link href="#product">Product</Nav.Link>
                                    <Nav.Link href="#service">Service</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-warning">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default NavbarComp;