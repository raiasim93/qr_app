import React from 'react';
import '../styles/App.css'
import '../styles/index.css'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Navbar = () => {
  return (
   <>
  
    <div className='row border-bottom  '>
      <div className='col-10 mx-auto p-4 d-flex flex-direction-column justify-content-between '>
        <div className='d-flex align-items-center '>
          <QrCodeScannerIcon className='me-2 ' style={{fontSize: 44}} />
          <a className='text-decoration-none fw-bold fs-2 ' href=""> QR'iifyy </a>
        </div>
        <div>
          <button className="btn px-3 fs-5 text-white rounded-pill btn-custom">
            Create New
          </button>
        </div>
       
      </div>
    </div>
   
   </>
  );
};

export default Navbar;
