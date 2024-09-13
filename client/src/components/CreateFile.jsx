import React from 'react';
import '../styles/App.css'
import '../styles/index.css'
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const QRstories = () => {
  return(
    <>
    <div className="content-sizing">
        <div>
          <h2 className='app-title-heading mb-4 mb-lg-5 text-center'>
             Make Your Own 
              <span className='fw-bold' style={{color: 'lightblue'}}> 
                <em> QrCode </em>  
              </span>  
             </h2>
        </div>

          <div className='row col-12 col-md-9 mx-auto p-2 d-flex justify-content-between align-items-center mb-5 rounded create-file-section'>
                {/* ensure this row only has col-8 in all sizes */}
            <div className="col-lg-2 col-sm-12 text-sm-left d-flex justify-content-center">
                <h5 className='d-5 mb-md-0 text-dark'> Choose file: </h5>
            </div>
             
              <div className="col-lg-10 d-none d-lg-flex justify-content-between justify-content-sm-around">
                <button className='btn border-dark'> <ImageIcon />  Image </button>
                <button className='btn border-dark'> <FacebookIcon /> Facebook </button>
                <button className='btn border-dark'> <InstagramIcon /> Instagram </button>
                <button className='btn border-dark'> <PictureAsPdfIcon /> Pdf </button>
          </div>
           {/* Select dropdown for small screens */}
           <div className="col-lg-10 d-lg-none">
              <select className="form-select">
                <option value="image">Image</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="pdf">Pdf</option>
              </select>
            </div>
          </div>
         
          {/* <div className="row qr-stories-create-section bg-light ">
            <div className="col-lg-6 text-center">
                <h2> Hello </h2>
            </div>
            <div className="col-lg-6 text-center">
                <h2> World </h2>
              </div>
          </div> */}
      
    </div>
     
    </>
  )
   
}

export default QRstories;