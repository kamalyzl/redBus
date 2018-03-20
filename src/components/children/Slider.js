import React, { Component } from 'react'
import $ from 'jquery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



class SimpleSlider extends React.Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      // speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };


    return (
      <Slider {...settings} className="ed-container cross-center slider">
        <div>
          <img src="../assets/images/bcp.png" />
        </div>
        <div>
          <img src="../assets/images/bbva.jpg" />
        </div>
        <div>
          <img src="../assets/images/Banbif.png" />
        </div>
        <div>
          <img src="../assets/images/interbank.jpg" />
        </div>
        <div>
          <img src="../assets/images/scotiabanck.png" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider