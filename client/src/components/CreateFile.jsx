import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WifiIcon from '@mui/icons-material/Wifi';  // Wi-Fi icon
import QRCode from 'react-qr-code';
import OptionCard from './OptionCard';

const CreateFile = () => {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  //  states to hold final values for QR code generation
  const [qrValue, setQrValue] = useState('');
  const [tempSocialLink, setTempSocialLink] = useState('');
  const [tempWifiSSID, setTempWifiSSID] = useState('');
  const [tempWifiPassword, setTempWifiPassword] = useState('');

  const handleOptionChange = (fileType) => {
    setSelectedFileType(fileType);
    setShowModal(true);
  };

  const handleGenerate = () => {
    if (selectedFileType === 'wifi') {
      setQrValue(`WIFI:T:WPA;S:${tempWifiSSID};P:${tempWifiPassword};H:false;;`);
    } else {
      setQrValue(tempSocialLink);
    }
    setTempSocialLink('');
    setTempWifiSSID('');
    setTempWifiPassword('');
    // clear modal
    setShowModal(false);
    setShowTitle(true);
  };

  const handleSocialLinkChange = (e) => {
    setTempSocialLink(e.target.value);  // Use temp state for link
  };

  const handleSSIDChange = (e) => {
    setTempWifiSSID(e.target.value);  // Use temp state for SSID
  };

  const handlePasswordChange = (e) => {
    setTempWifiPassword(e.target.value);  // Use temp state for password
  };

  return (
    <>
      <div className="bg-light  p-sm-3 p-md-5 text-dark ">
        <div className="row sm-padding">
        <h4 className="p-3 mt-3 mb-3 text-secondary text-center fs-4 fs-md-3">Convert Here:</h4>

          {/* first column */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          
            <div className="row d-flex justify-content-center align-items-center p-3">
              {/*  Option rendering using the optionCard component222222*/}
              <OptionCard
                  label="Facebook"
                  icon={FacebookIcon}
                  onClick={()=> handleOptionChange('facebook')}
              />
               <OptionCard
                  label="LinkedIn"
                  icon={LinkedInIcon}
                  onClick={()=> handleOptionChange('linkedin')}
              />
               <OptionCard
                  label="WiFi"
                  icon={WifiIcon}
                  onClick={()=> handleOptionChange('wifi')}
              />
            </div>
          </div>
          {/* second */}
          <div className="col-12 col-md-6 text-center qr-hero-img d-flex justify-content-center align-items-center">
            <div className="row d-flex justify-content-center">
              <div className="col-8 mb-4">
                {showTitle && <h4> Scan Your QR </h4>}
              </div>
              <div className="col-8">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrValue}
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
                        value={tempWifiSSID}  // Use temp state
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
                        value={tempWifiPassword}  // Use temp state
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
                      value={tempSocialLink}  // Use temp state
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
