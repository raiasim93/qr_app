import React from 'react';
import '../styles/App.css'
import '../styles/index.css'
import qrCode from '../assets/qr_code.png';

const Navbar = () => {
  return (
   <>
   <nav className='navbar-sizing mb-4'>
    <div className='container navbar-custom'>
      <div className='py-4 px-3 d-flex flex-direction-column justify-content-between '>
        <div>
          <img src={qrCode} alt="qr-logo" style={{height: 44} } />
        </div>
        <a className='text-decoration-none  fs-2 ' href=""> QR'iifyy </a>
      </div>
    </div>
   </nav>
   </>
  );
};

export default Navbar;
