import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [extras, setextras] = useState([]);
  const [Postdata, setPostdata] = useState([]);

  const postData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostdata(data));
  };

  const fetchUserData = () => {
    fetch("//localhost:8001/get_data")
      // .then(response => {
      //   return response.json()
      // })
      // .then(data => {
      //   console.log(data)
      //   settoppings(data['topping'])
      // })

      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setextras(data["extra"]);
      });
  };

  useEffect(() => {
    fetchUserData();
    postData();
  }, []);

  {
    /* {toppings.length && (
        <ul>
          {toppings.map(topping => (
            <li key={topping.id}>Topping Name : {topping.type}</li>
          ))}
        </ul>
      )} */
  }
  return (
    <div>
      {extras.length && (
        <ul>
          {extras.map((extra) => (
            <li key={extra.id}>Extra Name : {extra.type}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchApi;
