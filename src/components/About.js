import React,{Component} from 'react';
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'

export default class About extends Component {
	render(){
		return(
			<div className="about-us" id="about">
            <div className="small-container">
                <h2 className="text-center">We Can Help & <span>Explore You</span></h2>
                <p className="text-center">as opposed to using 'Content here, content here', making it look lik</p>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12 text-center">
                                <div className="item">
                                    <img src={photo2} alt="logo" />
                                    <h5 className="text-uppercase">Html/css</h5>
                                </div>
                                <div className="item">
                                    <img src={photo1} alt="logo"/>
                                    <h5 className="text-uppercase">Reactjs</h5>
                                </div>
                                <div className="item">
                                    <img src={photo4} alt="logo"/>
                                    <div>
                                        <h5 className="text-uppercase">Career</h5>
                                        <p>SampleProjects Project developed by Reactjs framework.</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src={photo3} alt="logo"/>
                                    <h5 className="text-uppercase">Reactjs</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 text-right">
                                <h4 className="text-uppercase"> <span>About</span></h4>
                                <p>Front End Technologies in the Developer “Stack” The front end stack is made up of many 
                                        different languages and libraries. While these vary from application to application, 
                                        there are only a few generic languages understood by all web browsers.These three main
                                        front-end coding languages are HTML, CSS and JavaScript</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="first"></div>
                <div className="second"></div>
            </div>
        </div>




			);}
	}