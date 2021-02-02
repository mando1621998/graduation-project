import React, { Component } from 'react'
import './Home.css'
import {Container} from 'react-bootstrap'
import logo from "../img/aaaaa.png"
class Home extends Component{
    render(){
        return(
            
            <div class="main">
                <div class="container d-flex h-100 flex-column justify-content-center align-items-center">
                    <h1> أختــار حـرفتـكـ أو شطـب شقيتـكـ</h1>
                    <img src={logo} width='150px' alt="" />
                    <button class="btn btn-dark">خدمتنا</button>
                </div>
                <div class="wave"></div>
            </div>          
                   
       

        )
    }
}

export default Home