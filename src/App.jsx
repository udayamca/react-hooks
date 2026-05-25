import { useState } from "react";
import "./App.css";
import UseState from "../components/UseState";
import UseReducer from "../components/UseReducer";
import UseContext from "../components/UseContext";
import UseMemo from "../components/UseMemo";
import UseCallback from "../components/UseCallback";
import UseEffect from "../components/UseEffect";
import UseRef from "../components/UseRef";
import UseId from "../components/UseId";
import UseCustom from "../components/UseCustom";

function App() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1>React Hooks</h1>
        <UseState />
        <UseReducer />
        <UseContext />
        <UseMemo />
        <UseCallback />
        <UseEffect />
        <UseRef />
        <UseId />
        <UseCustom />
      </div>
    </>
  );
}

export default App;
