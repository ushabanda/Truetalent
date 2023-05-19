import React, { useState,useEffect } from 'react';

const Table = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      
      
      setTableData(data);
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <table className='table'>
        <thead className='table-head'>
          <tr>
            <th className='job-class'>Job</th>
            <th className='skills'>Skills</th>
            <th>Location</th>
            <th>Company</th>
            <th>Job Type</th>
            <th>Experiance</th>
            {/* Add more column headers if needed */}
          </tr>
          <tr className='background'>
            <td className='position'>SharePoint Lead</td>
            <td>ReactJS, Rest API</td>
            <td>Hyderabad, Telangana</td>
            <td>Acuvate software pvt ltd</td>
            <td className='job-type'>Full Time</td>
            <td>6-15Yrs</td>
          </tr>
          <tr className='background'>
            <td>RPA Lead</td>
            <td>RPA, UI path</td>
            <td>Hyderabad, Telangana</td>
            <td>Acuvate software pvt ltd</td>
            <td>Full Time</td>
            <td>6-15Yrs</td>
          </tr>
          <tr className='background'>
            <td>Human Resources Manager</td>
            <td>leave policies, compensation benefits, HR protocols.</td>
            <td>Mohali, Punjab</td>
            <td>GenInvo technologies pvt. ltd.</td>
            <td>Full Time</td>
            <td>4-8Yrs</td>
          </tr>
          <tr className='background'>
            <td>CASA Officer</td>
            <td>Goal Oriented, Good communication skills, Networking, Sales, Verbal & Written Communication</td>
            <td>India, India</td>
            <td>Response Informatics</td>
            <td>Full Time</td>
            <td>0-1Yrs</td>
          </tr>
          <tr className='background'>
            <td>CASA Officer</td>
            <td>Goal Oriented, Good communication skills, Networking, Sales, Verbal & Written Communication</td>
            <td>India, India</td>
            <td>Response Informatics</td>
            <td>Full Time</td>
            <td>1-4Yrs</td>
          </tr>
          <tr className='background'>
            <td>Training Coordinator</td>
            <td>communication, Lab, Management Skill, Problem solving, Training, Verbal & Written Communication</td>
            <td>Bangalore, Karnataka</td>
            <td>NexionPro Services LLP</td>
            <td>Full Time</td>
            <td>2-2Yrs</td>
          </tr>
          <tr className='background'>
            <td>Training Coordinator</td>
            <td>communication, Lab, Management Skill, Problem solving, Training, Verbal & Written Communication</td>
            <td>Bangalore, Karnataka</td>
            <td>NexionPro Services LLP</td>
            <td>Full Time</td>
            <td>2-2Yrs</td>
          </tr>
          <tr className='background'>
            <td>Training Coordinator</td>
            <td>communication, Lab, Management Skill, Problem solving, Training, Verbal & Written Communication</td>
            <td>Bangalore, Karnataka</td>
            <td>NexionPro Services LLP</td>
            <td>Full Time</td>
            <td>2-2Yrs</td>
          </tr>
          <tr className='background'>
            <td>Training Coordinator</td>
            <td>communication, Lab, Management Skill, Problem solving, Training, Verbal & Written Communication</td>
            <td>Bangalore, Karnataka</td>
            <td>NexionPro Services LLP</td>
            <td>Full Time</td>
            <td>2-2Yrs</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>{item.data1}</td>
              <td>{item.data2}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }  

export default Table;
