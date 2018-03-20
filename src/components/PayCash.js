

import React from 'react'
import SliderPay from './slider'
// import $ from 'jquery'
import Slider from 'react-slick'

const imagesArray = [
  '../assets/images/Banbif.png',
  '../assets/images/fullcarga.png',
  '../assets/images/kasnet.jpg',
  '../assets/images/western_union.jpg',
  '../assets/images/scotiabanck.png'
]
const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
}

const PayCash = () => {
  return (
    <Slider {...settings} className="ed-container cross-center slider">
      <SliderPay imgArray={imagesArray}/>  
    </Slider>
  );
};
export default PayCash;
