import React from 'react'
import SliderPay from './slider'
import Slider from 'react-slick'
import dataBankInternet from '../data/dataInternet.json';
import dataInfo from '../data/informative.json';


const imagesArray = {
  dataBankInternet
}
const info = {
  dataInfo
};

const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};
const InternetBanking = () => (
  <div>
    <p>Selecciona dónde quieres pagar</p>
    <Slider {...settings} className="ed-container cross-center slider">
      <SliderPay imgArray={imagesArray.dataBankInternet.dataInternet} />
    </Slider>
    <p>Puedes pagar desde la Web o App móvil del Banco</p>
    <h4>Instrucciones de Pago</h4>
    <p>
      En esta etiqueta saldrá las instrucciones de pago que son diversas según el banco que se elija
    </p>
    <p>
      2. Ingresa tu código CIP: <span>{info.dataInfo.cod}</span> y sigue los
      pasos
    </p>
    <button>Ir a banca por internet</button>
  </div>
); 

export default InternetBanking
