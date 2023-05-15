import React,{useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.css";
import Rangeslider from "../Rangeslider";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
import Calendar from "../calendar";

function Jobs() {
//   const [todate, setTodate] = useState([])
//   const [fromdate, setFromdate] = useState([])
//   const[todateformat, setTodateformat] = useState('')
//   const[fromdateformat, setFromdateformat] = useState('')

//   const handletodate=(e)=> {
// const gettodatevalue = e.target.value;
// const setdateformat = gettodatevalue.split('-')
// const settoyear = setdateformat[0];
// const settomonth = setdateformat[1];
// const settodate = setdateformat[2];
// const settodateformat = settoyear+""+settomonth+""+settodate;
// setTodate(gettodatevalue)
// setTodateformat(settodateformat)

// console.log(settodateformat);
//   }
// const handlefromdate=(e)=> {
//   const getfromdatevalue = e.target.value;
//   const setfromformat = getfromdatevalue.split('-')
//   const setfromyear = setfromformat[0];
//   const setfrommonth = setfromformat[1];
//   const setfromdate = setfromformat[2];
//   const setfromformatdate = setfromyear+""+setfrommonth+""+setfromdate;
//   setFromdate(getfromdatevalue)
//   setFromdateformat(setfromformatdate)
  
  
//     }
//     events={
//       backgroundColor:blue
//     }

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
          <a to="#">Clear All</a>
        </div>

        <div className="form-container">
          <form >
            <p>Location</p>
            <div>
              <input type="search" placeholder="City" className="city" />
            </div>
            <div>
              <input type="checkbox" />
              <label>Mumbai, Maharashtra</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Bangalore, Karnataka</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>New Delhi, Delhi</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Kolkata, West Bengal</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Chennai, Tamil Nadu</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Pune, Maharashtra</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Indore, Madhya Pradesh</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Ahmedabad, Gujarat</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Bhubaneswar, Odisha</label>
            </div>
            <p>+7154 More</p>
            <div>
              <p>Salary</p>
              <div>
                <input type="checkbox" />
                <label>Rs 2 Lac - 5 Lac</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs 5 Lac - 10 Lac</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs 10 Lac - 20 Lac</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs 20 Lac - 40 Lac</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Rs 40 Lac+</label>
              </div>
            </div>
            <div>
              <p>Preferred Job Type</p>
              <div>
                <input type="checkbox" />
                <label>Full Time</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Direct Contract</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Contract-to-Hire</label>
              </div>
            </div>
            <div>
              <p>Joining Preferences</p>
              <div>
                <input type="checkbox" />
                <label>Immediate</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>2 Weeks</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>1 Month</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>2 Months</label>
              </div>
            </div>
            <div>
              <p>Joining Preferences</p>
              <div>
                <input type="checkbox" />
                <label>Required</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Not Required</label>
              </div>
            </div>
            <div>
              <p>Job Durations</p>
              <div>
                <input type="checkbox" />
                <label>Contract-3 Months</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Contract-6 Months</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Contract-1 Year</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Permanent</label>
              </div>
            </div>
            <div>
              <p>Salary Types</p>
              <div>
                <input type="checkbox" />
                <label>Annual</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Monthly</label>
              </div>
              </div>
              <p>Industry Domains</p>
            <div>
              <input type="search" placeholder="Enter Industry Domain" className="city" />
            </div>
            <div>
              <input type="checkbox" />
              <label>Technology</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Education</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Hospitality</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Healthcare</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Engineering and Construction</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Banking</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Finance</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Automotive</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Telecom</label>
            </div>
            <div>
              <input type="checkbox" />
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
                <input  type="checkbox" id="toggle-btn" className="toggle"/>
                <label for="toggle-btn" className="toggle-one"></label>
              </div>
            </div>
            <div className="toggle-containerTwo">
              <p className="travel">Equal Opportunity Employer</p>
              <div className="switch-containerOne">
                <input  type="checkbox" id="toggle-btn-one" className="toggle-two"/>
                <label for="toggle-btn-one" className="toggle-thr"></label>
              </div>
            </div>
            <div>
              <p>Jobs Posted Between</p>
              {/* <div>
                <span>
                <CalendarMonthIcon />
                </span>
                <div>
                <input type="date" className="calender month" name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)} />
                </div>
              </div>
              <div>
                <span>
                <CalendarMonthIcon />
                </span>
                <div>
                <input type="date" className="calender month" name="fromdate" placeholder="dd-mm-yyyy" onChange={(e)=>handlefromdate(e)}/>
                </div>
              </div> */}
              <Calendar />
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
