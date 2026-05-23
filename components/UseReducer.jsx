import { useReducer, useState } from "react";

export default function UseReducer() {
  const iniitalValue = 1000;
  const transactionReducer = (state, action) => {
    switch (action.type) {
      case "WITHDRAW":
        return state + action.payload;
      case "DEPOSIT":
        return state - action.payload;
      default:
        return state;
    }
  };

  const withdraw = (value) => {
    return dispatch({ type: "WITHDRAW", payload: value });
  };

  const deposit = (value) => {
    return dispatch({ type: "DEPOSIT", payload: value });
  };

  const [state, dispatch] = useReducer(transactionReducer, iniitalValue);

  return (
    <>
      <div className="usestate" style={{ textAlign: "left" }}>
        <h2>useReducer</h2>
        <div className="usestate-cont">
          useReducer manages state through a pure reducer function, similar to
          Redux. <br /> State can be in local state. only this component can be
          used. <br />
          Reducer is a controlled state and pure function.
        </div>
        <br />
        <div style={{ fontWeight: "bold" }}>Bank Balance : {state}</div>
        <button onClick={() => withdraw(1000)}>Withdraw</button>
        <button onClick={() => deposit(500)}>Deposit</button>
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
