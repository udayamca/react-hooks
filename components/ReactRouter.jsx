import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import NavigateRoute from "./NavigateRoute";
import UseCallback from "./UseCallback";
import UseContext from "./UseContext";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseId from "./UseId";
import UseCustom from "./UseCustom";
import ClassComponent from "./ClassComponent";
import Home from "./Home";
import HigherOrderComponent from "./HigherOrderComponent";
import CRUD from "./CRUD";

export default function ReactRouter() {
  return (
    <BrowserRouter>
      <div className="router">
        <div className="navbar" style={{ width: "20%" }}>
          <NavigateRoute />
        </div>
        <div className="routes" style={{ width: "80%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usestate" element={<UseState />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/usecallback" element={<UseCallback />} />
            <Route path="/usecontext" element={<UseContext />} />
            <Route path="/usereducer" element={<UseReducer />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/useid" element={<UseId />} />
            <Route path="/usecustom" element={<UseCustom />} />
            <Route path="/classcomponent" element={<ClassComponent />} />
            <Route path="/hoc" element={<HigherOrderComponent />} />
            <Route path="/crud" element={<CRUD />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
