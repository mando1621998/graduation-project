import React from 'react'
import '../NavBar/NavBar.css'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return(
        
            <Navbar >
                <Container>
                    
                        <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to='/'>الرئيسيه</Link>
                                <Link to="/Services">خدماتنا</Link>
                                <Link to="/About">من نحن</Link>
                                <Link to="/Contact">تواصل معنا</Link>
                            </Nav>
                        </Navbar.Collapse>
                        

                </Container>
            </Navbar>
        

    )
}

export default NavBar