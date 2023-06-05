import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import images from "../images/login_banner.png"
import "./Candidatestyles.css"
import images1 from "../images/google-logo.png"
import { Link } from 'react-router-dom'
import images2 from "../images/eye_closed.png"
import images3 from "../images/eye.png"
import FormField from '../FormLabel/Formlabel'
import TextField from '@mui/material/TextField';

function Candidate() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
                <button className='employer-account-button'>Employer</button>
              </span>
              <form>
                <div className='candidate-name-container'>
                <TextField id="filled-basic" label="FirstName" variant="filled" className='candidate-fname-container'/>
                  <div>
                  <TextField id="filled-basic" label="LastName" variant="filled" className='candidate-lname-container'/>
                  </div>
                {/* <input type="text" placeholder="FirstName" className='candidate-fname-field'/>
                <input type="text" placeholder="LastName" className='candidate-lname-field'/> */}
                </div>
                <div>
                    <input type="email" placeholder='EmailAddress' className='candidate-email-field'/>
                </div>
                <div className='candidate-passowrd-content'>
                <div className="login-password-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="candidate-password-input"
                  onChange={handlePasswordChange}
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <img className="eye-img" src={images2} alt="eye_closed.png" />
                  ) : (
                    <img
                      className="eye-closed-img"
                      src={images3}
                      alt="eye.png"
                    />
                  )}
                </span>
              </div>
                    <input type='password' placeholder='ConfirmPassword' className='candidate-cpass-field' />
                </div>
                <div className='candidate-page-policy'>
                    <div className='candidate-policy-checkbox'></div>
                    <p className='candidate-policy'>I accept the TrueTalent.io <span className='candidate-page-terms'>Terms of use</span> & <span className='candidate-page-terms'>Privacy Policy</span></p>
                </div>
                <div>
                <input
                  type="submit"
                  value="Sign in"
                  className="candidate-sign-container"
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", width: "85%" }}
              >
                <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
                <span style={{ margin: "0 10px", color: "black" }}>OR</span>
                <hr style={{ flex: 1, border: "1px solid #DCDCDC" }} />
              </div>
              <div className="candidate-google-container">
                <img src={images1} alt="google-logo.png" className="candidate-google-image"/>
                <Link
                  to="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=618052979392-nrbp2u1mhqjbvan057c1f1hg13vvq60f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Ftruetalent.io%2Fauth%2Fgoogle&scope=openid%20profile%20email&response_type=code&service=lso&o2v=1&flowName=GeneralOAuthFlow"
                  className="candidate-google-account"
                >
                  Continue with Google
                </Link>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
    
  


export default Candidate
