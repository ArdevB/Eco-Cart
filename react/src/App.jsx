import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import ComponentA from "./components/componentA";
import ProductsTable from "./components/ProductsTable";

function App() {
  const [count, setCount] = useState(0);

  const titleRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(
    () => {
      console.log(count);
      console.log(titleRef);

      return () => {
        // console.log("cleanup");
      };
    },
    [count], // dependencies (state variables) that trigger the effect when they change
  );
  return (
    <div>
      <span>Count: {count}</span>

      <ComponentA />
      <hr />
      <button onClick={() => setCount(count + 1)}>Click</button>

      <h1 ref={titleRef}>Hello, World!</h1>

      <input type="text" ref={inputRef} />

      <Card title="iPhone 14 Pro" price={999} brand="Apple" />
      <Card title="Samsung Galaxy S23" price={899} brand="Samsung" />

      <ProductsTable />
    </div>
  );
}

export default App;
