import { useState } from "react";
import "./App.css";
import UseState from "../components/UseState";
import UseReducer from "../components/UseReducer";
import UseContext from "../components/UseContext";
import UseMemo from "../components/UseMemo";

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <UseState />
      <UseReducer />
      <UseContext />
      <UseMemo />
    </>
  );
}

export default App;
