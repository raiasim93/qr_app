import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import qrHero from '../assets/qr-hero.png'
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QRCode from 'react-qr-code';

const CreateFile = () => {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [socialLink, setSocialLink] = useState('');

  const handleOptionChange = (fileType) => {
    setSelectedFileType(fileType);
    setShowModal(true);
  };

  const handleGenerate = () => {
    setShowModal(false);
  };

  const handleSocialLinkChange = (e) => {
    setSocialLink(e.target.value);
  };

  return (
    <>
      <div className="content-sizing generate-file-container p-sm-3 p-md-5 text-dark mb-5 mt-3">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <h4 className="p-3 mt-3 text-secondary text-center fs-4 fs-md-3">Convert File:</h4>

            <div className="row d-flex justify-content-center align-items-center p-3">
              {/* Image Option */}
              <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('image')}
              >
                <input
                  type="radio"
                  id="image"
                  name="fileType"
                  value="image"
                  className="d-none"
                />
                <label htmlFor="image" className="d-flex align-items-center fs-5 option-label">
                  <ImageIcon className="me-2" />
                  <span>Image</span>
                </label>
              </div>

              {/* Facebook Option */}
              <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('facebook')}
              >
                <input type="radio" id="facebook" name="fileType" value="facebook" className="d-none" />
                <label htmlFor="facebook" className="d-flex align-items-center fs-5 option-label">
                  <FacebookIcon className="me-2" />
                  <span>Facebook</span>
                </label>
              </div>

              {/* LinkedIn Option */}
              <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('linkedin')}
              >
                <input type="radio" id="linkedin" name="fileType" value="linkedin" className="d-none" />
                <label htmlFor="linkedin" className="d-flex align-items-center fs-5 option-label">
                  <LinkedInIcon className="me-2" />
                  <span>LinkedIn</span>
                </label>
              </div>

              {/* PDF Option */}
              <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('pdf')}
              >
                <input type="radio" id="pdf" name="fileType" value="pdf" className="d-none" />
                <label htmlFor="pdf" className="d-flex align-items-center fs-5 option-label">
                  <PictureAsPdfIcon className="me-2" />
                  <span>PDF</span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-6 text-center qr-hero-img d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
              <div className="col-8 mb-4">
                <h4>Your Code will appear here:</h4>
              </div>
              <div className="col-8">
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={socialLink}
                    viewBox={`0 0 256 256`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-dark text-white">
              {/* Modal Header */}
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title" id="exampleModalLabel">
                  {selectedFileType === 'image' ? 'Upload Image' :
                    selectedFileType === 'pdf' ? 'Upload PDF' :
                    selectedFileType === 'facebook' ? 'Enter Facebook Link' : 'Enter LinkedIn Link'}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body bg-dark text-white">
                {selectedFileType === 'image' || selectedFileType === 'pdf' ? (
                  <input type="file"  className="form-control bg-dark text-white" />
                ) : (
                  <input 
                    type="text" 
                    placeholder={`Enter ${selectedFileType === 'facebook' ? 'Facebook' : 'LinkedIn'} Link`} 
                    value={socialLink} 
                    onChange={handleSocialLinkChange} 
                    className="form-control bg-dark text-white" 
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer bg-dark text-white">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleGenerate}>Generate</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateFile;