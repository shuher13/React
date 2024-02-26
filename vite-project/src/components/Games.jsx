import React from "react";
import { useState, useEffect } from "react";

const Games = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data_games");
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
          <p>---------------------------------</p>
          <p>Игра: {item.game} </p>
          <p>Создатель: {item.creator}</p>
          <p>Год Выпуска: {item.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Games;
