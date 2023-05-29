import React, { useState } from "react";
import images from "../images/login_banner.png";
import "./LoginStyles.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import images1 from "../images/mail.png";
import images2 from "../images/lock.png";
import images3 from "../images/eye.png";
import images4 from "../images/eye_closed.png";
import images5 from "../images/google-logo.png";
import { borderRadius } from "@mui/system";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-root">
      <Navbar />
      <div className="login-page-container">
        <div className="login-image-container">
          <div className="login-image-content">
            <div className="img-data">
              <img
                src={images}
                alt="login_banner.png"
                className="login-banner-image"
              />
              <div className="image-label">
                <h3>
                  Experience Hiring 2.0 with <span>TrueTalent</span>
                </h3>
                <div className="login-image-para">
                  <p className="login-image-learn">
                    Learn more about TrueTalent
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="login-form">
            <form>
              <h4 className="login-header">Log in to TrueTalent</h4>
              <div className="login-email-box">
                {/* <MailOutlineIcon className="login-email-icon"/> */}
                <img src={images1} alt="mail.png" className="login-email-image" />
                <input
                  type="email"
                  placeholder="Email"
                  className="login-email-input"
                />
              </div>
              <div className="login-password-box">
                <img src={images2} alt="lock.png" className="login-pass-image" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="login-password-input"
                  onChange={handlePasswordChange}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <img className="eye-img" src={images4} alt="eye_closed.png" />
                  ) : (
                    <img
                      className="eye-closed-img"
                      src={images3}
                      alt="eye.png"
                    />
                  )}
                </span>
              </div>
              <div className="login-check-container">
                <div className="login-checkbox"></div>
                <label className="login-remember">Remember me</label>
                <Link to="/forgot-password" className="login-link-remember">
                  Forgot password?
                </Link>
              </div>
              <div>
                <input
                  type="submit"
                  value="Sign in"
                  className="login-sign-container"
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", width: "78%" }}
              >
                <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
                <span style={{ margin: "0 10px", color: "black" }}>OR</span>
                <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
              </div>
              <div className="login-google-container">
                <img
                  src={images5}
                  alt="google-logo.png"
                  className="login-google-image"
                />
                <Link
                  to="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=618052979392-nrbp2u1mhqjbvan057c1f1hg13vvq60f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftruetalent.io%2Fauth%2Fgoogle&scope=openid%20profile%20email&response_type=code&service=lso&o2v=1&flowName=GeneralOAuthFlow"
                  className="login-google-account"
                >
                  Continue with Google
                </Link>
              </div>
              <p className="login-job-seeker">(for job Seekers only)</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
