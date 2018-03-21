import React from 'react';
import '../css/ed-grid.min.css';
import '../css/styles.css';
import '../css/main.css';
import dataInfo from '../data/informative.json';

const info = {
  dataInfo
};

const date =
  (new Date().getDate() + 2 +
  ' ' +
  new Date().toLocaleString('es-pe', { month: 'long' }));

const showTime = () => {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let timeString = '' + (hours > 12 ? hours - 12 : hours);
  timeString += (minutes < 10 ? ':0' : ':') + minutes;
  timeString += hours >= 12 ? ' P.M.' : ' A.M.';
  return timeString;
};

const Informative = () => {
  return (
    <div className='ed-container cross-center content-info'>
      <div className='ed-item m-1-3'><span>Código de pago</span><br/>
        <span>{info.dataInfo.cod}</span>
      </div>
      <div className='ed-item m-1-3'>Total S/.
        <span>{info.dataInfo.price}</span>
      </div>
      <div className='ed-item m-1-3'> Tu orden expirará
        <br />
        <span>{date} - {showTime()}</span>
      </div>
    </div>
  );
};
export default Informative;

