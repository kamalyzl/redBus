

import React from 'react'
import SliderPay from './slider'
// import $ from 'jquery'
import Slider from 'react-slick'
import dataCash from '../data/dataCash.json'

const imagesArray = {
  dataCash
}
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
      <SliderPay imgArray={imagesArray.dataCash.dataCash}/>  
    </Slider>
  );
};
export default PayCash;
