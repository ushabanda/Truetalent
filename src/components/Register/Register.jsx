import React from 'react'
import images from "../images/login_banner.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Registerstyles.css"

function Register() {
  return (
    <div>
      <div className="register-root">
      <Navbar />
      <div className="register-page-container">
        <div className='register-image-container'>
          <div className="register-image-content">
            <div className="register-img-data">
              <img
                src={images}
                alt="login_banner.png"
                className="register-banner-image"
              />
              <div className="register-image-label">
                <h3>
                  Experience Hiring 2.0 with <span>TrueTalent</span>
                </h3>
                <div className="register-image-para">
                  <p className="register-image-learn">
                    Learn more about TrueTalent
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div register-form>
            <h3>Select Your Profile</h3>
          </div>
          </div>
          </div>
          </div>
          </div>
  )
}

export default Register
