import React from 'react'
import '../css/ed-grid.min.css'
import '../css/styles.css'
import '../css/main.css'
import dataInfo from '../data/informative.json';

const info = {
  dataInfo
};

const Informative = () => {
  return (
    <div className="ed-container cross-center content-info">
      <div className="ed-item m-1-3">Código de pago
        <span>{info.dataInfo.cod}</span>
      </div>
      <div className="ed-item m-1-3">Total S/.
        <span>{info.dataInfo.price}</span>
      </div>
      <div className="ed-item m-1-3"> Tu orden expirará
        <br />
        <span>{info.dataInfo.date} - {info.dataInfo.hour}</span>
      </div>
    </div>
  );
};
export default Informative;
