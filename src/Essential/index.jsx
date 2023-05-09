import React,{useState} from 'react'
import "./styles.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Essential() {
    const [jobs, setJobs] = useState(false)
    const[candidate, setCandidate] = useState(false)
    let handleClickOne=()=> {
        setJobs(!jobs);
        setCandidate(false);
    }
    let handleClickTwo=()=> {
        setCandidate(!candidate);
        setJobs(false)
    }
  return (
    <div>
      <h2>Get the <span className='text'>Right Job</span> You Deserve</h2>
      <p>Your next career move starts here</p>
      <button className='jobs' id="button" type="submit" onClick={handleClickOne} style={{backgroundColor:jobs ? "#4cc29b":"white"}}>Search Jobs</button>
      <button className='jobs' type="submit" onClick={handleClickTwo} style={{backgroundColor:candidate ? "#4cc29b":"white"}}>Search Candidates</button>
      <div className='search-container'>
        <div className='search-box1'>
        <SearchIcon className='search-icon'/><input type="search" placeholder='Skill/job roles' className='candidates' id="candidates-one" />
        </div>
<div className='search-box2'>
<LocationOnIcon /><input type="search" placeholder='City' className='candidates' id="candidates-two"/>
</div>
<button className='search'>Search</button>

      </div>
      <SearchIcon />
    </div>
  )
}

export default Essential
