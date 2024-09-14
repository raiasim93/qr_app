import React, {useCallback, useState} from 'react';
import '../styles/App.css';
import '../styles/index.css';
import qrHero from '../assets/qr-hero.png'
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const CreateFile = () => {

  return(
    <>
 <div className="content-sizing generate-file-container p-sm-3 p-md-5 text-dark mb-5 mt-3">
  <div className="row">
    <div className="col-6  d-flex flex-column justify-content-center">
      <h4 className="p-3 mt-3 text-secondary text-center fs-4 fs-md-3">Convert File:</h4>

      <div className="row d-flex justify-content-center align-items-center p-3">
        {/* Image Option */}
        <div className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container">
          <input type="radio" id="image" name="fileType" value="image" className="d-none " />
          <label htmlFor="image" className="d-flex align-items-center fs-5 option-label">
            <ImageIcon className="me-2"  />
            <span>Image</span>
          </label>
        </div>

        {/* Facebook Option */}
        <div className="col-8 mb-3 d-flex  justify-content-center align-items-center border border-secondary rounded p-2 option-container">
          <input type="radio" id="facebook" name="fileType" value="facebook" className="d-none" />
          <label htmlFor="facebook" className="d-flex align-items-center fs-5 option-label">
            <FacebookIcon className="me-2"/>
            <span>Facebook</span>
          </label>
        </div>

        {/* Instagram Option */}
        <div className="col-8 mb-3 d-flex  justify-content-center align-items-center border border-secondary rounded p-2 option-container">
          <input type="radio" id="instagram" name="fileType" value="instagram" className="d-none" />
          <label htmlFor="instagram" className="d-flex align-items-center fs-5 option-label">
            <InstagramIcon className="me-2"/>
            <span>Instagram</span>
          </label>
        </div>

        {/* PDF Option */}
        <div className="col-8 mb-3 d-flex  justify-content-center align-items-center border border-secondary rounded p-2 option-container">
          <input type="radio" id="pdf" name="fileType" value="pdf" className="d-none" />
          <label htmlFor="pdf" className="d-flex align-items-center fs-5 option-label">
            <PictureAsPdfIcon className="me-2"/>
            <span>PDF</span>
          </label>
        </div>
      </div>
    </div>

    <div className="col-6 text-center qr-hero-img d-flex justify-content-center align-items-center">
      <div className="row d-flex justify-content-center">
        <div className="col-8 mb-4">
        <h4> Your Code will appear here: </h4>
        </div>
        <div className="col-8">
        <img src={qrHero} className="img-fluid border-secondary" alt="QR Hero" />

          </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
   
}

export default CreateFile;