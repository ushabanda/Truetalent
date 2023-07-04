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
          <th>ID</th>
          <th>Category</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Location</th>
          <th>Registration Date</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map(user => 
            
            <tr key={user.id}>
              <td>{user['id']}</td>
              <td>{user['category']}</td>
              <td>{user['start_date']}</td>
              <td>{user['end_date']}</td>
              <td>{user['name']}</td>
              <td>{user['email']}</td>
              <td>{user['location']}</td>
              <td>{user['registration_date']}</td>
            </tr>
            ,console.log(users)
        )}
        
      </tbody>
    </table>
  );
};

export default FetchData;
