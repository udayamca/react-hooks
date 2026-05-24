import { useCallback, useState } from "react";
import HeadingComponent from "./sub-components/HeadingComponent";
import ButtonComponent from "./sub-components/ButtonComponent";
import InfoComponent from "./sub-components/InfoComponent";

export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(100);

  const increase1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const increase2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [count2]);

  return (
    <>
      <div className="UseCallback" style={{ textAlign: "left" }}>
        <h2>UseCallback</h2>
        <div className="UseCallback-cont">
          <p>
            useCallback — memoizes a function definition. Prevents a new
            function reference from being created on every render, which would
            cause child components to re-render unnecessarily.
          </p>{" "}
          <br />
          <p>
            Referrential equality: two function with same functional operation
            is not equal, when we compare the functions, because of reference
            comparison. because of reference inequliity the render happens on
            each function. to fix the rerender issue we are using useCallback
            hook
          </p>{" "}
          <br />
          <p>
            memo: when we are not using any props, local state or global state
            on the page still the rerener will happen, to avoid the rerender we
            can use memo. memo is a high order function. <br />
            when ever we pass a function to on a component memo won't work. to
            fix that we need to use useCallback.
          </p>{" "}
          <br />
          <p>To boost the performance of the application.</p> <br />
          <p>
            We need to use UseCallback - costly operation (either memory or
            time) with un-necessary re-renders. this is degrade the app
            performance .
          </p>{" "}
          <br />
          <p>
            Usage: use only memoization only for optimization, avoid over usage
          </p>
        </div>
        <br />
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "8px",
          }}
        >
          <HeadingComponent />
          <InfoComponent title="Component1" count={count1} />
          <ButtonComponent title="Button 1" eventHandler={increase1} />
          <InfoComponent title="Component2" count={count2} />
          <ButtonComponent title="Button 2" eventHandler={increase2} />
        </div>
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
