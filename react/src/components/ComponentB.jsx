import ComponentC from "./componentC";

const ComponentB = () => {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <h2>Component B</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
