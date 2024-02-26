import React from "react";
import { useState, useEffect } from "react";

function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>ЮсерНэйм: {item.username} </p>
          <p>Нэйм: {item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UseEffect;
