import Axios from 'axios'
import React , { Component }from 'react'
import {Jumbotron,Container} from 'react-bootstrap'
import './Services.css'


class Services extends Component{
    
    state = {
        works:[]
    }
    componentDidMount = () => {
        Axios.get('js/data.json').then(res => {this.setState({works: res.data.works})})
    }

    render(){

        const worksList = this.state.works.map( (workItem) =>{
            return(
                        <React.Fragment>
                            <div className="product">
                                <div className="imgbox">
                                    <img src={workItem.image_body} alt="watch" />
                                </div>
                                <div className="content">
                                    <h2>{workItem.title}</h2><br />
                                    
                                <a href="#!">اطلب الان</a>
                                </div>
                            </div>
                        </React.Fragment>
                   
            )
        })
    
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h2>صنايعي خبره : خدمتنا</h2>
                        <p>
                        صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة اعتمدنا على تحقيق الفرص للصنايعي والعميل
                        </p>
                        <hr/>
                    </Container>
                </Jumbotron>
                <div className="work">
                <div className="container">
                    {worksList}
                </div>
            </div>
            </React.Fragment>
            
        )
    }
    
    
}
export default Services