import React from 'react'
import "./Navbarstyles.css"
import { Link } from 'react-router-dom'
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
        <span className='true'>true</span><span className='t-color'>T</span><span className='alent'>alent</span>
      </div>
      <div className='TT'>
        <p>TTEssential</p>
        <div className='TTGig'>
        <p>TTGig</p>
        </div>
        </div>
        <div>
          <button type="button" className='navbar-login' onClick={navigateLogin}>Login</button>
          <button type="button" className='navbar-register' onClick={navigateRegister}>Register</button>
        </div>
    </div>
  )
}

export default Navbar
