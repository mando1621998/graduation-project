import React from 'react'
import '../NavBar/NavBar.css'
import logo from "../img/logo.png"
import {Container,Nav,Navbar,NavDropdown,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return(
        
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Row className="r-nav">

                <Col className="col-nav" xs={6} md={5}>
                    <ul className="ul-nav">
                        <li>
                            <Link to="/contact">تواصل معنا</Link>
                        </li>
                        <li>
                            <Link to="/about">من نحن</Link>
                        </li>
                    </ul>
                </Col>
                <Col className="col-nav" xs={6} md={2}>
                    {/* <img className="logo" src={logo} alt="" /> */}
                </Col>
                <Col className="col-nav" xs={6} md={5}>
                    xs=6 md=4
                </Col>
                </Row>
            </Container>
        </Navbar>
        

    )
}

export default NavBar