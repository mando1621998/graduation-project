import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../Navbartop/Navbartop.css'

class Navbartop extends Component{
    render(){
        return(
            <div className="nav-top">
                <Container>
                    <Row>
                        <Col className="nav-icon" lg={12} md={12} sm={12}>
                            <Col lg={6} md={6} sm={6}>
                                <div className="gem-contacts-item gem-contacts-phone">
                                <a className="phone-icon" href="#" target="_blank" title="phone"><i className="fa fa-phone" aria-hidden="true"></i>+1 999-888-77-66</a>
                                </div>
                            </Col>
                            
                        <div className="top-area-block top-area-socials socials-colored-hover">
                            <div className="socials inline-inside"> 
                                <a className="socials-item" href="#" target="_blank" title="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="socials-item" href="#" target="_blank" title="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a> 
                                <a className="socials-item" href="#" target="_blank" title="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a> 
                                <a className="socials-item" href="#" target="_blank" title="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a> 
                                <a className="socials-item" href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest" aria-hidden="true"></i></a> 
                                <a className="socials-item" href="#" target="_blank" title="youtube"><i className="fa fa-youtube" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </div>


        )
    }
}

export default Navbartop