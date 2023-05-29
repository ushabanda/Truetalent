import React from 'react'
import images from "../images/Growel-Softech-Logo.png"
import images1 from "../images/Khatabook.png"
import images2 from "../images/Nexionpro.jpg"
import images3 from "../images/cashfree-payments.png"
import images4 from "../images/Qoruz.png"
import images5 from "../images/TVS_Next_Logo.jpg"
import images6 from "../images/stixis.png"
import images7 from "../images/DQC.png"
import images8 from "../images/Drools.webp"
import images9 from "../images/acuvate-img.jpg"
import images10 from "../images/Bimal.png"
import images11 from "../images/nobroker.png"
import images12 from "../images/mystifly.png"
import images13 from "../images/Tekwissen.jpg"
import images14 from "../images/Recruiterspace.jpg"
import images15 from "../images/Respnse-informatics.webp"
 import "./logobox_styles.css"

function LogoBox() {
  return (
    <div>
        <h3 className='trust-content'><span className='trustspan'>Trusted by</span> top-tier companies</h3>
      <div className='image-container'>
      <img src={images} alt="Growel-Softech-Logo.png" className='image-box' />
      <img src={images1} alt="Khatabook.png" className='image-box'/>
      <img src={images2} alt="Nexionpro.png" className='image-box' />
      <img src={images3} alt="cashfree-payments.png" className='image-box'/>
      <img src={images4} alt="Qoruz.png" className='image-box'/>
      <img src={images5} alt="TVS_Next_Logo.png"className='image-box' />
      <img src={images6} alt="stixis.png" className='image-box'/>
      <img src={images7} alt="DQC.png" className='image-box'/>
      <img src={images8} alt="Drools.webp" className='image-box' />
      <img src={images9} alt="acuvate-img.jpg" className='image-box' />
      <img src={images10} alt="Bimal.png" className='image-box'/>
      <img src={images11} alt="nobroker.png" className='image-box' />
      <img src={images12} alt="mystifly.png" className='image-box' />
      <img src={images13} alt="Tekwissen.jpg" className='image-box'/>
      <img src={images14} alt="Recruiterspace.jpg" className='image-box' />
      <img src={images15} alt="Respnse-informatics.webp" className='image-box' />
      </div>
    </div>
  )
}

export default LogoBox
