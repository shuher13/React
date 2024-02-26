import React from "react";
import { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
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
          <p>ИМЯ: {item.username} </p>
          <p>ПОЧТА: {item.email}</p>
          <p>Я пришёл сюда в: {item.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
