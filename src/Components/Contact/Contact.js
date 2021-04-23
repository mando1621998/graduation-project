import React, { Component } from 'react'
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import {Jumbotron,Container} from 'react-bootstrap'

class Contact extends Component {
  render() {
    return (
      <MDBContainer>
        <Jumbotron fluid>
            <Container>
                <h2>صنايعي خبره : تواصل معانا</h2>
                <p>
                صنايعي خبره هو بوابة اى حرفه 
                </p>
                <hr/>
            </Container>
        </Jumbotron>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            <form>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-name" label="Your name" />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      label="Your email"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput type="text" id="contact-subject" label="Subject" />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Your message"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
            <div className="text-center text-md-left">
              <MDBBtn color="primary" size="md">
                Send
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
                <p>البلينا ، سوهاج</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>19812</p>
              </li>
              <li>
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                <p>snai3y5ebra@gmail.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Contact
