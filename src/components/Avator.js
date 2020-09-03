import React,{Component} from 'react';
import pic1 from './images/pic1.png'
import airplane from './images/airplane.png'

export default class Avator extends Component {
	render(){
		return(

			<div className="agency" id="agency">
            <div className="white-overlay">
                <div className ="container">
                    <div>
                        <img src={airplane} alt="logo"/>
                        <div>
                            <img src={pic1} alt="logo"/>
                        </div>
                        <img src={airplane} alt=" logo"/>
                    </div>
                    <p className="text-center">In the world of software development, hat’s built falls into two categories everything that’s seen by the user and the processes happening in the background. What we see and interact with as the visitors of a website, or as the end user of a mobile app, is considered front-end technology.</p>
                </div>
            </div>
        </div>




			);}
	}