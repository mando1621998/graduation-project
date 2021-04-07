import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import {Jumbotron,Container,Row,Col,Carousel} from 'react-bootstrap'
import logo from "../img/logo.png"
import aboutSec from '../img/—Pngtree—hand drawn yellow bike delivery_5331773.png'
class Home extends Component{
    render(){
        return(
            
        <React.Fragment>
            <div class="main">
                <div class="container d-flex h-100 flex-column justify-content-center align-items-center">
                    <h1> اختــار حـرفتـكـ أو شطـب شقتـكـ</h1>
                    <img src={logo} width='190px' height="200px" alt="" />
                    <Link to="services">الخدمات</Link>
                </div>
                <div class="wave"></div>
            </div>

            <Jumbotron fluid>
                <Container>
                    <h2>صنايعي خبره : هنجبلك اي صنعة</h2>
                    <p>
                    صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة اعتمدنا على تحقيق الفرص للصنايعي والعميل
                    </p>
                    <hr/>
                </Container>
            </Jumbotron>

            <section className="aboutSec">
                <Container>
                    <Row>

                        <Col fluid className="l-aboutSec"><img src={aboutSec} width="400px" alt="" /></Col>

                        <Col >

                            <Row>
                                <Col md={6}>
                                    <img className="png_aboutSec" src="https://filkhedma-prod-backend.s3.amazonaws.com/categories/c16fb5d1-6abd-4c46-96cc-32e16df18c79.png" width='50px' alt="" />
                                    <div>
                                        <h5>! هنوفرلك أي صنعه </h5>
                                        <p>عندنا مجموعة متكاملة من افضل واقوي الصنايعية فى مصر اللي هيساعدوك تنجز اعمالك كلها فى اسرع وقتا مهما كانت .</p>
                                    </div>
                                </Col>
                                <Col md={6}><img className="png_aboutSec" src="https://filkhedma-prod-backend.s3.amazonaws.com/categories/c16fb5d1-6abd-4c46-96cc-32e16df18c79.png" width='50px' alt="" />
                                    <div>
                                        <h5>سرعة فى التنفيذ</h5>
                                        <p>سيارتك عطلت على الطريق ومش عارف تتصرف ! , الحل مع صنعة لانها بتوفرلك اى صنعة فى اسرع وقت وباعلي كفاءة وجودة</p>
                                    </div></Col>
                            </Row>
                            <Row>
                                <Col md={6}><img className="png_aboutSec" src="https://filkhedma-prod-backend.s3.amazonaws.com/categories/c16fb5d1-6abd-4c46-96cc-32e16df18c79.png" width='50px' alt="" />
                                    <div>
                                        <h5>! آمان ليك ولبيتك</h5>
                                        <p>لاننا يهمنا سلامتك وسلامة بيتك بنوفرلك دعم فني على مدار الساعة وطول ايام الاسبوع عشان نتابع معاك طلبك ونساعدك , بالإضافة لوسائل الامان اللى بنضمنهالك وبنقدمهالك على بروفايل كل صنايعي .</p>
                                    </div></Col>
                                <Col md={6}><img className="png_aboutSec" src="https://filkhedma-prod-backend.s3.amazonaws.com/categories/c16fb5d1-6abd-4c46-96cc-32e16df18c79.png" width='50px' alt="" />
                                    <div>
                                        <h5>خـدمة عمـلاء 24 سـاعة</h5>
                                        <p>الدعم الفني معاك طول ايام الاسبوع وعلى مدار اليوم عشان نتحقق ان الخدمة بتم بشكل كويس , كمان بنقدملك خدمة الطلب السريع اللى من خلالها تقدر تطلبنا فى اى مكان وفى اى وقت</p>
                                    </div></Col>
                            </Row>

                        </Col>
                        
                    </Row>
                </Container>
            </section>

            <section className="aboutSec2">
                <Container>
                <Row>
                    <Col>
                        <section className="aboutSec-top">
                                <h3>
                                    خدمات الصنايعية بين ايديك
                                    <img src="http://www.san3ah.com/assets/Images/cout.png" alt="" />
                                </h3>
                                <h6>مع تطبيق صنعة هتقدر تطلب جميع الخدمات من موبايلك</h6>
                                
                        </section>
                        <hr/>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?b=1&k=6&m=990697446&s=612x612&w=0&h=mPzTcLVC3RGmZMXnmVt9pD0R2T8SS9vO7HMd_DZUrmY="
                                alt="First slide"
                                height="250px"
                                />
                                <Carousel.Caption>
                                <h3>جميع الخدمات اللى هتحتاجها لبيتك او شركتك من نجارة او مقاولة وحدادة وغيرها من خدمات فنية كتير صنايعي خبره بيوفرهالك</h3>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?b=1&k=6&m=990697446&s=612x612&w=0&h=mPzTcLVC3RGmZMXnmVt9pD0R2T8SS9vO7HMd_DZUrmY="
                                alt="Second slide"
                                height="250px"
                                />

                                <Carousel.Caption>
                                <h3>لاننا بنقدر وقتك فى صنايعي خبره , التطبيق مدروس بالكامل إنه يحقق لك السهولة والسرعة فى تنفيذ طلبك , عشان نقدر نساعدك ونوصلك فى اسرع وقت</h3>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?b=1&k=6&m=990697446&s=612x612&w=0&h=mPzTcLVC3RGmZMXnmVt9pD0R2T8SS9vO7HMd_DZUrmY="
                                alt="Third slide"
                                height="250px"
                                />

                                <Carousel.Caption>
                                <h3>الدعم الفني معاك طول ايام الاسبوع وعلى مدار اليوم عشان نتحقق ان الخدمة تتم بشكل مميز , كمان بنقدملك خدمة الطلب السريع اللى من خلالها تقدر تطلبنا فى اى مكان وفى اى وقت</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col fluid className="r-aboutSec"><img src={aboutSec} width="400px" alt="" /></Col>
                </Row>
                </Container>
            </section>

            <Jumbotron fluid>
                <Container>
                    <h3>خدمات الصنايعية بين ايديك
                        <img src="http://www.san3ah.com/assets/Images/cout.png" alt="" />
                    </h3>
                    <p>
                    صنايعي خبره هو بوابة اى حرفه , وعشان نضمن اننا نكون حلقة وصل فعالة اعتمدنا على تحقيق الفرص للصنايعي والعميل
                    </p>
                    <hr/>
                </Container>
            </Jumbotron>

        </React.Fragment>
            
       

        )
    }
}

export default Home