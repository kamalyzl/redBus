import React from 'react'
import PropTypes from 'prop-types';
// import $ from 'jquery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import '../css/slider.css'
// import 'slick-carousel/slick/slick-theme.css'


const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};


const SliderPay = ({ imgArray }) =>   (
  <Slider {...settings} className="ed-container cross-center slider">
    {imgArray.map((val,i) => (
      <div key={i}>
        <img src={val.image} />
      </div>
    ))}

  </Slider>
);
 
SliderPay.propTypes = {
  imgArray: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SliderPay
