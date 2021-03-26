import React, { Component } from "react";
import {Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../Craftsman/Signup_Craftsman.css'

class Signup_Craftsman extends Component {
    render() {
        return (
            <div className="Signup_Craftsman">
                <Form>
                    <h1>انضم الينا كصنايعي !</h1>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="الاسم الاول" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="الاسم الاخير" />
                    </div>

                    <div className="form-group">
                        <input type="number" max="14" className="form-control" placeholder="الرقم القومي" />
                    </div>

                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="رقم الموبايل" />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="البريد الالكتروني" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="كلمة المرور" />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">سجل الان</button>
                    <p className="forgot-password text-right">
                        لدي حساب بالفعل <Link to="/Login">تسجيل دخول</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Signup_Craftsman