import React from 'react'
import '../css/ed-grid.min.css'
import '../css/main.css'

const Footer = () => {
  return (
    <div className="ed-container cross-center footer">
      <li className="ed-item m-1-3">Instrucciones vía  <img src="../assets/icons/printer.svg" alt="" />
      </li>
      <li className="ed-item m-1-3">Ayuda: <a href="mailto:contacto@redbus.pe"><span>contacto@redbus.pe</span></a>

      </li>
      <li className="ed-item m-1-3"> Pago Vía  <img src="../assets/icons/pagoEfectivo.png" alt="" />

      </li>
    </div>
  );
};
export default Footer;
