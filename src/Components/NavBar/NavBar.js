import React from 'react'
import '../NavBar/NavBar.css'
import logo from "../img/logo.png"
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return(
        
        <Navbar className="bg-color" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'><span>صنايعي خبره<img src={logo} width='100px' alt="" /></span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><Link to='/'>الرئيسية</Link></Nav.Link>
                    <Nav.Link><Link to='/services'>خدمتنا</Link></Nav.Link>
                    <NavDropdown title="سجل الان" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"><Link to='/worker'>صنايعي</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"><Link to='/customer'>عميل</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        

    )
}

export default NavBar