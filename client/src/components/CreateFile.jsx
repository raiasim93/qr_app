import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import ImageIcon from '@mui/icons-material/Image';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WifiIcon from '@mui/icons-material/Wifi';  // Wi-Fi icon
import QRCode from 'react-qr-code';

const CreateFile = () => {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [socialLink, setSocialLink] = useState('');
  const [showTitle, setShowTitle] = useState(false);
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');

  const handleOptionChange = (fileType) => {
    setSelectedFileType(fileType);
    setShowModal(true);
  };

  const handleGenerate = () => {
    setShowModal(false);
    setShowTitle(true);
  };

  const handleSocialLinkChange = (e) => {
    setSocialLink(e.target.value);
  };

  const handleSSIDChange = (e) => {
    setWifiSSID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setWifiPassword(e.target.value);
  };

  const generateWiFiQRCodeValue = () => {
    return `WIFI:T:WPA;S:${wifiSSID};P:${wifiPassword};H:false;;`;
  };

  return (
    <>
      <div className="content-sizing generate-file-container p-sm-3 p-md-5 text-dark mb-5 mt-3">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center">
            <h4 className="p-3 mt-3 text-secondary text-center fs-4 fs-md-3">Convert Here:</h4>

            <div className="row d-flex justify-content-center align-items-center p-3">
              {/* Image Option */}
              {/* <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('image')}
              >
                <input type="radio" id="image" name="fileType" value="image" className="d-none" />
                <label htmlFor="image" className="d-flex align-items-center fs-5 option-label">
                  <ImageIcon className="me-2" />
                  <span>Image</span>
                </label>
              </div> */}

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

              {/* Wi-Fi Option */}
              <div
                className="col-8 mb-3 d-flex justify-content-center align-items-center border border-secondary rounded p-2 option-container"
                onClick={() => handleOptionChange('wifi')}
              >
                <input type="radio" id="wifi" name="fileType" value="wifi" className="d-none" />
                <label htmlFor="wifi" className="d-flex align-items-center fs-5 option-label">
                  <WifiIcon className="me-2" />
                  <span>Wi-Fi</span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-6 text-center qr-hero-img d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
              <div className="col-8 mb-4">
                {showTitle && <h4> Scan Your QR </h4>}
              </div>
              <div className="col-8">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={selectedFileType === 'wifi' ? generateWiFiQRCodeValue() : socialLink}
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
                    selectedFileType === 'facebook' ? 'Enter Facebook Link' :
                    selectedFileType === 'linkedin' ? 'Enter LinkedIn Link' : 'Enter Wi-Fi Credentials'}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>

              {/* Modal Body */}
              <div className="modal-body bg-dark text-white">
                {selectedFileType === 'image' ? (
                  <div className="mb-3">
                    <label htmlFor="imageFile" className="form-label text-white">Upload Image</label>
                    <input
                      type="file"
                      id="imageFile"
                      onChange={handleImageChange}
                      className="form-control bg-dark text-white"
                    />
                  </div>
                ) : selectedFileType === 'wifi' ? (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="wifiSSID" className="form-label text-white">Wi-Fi Name (SSID)</label>
                      <input
                        type="text"
                        id="wifiSSID"
                        placeholder="Wi-Fi SSID"
                        value={wifiSSID}
                        onChange={handleSSIDChange}
                        className="form-control bg-dark text-white"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="wifiPassword" className="form-label text-white">Wi-Fi Password</label>
                      <input
                        type="password"
                        id="wifiPassword"
                        placeholder="Wi-Fi Password"
                        value={wifiPassword}
                        onChange={handlePasswordChange}
                        className="form-control bg-dark text-white"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-3">
                    <label
                      htmlFor={selectedFileType === 'facebook' ? 'facebookLink' : 'linkedinLink'}
                      className="form-label text-white"
                    >
                      {`Enter ${selectedFileType === 'facebook' ? 'Facebook' : 'LinkedIn'} Link`}
                    </label>
                    <input
                      type="text"
                      id={selectedFileType === 'facebook' ? 'facebookLink' : 'linkedinLink'}
                      placeholder={`Enter ${selectedFileType === 'facebook' ? 'Facebook' : 'LinkedIn'} Link`}
                      value={socialLink}
                      onChange={handleSocialLinkChange}
                      className="form-control bg-dark text-white"
                    />
                  </div>
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