import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './caraousel.css';
import Slide1 from '../assets/img/carousal/Slide1.webp';
import Slide2 from '../assets/img/carousal/Slide2.webp';
import Slide3 from '../assets/img/carousal/Slide3.webp';
import Scroll from '../components/ScrollDown';
const caraousel= ()=>{

    return(
    <>
    <div id="home">
    <Carousel controls={false} indicators interval={2000} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100  custom-img"
      src={Slide1}
      alt="First slide"
      
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  custom-img"
      src={Slide2}
      alt="Third slide"
      
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  custom-img"
      src={Slide3}
      alt="Third slide"
      
    />

    
  </Carousel.Item>
</Carousel>
  <Scroll/>
   </div> </>

    )



}

export default caraousel;