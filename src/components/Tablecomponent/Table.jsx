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
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Add more column headers if needed */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }  

export default Table;
