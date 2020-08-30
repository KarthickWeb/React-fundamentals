import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import styled from 'styled-components';
import { Container, Row,Col } from 'react-grid-system';
import Title from './Title.js'



const Tech =({ progress }) => (
   
   <Knows>
        <Container>
           <div className="inside">
                <Title title="skills" color=""/>
              </div> 
         <div className="skill"> 
        <Row>
         <Col lg={3} md={6} sm={12}>
              <div className="round">
              <ProgressBar radius={80} progress={85}     initialAnimation initialAnimationDelay={1800} 
                strokeColor="#ff8080" transition=".60s ease">
                  <div className="indicator">
                     <div>85%</div>
                 </div>
                 <div className ="elements">

                 <h2>html/css</h2>
                 </div>
             </ProgressBar>
             </div>
         </Col>
        <Col lg={3} md={6} sm={12}>
              <div className="round">
              <ProgressBar radius={80} progress={70}    initialAnimation initialAnimationDelay={1800}  
                strokeColor="#383e56"  transition=".60s ease">

                  <div className="indicator">
                     <div>70%</div>
                 </div>
                 <div className ="elements">

                 <h2>Java</h2>
                 </div>
             </ProgressBar>
             </div>
         </Col>
        <Col lg={3} md={6} sm={12}>
                <div className="round">
              <ProgressBar radius={80} progress={80}   initialAnimation initialAnimationDelay={1800}  
               strokeColor="#f69e7b" transition=".60s ease">
                  <div className="indicator">
                     <div>80%</div>
                 </div>
                 <div className ="elements">

                 <h2>Bootstrap</h2>
                 </div>
             </ProgressBar>
             </div>
         </Col>
        <Col lg={3} md={6} sm={12}>
              <div className="round">
              <ProgressBar radius={80} progress={60}  initialAnimation initialAnimationDelay={1800}
                transition=".60s ease">
                  <div className="indicator">
                     <div>60%</div>
                 </div>
                 <div className ="elements">

                 <h2>Reactjs</h2>
                 </div>
             </ProgressBar>
             </div>
         </Col>
     </Row>
     </div>
     </Container>
  </Knows>
)

export default Tech;

const Knows=styled.section `


margin-bottom:80px;
   
.skill {

  padding-top:40px;
}

.inside{
  margin-top:15px;
}
.indicator {
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    top:100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    user-select: none;
}
   

 .elements h2 {


    text-align:center;
    font-size:20px;
    text-transform:uppercase;
 } 

 @media only screen and (max-width: 600px) {

.round {
  margin-left:70px;
}

 @media only screen and (max-width:320px) {

.round {
  margin-left:35px;
}

}

` 