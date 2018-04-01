import React from 'react'
import PropTypes from 'prop-types';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


const settings = {
  // dots: true,
  infinite: true,
  centerPadding: '60px',
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
};
 

const SliderPay = ({ imgArray, show }) => (
  <div>
    <Slider {...settings} className="ed-container cross-center">
      {imgArray.map((val, i) => (
        <div key={i}>
          <img src={val.image} data-name={val.bank} onClick={show}  />
        </div>
      ))}
    </Slider>   
  </div>



);

SliderPay.propTypes = {
  imgArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.func.isRequired
}

export default SliderPay
