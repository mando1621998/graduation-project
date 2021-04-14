/* eslint-disable react/style-prop-object */
import React from "react";
import {} from "react-bootstrap";
import '../Footer/footer.css'
import logo from "../img/logo.png"

const FooterPage = () => {
  return (
    <React.Fragment>
        
    <footer className="back-light text-center text-lg-start">
  
        <div className="container p-4">

            <div className="row">

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className="text-link-footer">Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 2</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 3</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 4</a>
                    </li>
                    </ul>
                </div>
                

                
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-0">Links</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!" className="text-link-footer">Link 1</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 2</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 3</a>
                    </li>
                    <li>
                        <a href="#!" className="text-link-footer">Link 4</a>
                    </li>
                    </ul>
                </div>
            
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">صنايعي خبره</h5>

                    <p>
                    اختــار حـرفتـكـ أو شطـب شقتـكـ
                    </p>
                    <img src={logo} width='190px' height="200px" alt="" />
                </div>
            

            
            
            
            </div>
            
        </div>
        

        
        <div className="text-center p-3" >
            © 2020 Copyright:
            <a className="text-link-footer" href="https://mdbootstrap.com/"> snai3y5ebra.com</a>
        </div>
        
    </footer>

    </React.Fragment>
  );
}

export default FooterPage