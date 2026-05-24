import { useState, useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const calculation = useMemo(() => simpleCalculation(count), [count]);

  const newTodo = () => {
    setTodos((prev) => [...prev, "New Todo"]);
  };

  return (
    <>
      <div className="usememo" style={{ textAlign: "left" }}>
        <h2>useMemo</h2>
        <div className="usememo-cont">
          <p>
            useMemo memoizes the result of an expensive calculation. It only
            recomputes when its dependencies change, preventing unnecessary
            heavy work on every render.
          </p>
          <p>To boost the performance of the application.</p>
          <p>
            We need to use useMemo - costly operation (either memory or time)
            with un-necessary re-renders. this is degrade the app performance .
          </p>
          <p>
            Usage: use only memoization only for optimization, avoid over usage
          </p>
        </div>
        <br />
        <div>
          <div>Count: {count}</div>
          <div>
            <button onClick={increase}>Increase Count</button>
          </div>
        </div>
        <div>
          <div>Calculation {calculation}</div>
          <p>simple calculation should only execute when count got executed.</p>
        </div>
        <div>
          <h3>Todo</h3>
          <p>
            When add todo execute the simple calculation should not execute.
          </p>
          <button onClick={newTodo}>Add Todo</button>
          {todos &&
            todos.map((todo, index) => {
              return <div key={index}>{todo}</div>;
            })}
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

const simpleCalculation = (count) => {
  console.log("simpleCalculation");
  for (let i = 0; i < 10000; i++) {
    count += i;
  }
  return count;
};
