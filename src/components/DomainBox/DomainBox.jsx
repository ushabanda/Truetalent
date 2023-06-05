import React from 'react'
import images from "../images/technology-image.svg"
import images1 from "../images/education-image.svg"
import images2 from "../images/hospitality-image.svg"
import images3 from "../images/healthcare-image.svg"
import images4 from "../images/engg-image.svg"
import images5 from "../images/banking-image.svg"
import images6 from "../images/financial-image.svg"
import images7 from "../images/auto-image.svg"
import images8 from "../images/telecom-image.svg"
import images9 from "../images/chemical-image.svg"
import images10 from "../images/travel-image.svg"
import images11 from "../images/retail-image.svg"
import './DomainBox.css'

function DomainBox() {
  return (
    <div>
      <div>
        <h3 className='homepage-domain-heading'>Popular <span>Industry Domain</span></h3>
        <div className='homepage-domaincard'>
            <div className='domain-box'>
        <img src={images} alt="technology-image.svg" className='domain-image' />
        <h3>Technology</h3>
        </div>
        <div className='domain-box'>
        <img src={images1} alt="education-image.svg" className='domain-image' />
        <h3>Education</h3>
        </div>
        <div className='domain-box'>
        <img src={images2} alt="hospitality-image.svg" className='domain-image' />
        <h3>Hospitality</h3>
        </div>
        <div className='domain-box'>
        <img src={images3} alt="healthcare-image.svg" className='domain-image' />
        <h3>Healthcare</h3>
        </div>
        <div className='domain-box'>
        <img src={images4} alt="engg-image.svg" className='domain-image' />
        <h3>Engineering and Construction</h3>
        </div>
        <div className='domain-box'>
        <img src={images5} alt="banking-image.svg" className='domain-image' />
        <h3>Banking</h3>
        </div>
        <div className='domain-box'>
        <img src={images6} alt="financial-image.svg" className='domain-image' />
        <h3>Finance</h3>
        </div>
        <div className='domain-box'>
        <img src={images7} alt="auto-image.svg" className='domain-image' />
        <h3>Automotive</h3>
        </div>
        <div className='domain-box'>
        <img src={images8} alt="telecom-image.svg" className='domain-image' />
        <h3>Telecom</h3>
        </div>
        <div className='domain-box'>
        <img src={images9} alt="chemical-image.svg" className='domain-image' />
        <h3>Chemical</h3>
        </div>
        <div className='domain-box'>
        <img src={images10} alt="travel-image.svg" className='domain-image' />
        <h3>Travel</h3>
        </div>
        <div className='domain-box'>
        <img src={images11} alt="retail-image.svg" className='domain-image' />
        <h3>Retail</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DomainBox
