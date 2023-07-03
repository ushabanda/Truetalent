import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [extras, setextras] = useState([]);
  const [data, setdata] = useState([]);
  const [Postdata, setPostdata] = useState([]);

//   const postData = () => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: "React POST Request Example" }),
//     };

//     fetch("https://reqres.in/api/posts", requestOptions)
//       .then((response) => response.json())
//       .then((data) => setPostdata(data));
//   };

//   const fetchUserData = () => {
//     fetch("//localhost:8001/get_data")
//       // .then(response => {
//       //   return response.json()
//       // })
//       // .then(data => {
//       //   console.log(data)
//       //   settoppings(data['topping'])
//       // })

//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setextras(data["extra"]);
//       });
//   };

//   const fetchDBData = () => {
//     fetch("//localhost:8001/get_sql_data")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setdbdata(data);
//       });
//   };

//   useEffect(() => {
//     fetchUserData();
//     postData();
//     fetchDBData();
//   }, []);

//   return (
//     <div>
//       {extras.length && (
//         <ul>
//           {extras.map((extra) => (
//             <li key={extra.id}>Extra Name : {extra.type}</li>
//           ))}
//         </ul>
//       )}

//       <br></br>
//       <h2>Get DB Data</h2>
//       <br></br>

//         {/* for (let winner in dbdata) {
//           <div>Name : {winner[3]}</div>
//         } */}

//         {/* {dbdata.length && ({dbdata.map()})} */}
//     </div>
//   );
// };

useEffect(() => {
  fetch('http://localhost:8001/data')  // Adjust the URL to match your Flask server
    .then(response => response.json())
    .then(result => setdata(data));
}, []);

// if (!dbdatas) {
//   return <div>unable to find data or data is null</div>;
// }

<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          {/* Add more column headers based on your table structure */}
        </tr>
      </thead>
      <tbody>
        {data.length>0 &&
        data.map((a) => (
          <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.startdate}</td>
            {/* Add more table cells based on your table structure */}
          </tr>
        ))}
      </tbody>
    </table>
  
        }
        

export default FetchApi;
