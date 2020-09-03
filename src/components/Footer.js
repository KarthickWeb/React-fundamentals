import React,{Component} from 'react';

export default class Footer extends Component {
	render(){
		return(

			<footer>
            <div class="container">
                <ul>
                    <li><i className="fa fa-facebook-f"></i></li>
                    <li><i className="fa fa-twitter"></i></li>
                    <li><i className="fa fa-instagram"></i></li>

                    <li><i className="fa fa-linkedin-square"></i></li>
                    <li><i className="fa fa-envelope"></i></li>
                </ul>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="item">
                            <h4 className="text-uppercase">Contact us</h4>
                            <p className="address">
                                E-Mail: karthiashok5604@gmail.com<br />
                                Salem,<br />
                                Tamilnadu, India.
                                
                            </p>
                        </div>
                    </div>
                   
                    
                    <div className="col-lg-6 col-md-6 col-12">
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
         




			);}
	}