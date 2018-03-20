import React from 'react'
import SliderPay from './slider'
import Slider from 'react-slick'
import dataBankInternet from '../data/dataInternet.json';


const imagesArray = {
  dataBankInternet
}
const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};
const InternetBanking = () => (
  <Slider {...settings} className="ed-container cross-center slider">
    <SliderPay imgArray={imagesArray.dataBankInternet.dataInternet}/>  
  </Slider>
) 

export default InternetBanking
