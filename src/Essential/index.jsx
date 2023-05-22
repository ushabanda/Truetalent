import React, { useState } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import images from "../components/images/usha-image.jpg"
import Tablecomponent from "../components/Tablecomponent/Tablecomponent";
import LogoBox from "../components/LogoBox/LogoBox";
import Navbar from "../components/Navbar/Navbar";

function Essential() {
  const [jobs, setJobs] = useState(false);
  const [candidate, setCandidate] = useState(false);
  let navigate = useNavigate();
  let handleClickOne = () => {
    if (!jobs) {
      setJobs(true);
      setCandidate(false);
    }
  };
  let handleClickTwo = () => {
    if (!candidate) {
      setJobs(false);
      setCandidate(true);
    }
  };
  let navigateJobs = () => {
    navigate("/jobs/search");
  };
  return (
    <div>
      <Navbar />
      <h2>
        Get the <span className="text">Right Job</span> You Deserve
      </h2>
      <p className="mainpara">Your next career move starts here</p>
      <div className="photoplace">
      <img src={images} alt="usha-image.jpg" className="photo-container"/>
      </div>
      <div className="mainpage-searchbox">
      <button
        className="jobs"
        id="button"
        type="submit"
        onClick={handleClickOne}
        style={{
          backgroundColor: jobs ? "#14BC9A" : "white",
          color: jobs ? "white" : "black",
        }}
      >
        Search Jobs
      </button>
      <button
        className="jobs"
        type="submit"
        onClick={handleClickTwo}
        style={{
          backgroundColor: candidate ? "#14BC9A" : "white",
          color: candidate ? "white" : "black",
        }}
      >
        Search Candidates
      </button>
      <div className="search-container">
        <div className="search-box1">
          <SearchIcon className="search-icon" />
          <input
            type="search"
            placeholder="Skill/job roles"
            className="candidates"
            id="candidates-one"
          />
        </div>
        <div className="search-box2">
          <LocationOnIcon className="search-icon" />
          <input
            type="search"
            placeholder="City"
            className="candidates"
            id="candidates-two"
          />
        </div>
        <div>
          <SearchIcon className="search-icon2" />
          <button className="search" onClick={navigateJobs}>
            Search
          </button>
          </div>
        </div>
      </div>
      <div>
        <LogoBox />
      </div>
    </div>
  );
}

export default Essential;
