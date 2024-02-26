import React from "react";
import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Тута ничего не написано");
  const [selectedOption, setSelectedOption] = useState("option1");

  function HandleClick() {
    setCount(count + 1);
  }
  function HandleChange(e) {
    setText(e.target.value);
  }
  function HandleOptionChange() {
    setSelectedOption("option1");
  }
  function HandleOptionChange2() {
    setSelectedOption("option2");
  }
  function HandleOptionChange3() {
    setSelectedOption("option3");
  }
  return (
    <div>
      <div>
        <h3>Hook CLICKER</h3>
        <p>{count}</p>
        <button onClick={HandleClick}> 😀😉😂 </button>
      </div>
      <div>
        <h3>hook input</h3>
        <input type="text" value={text} onChange={HandleChange} />
        <p>Вы ввели: {text} </p>
      </div>
      <div>
        <h3>option</h3>
        <input
          type="radio"
          id="radioinput1"
          value="radioinput1"
          checked={selectedOption === "option1"}
          onChange={HandleOptionChange}
        />
        <label htmlFor="radioinput1">Goat Simulator 3</label>
        <input
          type="radio"
          id="radioinput2"
          value="radioinput2"
          checked={selectedOption === "option2"}
          onChange={HandleOptionChange2}
        />
        <label htmlFor="radioinput2">CS2</label>
        <input
          type="radio"
          id="radioinput3"
          value="radioinput3"
          checked={selectedOption === "option3"}
          onChange={HandleOptionChange3}
        />
        <label htmlFor="radioinput3">Forza Horizon 4</label>
      </div>
    </div>
  );
};

export default UseState;
