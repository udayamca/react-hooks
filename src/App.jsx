import { useState } from "react";
import "./App.css";
import UseState from "../components/UseState";
import UseReducer from "../components/UseReducer";
import UseContext from "../components/UseContext";
import UseMemo from "../components/UseMemo";
import UseCallback from "../components/UseCallback";
import UseEffect from "../components/useEffect";
import UseRef from "../components/UseRef";
import UseId from "../components/UseId";

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      {/* <UseState />
      <UseReducer />
      <UseContext />
      <UseMemo />
      <UseCallback />
      <UseEffect />
      <UseRef /> */}
      <UseId />
    </>
  );
}

export default App;
