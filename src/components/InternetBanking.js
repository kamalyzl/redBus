import React from 'react';
import SliderPay from './children/slider';
import Slider from 'react-slick';
import dataBankInternet from '../data/dataInternet.json';
import dataInfo from '../data/informative.json';

import '../css/ed-grid.min.css'; 
import '../css/main.css';

const imagesArray = {
  dataBankInternet
};
var something = '';
const show = e => {
  // alert('td');
  // console.log(dataBankInternet.dataInternet[0].text);
  let element = e.target.dataset.name;
  let data = dataBankInternet.dataInternet;
  data.map((value, i) => {
    if (value.bank === element) {
      console.log(value.text);
      something = value.text;
      return something; 
    } 

    // console.log(value.text);
  });
};
const info = {
  dataInfo
};

const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};
const InternetBanking = () => (
  <div className = "ed-container selec-pay">
    <p>Selecciona dónde quieres pagar</p>
    <Slider {...settings} className="ed-container ed-item cross-center slider">
      <SliderPay imgArray={imagesArray.dataBankInternet.dataInternet} show={show}/>
    </Slider>
    <div className="box-description">
      <p>Puedes pagar desde la Web o App móvil del Banco</p>
      <ol>Instrucciones de Pago
        <li>{something}Texto dinamico - Falta renderizar</li>
        <li>Ingresa tu código CIP: <span>{info.dataInfo.cod}</span> y sigue los pasos</li>
      </ol>  
    </div>
    <div className="ed-container bpi">
      <a href="#">Ir a banca por internet</a>
    </div>
  </div>
);

export default InternetBanking;
