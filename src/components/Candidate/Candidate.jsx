import React from 'react'
import Navbar from '../Navbar/Navbar'
import images from "../images/login_banner.png"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./Candidatestyles.css"

function Candidate() {
  return (
    <div>
      <div className="register-root">
        <Navbar />
        <div className="register-page-container">
          <div className="register-image-container">
            <div className="register-image-content">
              <div className="register-img-data">
                <img
                  src={images}
                  alt="login_banner.png"
                  className="register-banner-image"
                />
                <div className="register-image-label">
                  <h3>
                    <h4>
                      <span>Your Dream job</span>at best locations is just a
                      click away!
                    </h4>
                  </h3>
                  <div className="register-image-para">
                    <p className="register-image-learn">
                      Learn more about TrueTalent
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='candidate-form'>
              <h3>Create Truetalent Account</h3>
              <span className='candidate-page-account'>Iam a
                
                <button className='candidate-account-button'>Candidate</button>
                <CheckCircleOutlineIcon className='candidate-circle-icon' />
                <button className='employer-account-button'>Empoyer</button>
              </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
    
  


export default Candidate
