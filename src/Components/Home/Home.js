import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import logo from "../img/logo.png"
class Home extends Component{
    render(){
        return(
            
            <div class="main">
                <div class="container d-flex h-100 flex-column justify-content-center align-items-center">
                    <h1> اختــار حـرفتـكـ أو شطـب شقتـكـ</h1>
                    <img src={logo} width='190px' height="200px" alt="" />
                    <Link to="services">الخدمات</Link>
                </div>
                <div class="wave"></div>
            </div>          
                   
       

        )
    }
}

export default Home