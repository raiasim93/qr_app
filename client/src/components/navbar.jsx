import React from 'react';
import '../styles/App.css'
import '../styles/index.css'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Navbar = () => {
  return (
   <>
   <nav className='content-sizing nav-section-container mb-5'>
    <div className='container navbar-custom '>
      <div className='p-4 d-flex flex-direction-column justify-content-between '>
        <div className='d-flex align-items-center '>
          <QrCodeScannerIcon className='me-4' style={{fontSize: 44}} />
          <a className='text-decoration-none fw-bold fs-2 ' href=""> QR'iifyy </a>
        </div>
       
      </div>
    </div>
   </nav>
   </>
  );
};

export default Navbar;
