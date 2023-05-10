import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./styles.css"

function Jobs() {
  return (
    <div>
      <div className='main-container'>
        <div className='searchbar'>
            <SearchIcon className='icon'/>
            <input type="search" placeholder='Skills' className="sub-contetent1"/>
        </div >
        <div  >
            <LocationOnIcon className='icon' />
            <input type="search" placeholder='City' className="sub-contetent2"/>
        </div>
<div className='submit'>
    <button type="submit" className='btn'>Find Jobs</button>
</div>
      </div>
      <div className='container'>
        <div className='container_one'>
          <h4>Filter Search</h4>
          <a to="#">Clear All</a>
        </div>
        <div>
          <form>
          <p>Location</p>
          <div>
            <input type="search" placeholder='City' className='city'/>
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
          </form>
        
        </div>
        
      </div>
    </div>
  )
}

export default Jobs
