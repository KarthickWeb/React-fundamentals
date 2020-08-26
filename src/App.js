import React from 'react';
import logo from './logo.svg';
import './App.css';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Tech from './Tech.js'
import {Carousel} from 'react-bootstrap';
import * as ReactBootstrap from "react-bootstrap";
import { nav, button, footer, row, col, form } from 'react-bootstrap';
import agency from './imgs/agency.jpg'
import contact from './imgs/contact.jpg'
import header from './imgs/header.jpg'
import go from './imgs/logo.png'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import pic1 from './imgs/pic1.png'
import pic2 from './imgs/pic2.jpg'
import pic3 from './imgs/pic3.jpg'
import pic4 from './imgs/pic4.jpg'
import airplane from './imgs/airplane.png'
import './css/bootstrap.min.css'

//import Navbar from './Navbar.js'
//import './css/fontawesome.min.css'

function App() {
  return (
    <div className="App">

     
        


        <header id="home">
            <div className="overlay">
                <div className="container">
                    <div>
                        <h1><span>Karthick</span><br />Web Developer</h1>
                        <p> I am fresher in the Corporate culture, but ready to accept the challenges, utlizing my skills, would like to work with a highly esteemed company which gives me a platfrom to use my expertise and skills for mutual growth of company and myself.  </p>
                        <button><a href="#" className="text-uppercase">contact me</a></button>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="about-us" id="about">
            <div className="small-container">
                <h2 className="text-center">We Can Help & <span>Explore You</span></h2>
                <p className="text-center">as opposed to using 'Content here, content here', making it look lik</p>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 text-center">
                                <div className="item">
                                    <img src={img2} />
                                    <h5 className="text-uppercase">Html/css</h5>
                                </div>
                                <div className="item">
                                    <img src={img1} />
                                    <h5 className="text-uppercase">Reactjs</h5>
                                </div>
                                <div className="item">
                                    <img src={img4} />
                                    <div>
                                        <h5 className="text-uppercase">Career</h5>
                                        <p>SampleProjects Project developed by Reactjs framework.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={img3} />
                                    <h5 className="text-uppercase">Reactjs</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 text-right">
                                <h4 className="text-uppercase"> <span>About</span></h4>
                                <p>Front End Technologies in the Developer “Stack” The front end stack is made up of many 
                                        different languages and libraries. While these vary from application to application, 
                                        there are only a few generic languages understood by all web browsers.These three main
                                        front-end coding languages are HTML, CSS and JavaScript</p>
                                <button className="text-center"><a href="#" className="text-capitalize">Click Here</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first"></div>
                <div className="second"></div>
            </div>
        </div>
        
        <div className="services" id="service">
            <div className="container">
                <h2 className="text-capitalize">Enjoy <span>Coding</span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className="small-container">
                <div id="slideToNext" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={pic4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={pic3} class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={pic2} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#slideToNext" role="button" data-slide="prev">
                    <i className="fa fa-chevron-left fa-2x"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#slideToNext" role="button" data-slide="next">
                    <i className="fa fa-chevron-right fa-2x"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div>
        </div>
        
        <div className="agency" id="agency">
            <div className="white-overlay">
                <div className ="container">
                    <div>
                        <img src={airplane}/>
                        <div>
                            <img src={pic1}/>
                            
                        </div>
                        <img src={airplane}/>
                    </div>
                    <p className="text-center">In the world of software development, hat’s built falls into two categories everything that’s seen by the user and the processes happening in the background. What we see and interact with as the visitors of a website, or as the end user of a mobile app, is considered front-end technology.</p>
                </div>
            </div>
        </div>
        
       <Tech />
        
        <div className="contact" id="contact">
            <div className="violet-overlay">
                <div className="container">
                    <h2 className="text-center">Get in touch</h2>
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <footer>
            <div class="container">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus-g"></i></a></li>
                </ul>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">Contact us</h4>
                            <p className="address">
                                E-Mail: karthiashok5604@gmail.com<br />
                                Salem<br />
                                Tamilnadu, India.
                                
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">additional links</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item date">
                            <h4 className="text-uppercase">resent posts</h4>
                            <p><a href="#">01/01/2020</a></p>
                            <p><a href="#">01/01/2020</a></p>
                            <p><a href="#">01/01/2020</a></p>
                            <p><a href="#">01/01/2020</a></p> 
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">newsletter</h4>
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center">
                <p> Copyright 2020  Design by KARTHICK </p>
            </div>
        </footer>
         
           
               
        
        
       
    </div>
  );
}

export default App;
