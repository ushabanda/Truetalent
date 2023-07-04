import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import "./contact.style.css";
import Footer from "../../Footer/Footer"
import images from "../../images/login_banner.png";
import images1 from "../../images/email.svg";
import images2 from "../../images/phone.svg";
import images3 from "../../images/location_marker.svg";
import ReactFlagsSelect from "react-flags-select";


function Contact() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error,setError] = useState('')
 
  function isvalidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
    return
  }

  function validateForm() {
    if(name.length == 0) {
      alert('First and LastName cannot be empty')
      return
    }

    if(email.length == 0) {
      alert('Email cannot be empty')
      return
    }

    if(phone.length == 0) {
      alert('Please enter phone number')
      return
    }
    if(phone.length <10 || phone.length >10) {
      alert('Please enter valid phone number')
      return
    }

    if(!isvalidEmail(email)) {
      alert('Please enter valid email')
      return
    }
     
  
    alert('Thank you for contacting us')
   
  }

  return (
    <div >
      <div className="contact-navbar">
        <Navbar />
      </div>
      <div className="contact-container">
        <div className="contact-body">
          <div className="contact-leftpart">
            <img
              src={images}
              alt="login_banner.png"
              className="contact-banner-image"
            />
            <h2>We are listening</h2>
            <p>
              Write us in case you wish you share feedbacks, suggestions or wish
              to add value to the project “TrueTalent”.
            </p>
            <ul>
              <li>
                <img
                  src={images1}
                  alt="email.svg"
                  className="contact-email-image"
                />
                <p>maya@truetalent.io</p>
              </li>
              <li>
                <img
                  src={images2}
                  alt="phone.svg"
                  className="contact-phone-image"
                />
                <p>+91 90906 90936</p>
              </li>
              <li>
                <img
                  src={images3}
                  alt="location_marker.svg"
                  className="contact-location-image"
                />
                <p>
                  #88 Borewell Road, Whitefield, Bangalore, 560066, Karnataka
                </p>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <h2>Send us a message</h2>
            <div className="contact-namebox">
              <div className="contact-name">
                <label className="input-lebel">First & Last Name *</label>
                <input type="text" className="form-control" onChange={(e) =>setName(e.target.value)}></input>
                {error && <p style={{color:'red'}}>{error}</p> }
              </div>
            </div>
            <div className="contact-phonebox">
              <div className="contact-phone">
                <label for="phone">Phone Number</label>
                <div className="custom-tel">
                  <div className="input-group-prepend"></div>
                  <div className="PhoneInput">
                    <div className="PhoneInputCountry">
                      
                      <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={[
            "AF","AX","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ"
           ,"BJ","BM","BT","BO","BA","BW","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC"
           ,"CO","KM","CG","CD","CK","CR","CI","HR","CU","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK"
           ,"FO","FJ","FI","FR","GF","PF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT"
           ,"VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW"
           ,"KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT"
           ,"MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP"
           ,"NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","RO","RU","RW","RE","BL","SH","KN","LC"
           ,"MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO","ZA","SS","GS","ES","LK","SD","SR"
           ,"SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB"
           ,"US","UY","UZ","VU","VE","VN","VG","VI","WF","YE","ZM","ZW" 
           ]}
      />
      <br />
                      {/* <div
                        aria-hidden="true"
                        className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
                      >
                        <img
                          className="PhoneInputCountryIconImg"
                          alt="India"
                          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg"
                        />
                      </div>
                      <div className="PhoneInputCountrySelectArrow"></div> */}
                    </div>
                    <input
                      type="tel"
                      autocomplete="tel"
                      name="contact_number"
                      className="PhoneInputInput"
                      onChange={(e) =>setPhone(e.target.value)}
                    />
                    {error && <p style={{color:'red'}}>{error}</p> }
                  </div>
                </div>
              </div>
              <div className="contact-email">
                <label className="email-lebel">Email address *</label>
                <input type="email" className="form-control" onChange={(e) =>setEmail(e.target.value)}/>
                {error && <p style={{color:'red'}}>{error}</p> }
              </div>
            </div>
            <div className="contact-compbox">
              <div className="contact-company">
                <label className="company-label">Company name (optional)</label>
                <input type="text" className="company-input"></input>
              </div>
            </div>
            <div className="contact-textbox">
              <div className="contact-text">
                <label className="contact-text-label">Message *</label>
                <textarea
                  rows="4"
                  cols="30"
                  placeholder="Your Message here"
                ></textarea>
              </div>
            </div>
            <div className="contact-fieldbox">
              <div className="contact-field">
                <label className="contact-text-label"><span className="contact-span">*</span>Fields required</label>
                </div>
            </div>
            <div className="contact-btnbox">
              <div className="contact-btn">
                <button type="submit" onClick={() => {validateForm()}}>Contact us now!</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
