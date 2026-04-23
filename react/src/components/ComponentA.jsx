import { useDispatch, useSelector } from "react-redux";
import ComponentB from "./componentB";
import { decrement, increment } from "../redux/counterSlice";

const ComponentA = () => {
  const dispatch = useDispatch();

  const { count, cube } = useSelector((state) => state.counter);

  function increaseCounter() {
    dispatch(increment());
    console.log("Increase Counter");
  }

  function decreaseCounter() {
    dispatch(decrement());
    console.log("Decrease Counter");
  }

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>Component A</h2>
      <span>Value of A: {count}</span>
      <span>Value of C: {cube}</span>

      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>
      </div>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
