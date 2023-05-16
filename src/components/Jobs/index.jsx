import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";
import Rangeslider from "../Rangeslider";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Calendar from "../calendar";
import Boxview from "../Boxview";

function Jobs() {


const [formData, setFormData] = useState({
  
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  const fieldValue = type === 'checkbox' ? checked : value;
  setFormData({ ...formData, [name]: fieldValue });
};

const handleclick = () => {
  setFormData({
    
  });
};


  return (
    <div className="root-container">
      <div className="main-container">
        <div className="searchbar">
          <SearchIcon className="icon" />
          <input
            type="search"
            placeholder="Skills"
            className="sub-contetent1"
          />
        </div>
        <div>
          <LocationOnIcon className="icon" />
          <input type="search" placeholder="City" className="sub-contetent2" />
        </div>
        <div className="submit">
          <button type="submit" className="btn">
            Find Jobs
          </button>
        </div>
      </div>

      <div className="container">
        <div className="container_one">
          <h4>Filter Search</h4>
          <button type="button" onClick={handleclick}>Clear All</button>
          
        </div>

        <div className="form-container">
          <form>
            <p>Location</p>
            <div>
              <input type="search" placeholder="City" className="city" name="city" />
            </div>
            <div>
              <input type="checkbox" name="mumbai" checked={formData.mumbai} onChange={handleChange} />
              <label htmlFor="mumbai">Mumbai, Maharashtra</label>
            </div>
            <div>
              <input type="checkbox" name="bangalore" checked={formData.bangalore} onChange={handleChange}/>
              <label>Bangalore, Karnataka</label>
            </div>
            <div>
              <input type="checkbox" name="delhi" checked={formData.delhi} onChange={handleChange} />
              <label>New Delhi, Delhi</label>
            </div>
            <div>
              <input type="checkbox" name="kolkata" checked={formData.kolkata} onChange={handleChange}/>
              <label>Kolkata, West Bengal</label>
            </div>
            <div>
              <input type="checkbox" name="chennai" checked={formData.chennai} onChange={handleChange} />
              <label>Chennai, Tamil Nadu</label>
            </div>
            <div>
              <input type="checkbox" name="pune" checked={formData.pune} onChange={handleChange} />
              <label>Pune, Maharashtra</label>
            </div>
            <div>
              <input type="checkbox" name="indore" checked={formData.indore} onChange={handleChange} />
              <label>Indore, Madhya Pradesh</label>
            </div>
            <div>
              <input type="checkbox" name="ahmedabad" checked={formData.ahmedabad} onChange={handleChange} />
              <label>Ahmedabad, Gujarat</label>
            </div>
            <div>
              <input type="checkbox" name="bhubaneswar" checked={formData.bhubaneswar} onChange={handleChange} />
              <label>Bhubaneswar, Odisha</label>
            </div>
            <p>+7154 More</p>
            <div>
              <p>Salary</p>
              <div>
                <input type="checkbox" name="twolack" checked={formData.twolack} onChange={handleChange} />
                <label>Rs 2 Lac - 5 Lac</label>
              </div>
              <div>
                <input type="checkbox" name="fivelack" checked={formData.fivelack} onChange={handleChange} />
                <label>Rs 5 Lac - 10 Lac</label>
              </div>
              <div>
                <input type="checkbox" name="tenlack" checked={formData.tenlack} onChange={handleChange} />
                <label>Rs 10 Lac - 20 Lac</label>
              </div>
              <div>
                <input type="checkbox" name="twentylack" checked={formData.twentylack} onChange={handleChange}/>
                <label>Rs 20 Lac - 40 Lac</label>
              </div>
              <div>
                <input type="checkbox" name="fourtylack" checked={formData.fourtylack} onChange={handleChange} />
                <label>Rs 40 Lac+</label>
              </div>
            </div>
            <div>
              <p>Preferred Job Type</p>
              <div>
                <input type="checkbox" name="fulltime" checked={formData.fulltime} onChange={handleChange} />
                <label>Full Time</label>
              </div>
              <div>
                <input type="checkbox" name="dcontact" checked={formData.dcontact} onChange={handleChange}/>
                <label>Direct Contract</label>
              </div>
              <div>
                <input type="checkbox" name="contract" checked={formData.contract} onChange={handleChange} />
                <label>Contract-to-Hire</label>
              </div>
            </div>
            <div>
              <p>Joining Preferences</p>
              <div>
                <input type="checkbox" name="immediate" checked={formData.immediate} onChange={handleChange}/>
                <label>Immediate</label>
              </div>
              <div>
                <input type="checkbox" name="twoweek" checked={formData.twoweek} onChange={handleChange}/>
                <label>2 Weeks</label>
              </div>
              <div>
                <input type="checkbox" name="onemonth" checked={formData.onemonth} onChange={handleChange} />
                <label>1 Month</label>
              </div>
              <div>
                <input type="checkbox" name="twomonth" checked={formData.onemonth} onChange={handleChange} />
                <label>2 Months</label>
              </div>
            </div>
            <div>
              <p>Joining Preferences</p>
              <div>
                <input type="checkbox" name="required" checked={formData.required} onChange={handleChange}/>
                <label>Required</label>
              </div>
              <div>
                <input type="checkbox" name="nrequired" checked={formData.nrequired} onChange={handleChange}/>
                <label>Not Required</label>
              </div>
            </div>
            <div>
              <p>Job Durations</p>
              <div>
                <input type="checkbox" name="contract" checked={formData.contract} onChange={handleChange} />
                <label>Contract-3 Months</label>
              </div>
              <div>
                <input type="checkbox" name="contractsix" checked={formData.contractsix} onChange={handleChange} />
                <label>Contract-6 Months</label>
              </div>
              <div>
                <input type="checkbox" name="contractone" checked={formData.contractone} onChange={handleChange}/>
                <label>Contract-1 Year</label>
              </div>
              <div>
                <input type="checkbox" name="permanent" checked={formData.permanent} onChange={handleChange}/>
                <label>Permanent</label>
              </div>
            </div>
            <div>
              <p>Salary Types</p>
              <div>
                <input type="checkbox" name="annual" checked={formData.annual} onChange={handleChange}/>
                <label>Annual</label>
              </div>
              <div>
                <input type="checkbox" name="monthly" checked={formData.monthly} onChange={handleChange} />
                <label>Monthly</label>
              </div>
              </div>
              <p>Industry Domains</p>
            <div>
              <input type="search" placeholder="Enter Industry Domain" className="city" />
            </div>
            <div>
              <input type="checkbox" name="tech" checked={formData.tech} onChange={handleChange} />
              <label>Technology</label>
            </div>
            <div>
              <input type="checkbox" name="edu" checked={formData.edu} onChange={handleChange} />
              <label>Education</label>
            </div>
            <div>
              <input type="checkbox" name="hospital" checked={formData.hospital} onChange={handleChange}/>
              <label>Hospitality</label>
            </div>
            <div>
              <input type="checkbox" name="health" checked={formData.health} onChange={handleChange}/>
              <label>Healthcare</label>
            </div>
            <div>
              <input type="checkbox" name="const" checked={formData.const} onChange={handleChange}/>
              <label>Engineering and Construction</label>
            </div>
            <div>
              <input type="checkbox" name="bank" checked={formData.bank} onChange={handleChange} />
              <label>Banking</label>
            </div>
            <div>
              <input type="checkbox" name="finance" checked={formData.finance} onChange={handleChange} />
              <label>Finance</label>
            </div>
            <div>
              <input type="checkbox" name="auto" checked={formData.auto} onChange={handleChange} />
              <label>Automotive</label>
            </div>
            <div>
              <input type="checkbox" name="tele" checked={formData.tele} onChange={handleChange}/>
              <label>Telecom</label>
            </div>
            <div>
              <input type="checkbox" name="chem" checked={formData.chem} onChange={handleChange} />
              <label>Chemical</label>
            </div>
            <p>+13 More</p>
            <div>
              <p>Experiance</p>
              <Rangeslider />
            </div>
            <div className="toggle-container">
              <p className="travel">Travel Required</p>
              <div className="switch-container">
                <input  type="checkbox" id="toggle-btn" className="toggle" name="chem" checked={formData.chem} onChange={handleChange}/>
                <label htmlFor="toggle-btn" className="toggle-one"></label>
              </div>
            </div>
            <div className="toggle-containerTwo">
              <p className="travel">Equal Opportunity Employer</p>
              <div className="switch-containerOne">
                <input  type="checkbox" id="toggle-btn-one" className="toggle-two"/>
                <label htmlFor="toggle-btn-one" className="toggle-thr"></label>
              </div>
            </div>
            <div>
              <p>Jobs Posted Between</p>
              <Calendar />
            </div>
          </form>
        </div>
      </div>
      <Boxview />
    </div>
  );
}

export default Jobs;
