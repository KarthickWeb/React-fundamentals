import React,{Component} from 'react';
import Slider from "react-slick";
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import pic4 from './images/pic4.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

  export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div id="services">
        <div className="container">
                <h2 className="text-capitalize"> Enjoy <span> Coding </span></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
          
        <Slider {...settings}>
          <div>
             <img src={pic4} className="d-block w-100" alt="..." />
          </div>
          <div>
             <img src={pic2} className="d-block w-100" alt="..." />
          </div>
          <div>
               <img src={pic3} className="d-block w-100" alt="..." />
          </div>
        </Slider>
          </div> 
      </div>
    );
  }
}
