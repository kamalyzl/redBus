import React from'react';
import Language from'./children/Language';
import'../css/ed-grid.min.css';
import'../css/main.css';

const Header = () => {
  return (
    <div>
      <div className='main-header cross-center'>
        <div className='ed-container full'>
          <div className='ed-item s-50 m-50 cross-center'>
            <img
              src='https://user-images.githubusercontent.com/32287306/37760544-01c61d74-2d85-11e8-8e2e-7f5cdea5ee64.png'
              alt=''
              className='logo'
            />
            <img
              src='../assets/icons/logoRedBus2.png'
              alt=''
              className='logo'
            />
          </div>
          <Language />
        </div>
      </div>
      <div className='ed-container cross-center pago-efectivo-logo'>
        <img src='https://user-images.githubusercontent.com/32287306/37760544-01c61d74-2d85-11e8-8e2e-7f5cdea5ee64.png' />
      </div>
    </div>
  );
};
export default Header;
