import React from 'react'
import '../css/ed-grid.min.css'
import '../css/styles.css'
import '../css/main.css'

const info = {
  cod:9125682111,
  price:140.00,
  date: '23 Feb',
  hour: '01:12 pm.'
}

const Informative = () => {
  return (
    <div className="ed-container cross-center content-info">
      <div className="ed-item m-1-3">Código de pago
        <span>{info.cod}</span>
      </div>
      <div className="ed-item m-1-3">Total S/.
        <span>{info.price}</span>
      </div>
      <div className="ed-item m-1-3"> Tu orden expirará
        <br />
        <span>{info.date} - {info.hour}</span>
      </div>
    </div>
  );
};
export default Informative;
