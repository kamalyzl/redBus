import React from 'react';
import '../css/ed-grid.min.css'; 
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
      <div className='ed-item m-1-3 cross-center'>
        <p><span>Código de pago</span><br/> <span>{info.dataInfo.cod}</span></p>
      </div>
      <div className='ed-item m-1-3 cross-center'>
        <p>Total <br /> S/.<span>{info.dataInfo.price}</span></p> 
      </div>
      <div className='ed-item m-1-3 cross-center'> 
        <p><span> <img src="../assets/icons/alarm.svg" alt="" className="alarm" /> </span> Tu orden expirará  <br /> <span>{date} - {showTime()}</span></p>       
     
        
      </div>
    </div>
  );
};
export default Informative;

