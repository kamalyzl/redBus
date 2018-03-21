import React from "react";
import SliderPay from "./slider";
import Slider from "react-slick";
import dataBankInternet from "../data/dataInternet.json";
import dataInfo from "../data/informative.json";

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
  <div>
    <p>Selecciona dónde quieres pagar</p>
    <Slider {...settings} className="ed-container cross-center slider">
      <SliderPay
        imgArray={imagesArray.dataBankInternet.dataInternet}
        show={show}
      />
    </Slider>
    <p>Puedes pagar desde la Web o App móvil del Banco</p>
    <h4>Instrucciones de Pago</h4>
    <p>{something}kjhbhjjh</p>
    <p>
      2. Ingresa tu código CIP: <span>{info.dataInfo.cod}</span> y sigue los
      pasos
    </p>
    <button>Ir a banca por internet</button>
  </div>
);

export default InternetBanking;
