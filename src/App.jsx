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
import ClassComponent from "../components/ClassComponent";
import ReactRouter from "../components/ReactRouter";
import NavigateRoute from "../components/NavigateRoute";

function App() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <ReactRouter />
        {/*         
        <UseState />
        <UseReducer />
        <UseContext />
        <UseMemo />
        <UseCallback />
        <UseEffect />
        <UseRef />
        <UseId />
        <UseCustom />
        <ClassComponent /> */}
      </div>
    </>
  );
}

export default App;
