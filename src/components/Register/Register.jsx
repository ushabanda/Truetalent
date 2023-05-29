import React from "react";
import images from "../images/login_banner.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Registerstyles.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  let navigateToCandidate = () => {
    navigate("/candidate");
  };
  let navigateToEmployer = () => {
    navigate("/candidate");
  };
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
                  <h4>
                      <span>Your Dream job</span>at best locations is just a
                      click away!
                  </h4>
                  <div className="register-image-para">
                    <p className="register-image-learn">
                      Learn more about TrueTalent
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='register-form'>
              <h3>Select Your Profile</h3>
              <div className="register-profile-content">
                <button className='register-link' onClick={navigateToCandidate}>
              <div className="register-candidate-profile">
                <PermIdentityIcon
                  className="register-candidate-icon"
                  style={{
                    height: "3em",
                    width: "3em",
                    color: "#928d8d",
                  }}
                />
                <p>I'm a candidate</p>
                <p>Iam here to find my next job.</p>
                </div>
                </button>
                <button className='register-link' onClick={navigateToEmployer}>
                <div className="register-employer-profile">
                  <BusinessCenterIcon 
                  style={{
                    height: "3em",
                    width: "3em",
                    color: "#928d8d",
                  }}/>
                  <p>I'm an employer</p>
                <p>Iam here to job seekers.</p>
                </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
