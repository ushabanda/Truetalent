import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/users')  // Adjust the URL to match your Flask server
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          {/* Add more column headers based on your table structure */}
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map(user => 
            
            <tr key={user.id}>
              <td>{user.Name}</td>
              <td>{user.startdate}</td>
              {/* Add more table cells based on your table structure */}
            </tr>
        )}
      </tbody>
    </table>
  );
};

export default FetchData;
