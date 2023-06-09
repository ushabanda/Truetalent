import React,{useState} from 'react'
import './Jobsearchpage.css'
import Navbar from '../Navbar/Navbar'
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rangeslider from "../Rangeslider";
import Calendar from "../calendar/calender";
import Tablecomponent from "../Tablecomponent/Tablecomponent";


function Jobsearchpage() {


  return (
    <div>
        <div>
      <Navbar />
      </div>
      <div className="search-field">
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
    </div>
  )
}

export default Jobsearchpage
