import React from 'react'
import "./Navbarstyles.css"
import images1 from "../images/truetalent-logo.svg"
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  let navigateLogin = () => {
    navigate("/login");
  };
  let navigateRegister = () => {
    navigate("/register");
  };
  return (
    <div className='Navbar-container'>
      <div className='truetalent-logo'>
        <img src={images1} alt="truetalent-logo.svg" />
      </div>
      
      <div className='login-btn'>
          <button type="button" className='navbar-login' onClick={navigateLogin}>Login</button>
          <button type="button" className='navbar-register' onClick={navigateRegister}>Register</button>
        </div>
    </div>
  )
}

export default Navbar
