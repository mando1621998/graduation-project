import React, { Component } from "react";
import './Login.css'
import {Form} from 'react-bootstrap'
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
class Login_Craftsman extends Component {
    render() {
        return (
            <div className="Login">
                <Form className='RegistationForm'>

                    <h1>تسجيل دخول</h1>

                    <img src={logo} alt="" />

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="أدخل البريد الالكتروني" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="أدخل كلمة المرور" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox float-right">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">تذكرني</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">تسجيل دخول</button>
                    <p className="forgot-password text-right">
                        هل نسيت <Link to="#">كلمة السر ؟</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Login_Craftsman