import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByValue } from "../redux/counterSlice";

const ComponentD = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  function increaseByValue() {
    dispatch(incrementByValue(parseInt(value)));
  }
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>Component D</h2>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={increaseByValue}>Increase By Value</button>
    </div>
  );
};

export default ComponentD;
