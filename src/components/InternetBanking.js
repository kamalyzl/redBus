import React from 'react'
import SliderPay from './slider'
import Slider from 'react-slick'


const imagesArray = [
  '../assets/images/bcp.png',
  '../assets/images/bbva.jpg',
  '../assets/images/Banbif.png',
  '../assets/images/interbank.jpg',
  '../assets/images/scotiabanck.png'
]
const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
const InternetBanking = () => (
  <Slider {...settings} className="ed-container cross-center slider">
    <SliderPay imgArray={imagesArray}/>  
  </Slider>
) 

export default InternetBanking
