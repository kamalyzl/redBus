import React from 'react';
import SliderPay from './children/slider';
import Slider from 'react-slick';
import dataCash from '../data/dataCash.json';
import dataInfo from '../data/informative.json';

import '../css/ed-grid.min.css'; 
import '../css/main.css';

const imagesArray = {
  dataCash
};
const info = {
  dataInfo
};
const settings = {
  // dots: true,
  infinite: true,
  // speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};

const PayCash = () => {
  return (
    <div className = "ed-container selec-pay">
      <p>Selecciona dónde quieres pagar</p>
      <Slider {...settings} className='ed-container cross-center slider'>
        <SliderPay imgArray={imagesArray.dataCash.dataCash} />
      </Slider>
      <div className="box-description-cash">
        <p>Instrucciones de Pago</p> 
        <ol>
          <li><span className="number">1</span>Indica que vas a realizar un pago a la empresa PAGOEFECTIVO</li>
          <li><span className="number">2</span>Indica el código CIP: <span>{info.dataInfo.cod}</span> y el importe a
        pagar en Soles</li>
        </ol>
      </div> 
      <p>
        En esta etiqueta saldrá el costo adicional, según al banco que le de
        click y esa información se encuntra en el json datacash en las
        propiedades text1 y text 2, algunas estan vacías porque no tienen costo
        adicional- solo tienen: fullcarga, bcp e interbank
      </p>
      <div className="ed-container bpi">
        <a
          href='https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true&_k=ws2owh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Encuentra tu punto de pago
        </a>
      </div>
     
    </div>
  );
};
export default PayCash;
