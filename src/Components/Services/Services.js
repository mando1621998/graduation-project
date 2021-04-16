import Axios from 'axios'
import React , { Component }from 'react'
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
                                    
                                <a href="#">اطلب الان</a>
                                </div>
                            </div>
                        </React.Fragment>
                   
            )
        })
    
        return(
            <div className="work">
                <div className="container">
                    
                    {worksList}
                </div>
            </div>
        )
    }
    
    
}
export default Services