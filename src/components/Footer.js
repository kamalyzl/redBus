import React from 'react'
import '../css/ed-grid.min.css'
import '../css/main.css'

const Footer = () => {
  return (
    <div className="ed-container cross-center footer">
      <li className="ed-item s-1-3">Instrucciones vía  <img src="../assets/icons/printer.svg" alt="" />
      </li>
      <li className="ed-item s-1-3">Ayuda: <span>contacto@redbus.pe</span>

      </li>
      <li className="ed-item s-1-3"> Pago Vía  <img src="https://s3.rdbuz.com/Images/home/peru/partnerlogos/rbfooter_eslogo.png" alt="" />

      </li>
    </div>
  );
};
export default Footer;
