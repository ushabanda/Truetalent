import React from "react";
import images from "../images/login_banner.png";
import "./LoginStyles.css";
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom"
// import { GoogleLogin } from 'react-google-login';

function Login() {
  // const responseGoogle = (response) => {
  //   console.log(response);
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
                <p className="login-image-learn">Learn more about TrueTalent</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="login-form">
            <h3>Log in to TrueTalent</h3>
            <form>
              <div className="login-email-box">
              <input type="email" placeholder="Email" className="login-email-input"/>
              </div>
              <div className="login-password-box">
              <input type="password" placeholder="password" className="login-password-input"/>
              </div>
              <div >
                <input type="checkbox" />
                <label className="login-remember">Remember me</label>
                <Link to="/forgot-password" className="login-link-remember">Forgot password?</Link>
              </div>
              <div>
                <input type="submit" value="Sign in" className="login-sign-container"/>
              </div>
              <div style={{ display: 'flex', alignItems: 'center',width:'50%' }}>
      <hr style={{ flex: 1, border: '1px solid #DCDCDC' }} />
      <span style={{ margin: '0 10px',color:'black'}}>OR</span>
      <hr style={{ flex: 1, border: '1px solid #DCDCDC' }} />
    </div>
    <div>
    <Link to="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=618052979392-nrbp2u1mhqjbvan057c1f1hg13vvq60f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftruetalent.io%2Fauth%2Fgoogle&scope=openid%20profile%20email&response_type=code&service=lso&o2v=1&flowName=GeneralOAuthFlow" className="login-google-account">Continue with Google</Link>
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
