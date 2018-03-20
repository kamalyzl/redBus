import React from 'react'
import Lenguaje from './children/Header-len' 
import '../css/ed-grid.min.css'
import '../css/styles.css'
import '../css/header.css'

const Header = () => {
  return (
    <div className="main-header cross-center">
      <div className="ed-container">
        <div className="ed-item s-50 m-50 l-50 cross-center">
          <img src="https://www.redbus.pe/images/home/sgp/r_logo.png" alt="" className="logo" />
          <img src="https://s3.rdbuz.com/Images/home/peru/partnerlogos/rbfooter_eslogo.png" alt="" className="logo" />
        </div>
        <Lenguaje/>
      </div>
    </div>
  );
};
export default Header;
