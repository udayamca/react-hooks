import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(100);
  const increase = (value) => {
    setCount((prev) => prev + value);
  };
  const decrease = (value) => {
    setCount((prev) => prev - value);
  };
  return (
    <>
      <div className="usestate" style={{ textAlign: "left" }}>
        <h2>useState</h2>
        <div className="usestate-cont">
          useState — stores a value inside a component. Calling the setter
          re-renders the component with the new value. For objects, always
          spread previous state:{" "}
          <span>setUser(prev =&gt; ( ...prev, age : 26 ))</span>. useState lets
          a component remember values between renders. It returns a pair: the
          current value and a setter function. Calling the setter triggers a
          re-render with the new value.
        </div>
        <br />
        <div style={{ fontWeight: "bold" }}>Count: {count}</div>
        <button onClick={() => increase(100)}>Increase</button>
        <button onClick={() => decrease(50)}>Decrease</button>
      </div>
      <br />
      <hr
        style={{
          width: "100%",
          height: "1px",
          color: "blue",
          borderTop: "1px solid cornflowerblue",
        }}
      />
      <br />
    </>
  );
}
