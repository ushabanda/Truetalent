import React, { useState } from "react";
import "./Jobsearchpage.css";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rangeslider from "../Rangeslider";
import Calendar from "../calendar/calender";
import Tablecomponent from "../Tablecomponent/Tablecomponent";

import ViewDayIcon from "@mui/icons-material/ViewDay";
import CardList from "../cards/CardList";
import ViewListIcon from "@mui/icons-material/ViewList";
import Table from "../Tablecomponent/Table";

import image from "../images/search-icon.svg";
import image1 from "../images/map_pin.svg";

function Jobsearchpage() {
  const [formData, setFormData] = useState({});
  const [showBoxes, setShowBoxes] = useState(true);
  const [displayText, setDisplayText] = useState(false);

  const handleFirstButtonClick = () => {
    setShowBoxes(true);
    setDisplayText(false);
  };

  const handleSecondButtonClick = () => {
    setShowBoxes(false);
    setDisplayText(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleclick = () => {
    setFormData({});
  };

  return (
    <div className="main-container">
      <div className="Navbar-wrapper">
        <Navbar />
      </div>

      <div className="search-bar-wrapper">
        <div className="search-field">
          <div className="skill-search">
            <img src={image} alt="search-icon.svg" className="jobsearch-icon" />
            <input type="search" placeholder="Skills" className="skill-input" />
          </div>

          <div className="city-search">
            <img src={image1} alt="map_pin.svg" className="jobsearch-icon" />
            <input type="search" placeholder="City" className="city-input" />
          </div>

          <div className="submit">
            <button type="submit" className="find-job-btn">
              Find Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="search-result">
        <h3 className="search-content">Search Result</h3>

        <div className="sort-content">
          <p className="sortparagraph">Sort by:</p>

          <div className="select-content">
            <select className="select">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Relevent</option>
            </select>
          </div>

          <div className="sort-view">
            <ViewListIcon
              onClick={handleFirstButtonClick}
              className="listicon"
            />
            <div className="gridview">
              <ViewDayIcon
                onClick={handleSecondButtonClick}
                className="gridicon"
              />
            </div>
          </div>
        </div>
      </div>

    <div className="responsive-div">
      <div className="filter-wrapper">
        <div className="filter-container">
          <div className="container_one">
            <h4 className="filter-text">Filter Search</h4>
            <button
              type="button"
              onClick={handleclick}
              className="clear-button"
            >
              Clear All
            </button>
          </div>
          <div className="form-container">
            <form>
              <p className="location-text">Preferred Job Location</p>
              <div className="cityname-container">
                <input
                  type="search"
                  placeholder="City"
                  className="city"
                  name="city"
                />
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="mumbai"
                  checked={formData.mumbai}
                  onChange={handleChange}
                />
                <label htmlFor="mumbai" className="city-name">
                  Mumbai, Maharashtra
                </label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="bangalore"
                  checked={formData.bangalore}
                  onChange={handleChange}
                />
                <label className="city-name">Bangalore, Karnataka</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="delhi"
                  checked={formData.delhi}
                  onChange={handleChange}
                />
                <label className="city-name">New Delhi, Delhi</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="kolkata"
                  checked={formData.kolkata}
                  onChange={handleChange}
                />
                <label className="city-name">Kolkata, West Bengal</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="chennai"
                  checked={formData.chennai}
                  onChange={handleChange}
                />
                <label className="city-name">Chennai, Tamil Nadu</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="pune"
                  checked={formData.pune}
                  onChange={handleChange}
                />
                <label className="city-name">Pune, Maharashtra</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="indore"
                  checked={formData.indore}
                  onChange={handleChange}
                />
                <label className="city-name">Indore, Madhya Pradesh</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="ahmedabad"
                  checked={formData.ahmedabad}
                  onChange={handleChange}
                />
                <label className="city-name">Ahmedabad, Gujarat</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="bhubaneswar"
                  checked={formData.bhubaneswar}
                  onChange={handleChange}
                />
                <label className="city-name">Bhubaneswar, Odisha</label>
              </div>
              <p className="number-text">+7154 More</p>
              <div>
                <p>Salary</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="twolack"
                    checked={formData.twolack}
                    onChange={handleChange}
                  />
                  <label className="city-name">Rs 2 Lac - 5 Lac</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="fivelack"
                    checked={formData.fivelack}
                    onChange={handleChange}
                  />
                  <label className="city-name">Rs 5 Lac - 10 Lac</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="tenlack"
                    checked={formData.tenlack}
                    onChange={handleChange}
                  />
                  <label className="city-name">Rs 10 Lac - 20 Lac</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="twentylack"
                    checked={formData.twentylack}
                    onChange={handleChange}
                  />
                  <label className="city-name">Rs 20 Lac - 40 Lac</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="fourtylack"
                    checked={formData.fourtylack}
                    onChange={handleChange}
                  />
                  <label className="city-name">Rs 40 Lac+</label>
                </div>
              </div>
              <div>
                <p>Preferred Job Type</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="fulltime"
                    checked={formData.fulltime}
                    onChange={handleChange}
                  />
                  <label className="city-name">Full Time</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="dcontact"
                    checked={formData.dcontact}
                    onChange={handleChange}
                  />
                  <label className="city-name">Direct Contract</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="contract"
                    checked={formData.contract}
                    onChange={handleChange}
                  />
                  <label className="city-name">Contract-to-Hire</label>
                </div>
              </div>
              <div>
                <p>Joining Preferences</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="immediate"
                    checked={formData.immediate}
                    onChange={handleChange}
                  />
                  <label className="city-name">Immediate</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="twoweek"
                    checked={formData.twoweek}
                    onChange={handleChange}
                  />
                  <label className="city-name">2 Weeks</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="onemonth"
                    checked={formData.onemonth}
                    onChange={handleChange}
                  />
                  <label className="city-name">1 Month</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="twomonth"
                    checked={formData.onemonth}
                    onChange={handleChange}
                  />
                  <label className="city-name">2 Months</label>
                </div>
              </div>
              <div className="cityname-container">
                <p>Joining Preferences</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="required"
                    checked={formData.required}
                    onChange={handleChange}
                  />
                  <label className="city-name">Required</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="nrequired"
                    checked={formData.nrequired}
                    onChange={handleChange}
                  />
                  <label className="city-name">Not Required</label>
                </div>
              </div>
              <div className="cityname-container">
                <p>Job Durations</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="contract"
                    checked={formData.contract}
                    onChange={handleChange}
                  />
                  <label className="city-name">Contract-3 Months</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="contractsix"
                    checked={formData.contractsix}
                    onChange={handleChange}
                  />
                  <label className="city-name">Contract-6 Months</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="contractone"
                    checked={formData.contractone}
                    onChange={handleChange}
                  />
                  <label className="city-name">Contract-1 Year</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="permanent"
                    checked={formData.permanent}
                    onChange={handleChange}
                  />
                  <label className="city-name">Permanent</label>
                </div>
              </div>
              <div className="cityname-container">
                <p>Salary Types</p>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="annual"
                    checked={formData.annual}
                    onChange={handleChange}
                  />
                  <label className="city-name">Annual</label>
                </div>
                <div className="cityname-container">
                  <input
                    type="checkbox"
                    name="monthly"
                    checked={formData.monthly}
                    onChange={handleChange}
                  />
                  <label className="city-name">Monthly</label>
                </div>
              </div>
              <p>Industry Domains</p>
              <div className="cityname-container">
                <input
                  type="search"
                  placeholder="Enter Industry Domain"
                  className="city"
                />
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="tech"
                  checked={formData.tech}
                  onChange={handleChange}
                />
                <label className="city-name">Technology</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="edu"
                  checked={formData.edu}
                  onChange={handleChange}
                />
                <label className="city-name">Education</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="hospital"
                  checked={formData.hospital}
                  onChange={handleChange}
                />
                <label className="city-name">Hospitality</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="health"
                  checked={formData.health}
                  onChange={handleChange}
                />
                <label className="city-name">Healthcare</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="const"
                  checked={formData.const}
                  onChange={handleChange}
                />
                <label className="city-name">
                  Engineering and Construction
                </label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="bank"
                  checked={formData.bank}
                  onChange={handleChange}
                />
                <label className="city-name">Banking</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="finance"
                  checked={formData.finance}
                  onChange={handleChange}
                />
                <label className="city-name">Finance</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="auto"
                  checked={formData.auto}
                  onChange={handleChange}
                />
                <label className="city-name">Automotive</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="tele"
                  checked={formData.tele}
                  onChange={handleChange}
                />
                <label className="city-name">Telecom</label>
              </div>
              <div className="cityname-container">
                <input
                  type="checkbox"
                  name="chem"
                  checked={formData.chem}
                  onChange={handleChange}
                />
                <label className="city-name">Chemical</label>
              </div>
              <p>+13 More</p>
              <div className="cityname-container">
                <p>Experiance</p>
                <Rangeslider />
              </div>
              <div className="toggle-container">
                <p className="travel">Travel Required</p>
                <div className="switch-container">
                  <input
                    type="checkbox"
                    id="toggle-btn"
                    className="toggle"
                    name="chem"
                    checked={formData.chem}
                    onChange={handleChange}
                  />
                  <label htmlFor="toggle-btn" className="toggle-one"></label>
                </div>
              </div>
              <div className="toggle-containerTwo">
                <p className="travel">Equal Opportunity Employer</p>
                <div className="switch-containerOne">
                  <input
                    type="checkbox"
                    id="toggle-btn-one"
                    className="toggle-two"
                  />
                  <label
                    htmlFor="toggle-btn-one"
                    className="toggle-thr"
                  ></label>
                </div>
              </div>
              <div>
                <p>Jobs Posted Between</p>
                <Calendar />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card-list">
        {showBoxes && <CardList />}
        {displayText && <Table />}
      </div>
      </div>
    </div>
  );
}

export default Jobsearchpage;
