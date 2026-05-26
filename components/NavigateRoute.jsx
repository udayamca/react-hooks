import { Link } from "react-router-dom";

export default function NavigateRoute() {
  return (
    <>
      <div className="nav">
        <div>
          <h2>React Hooks</h2>
        </div>
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "grid",
              margin: "0",
              padding: "0",
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usestate">useState</Link>
            </li>
            <li>
              <Link to="/useeffect">useEffect</Link>
            </li>
            <li>
              <Link to="/usememo">useMemo</Link>
            </li>
            <li>
              <Link to="/usecallback">useCallback</Link>
            </li>
            <li>
              <Link to="/usecontext">UseContext</Link>
            </li>
            <li>
              <Link to="/usereducer">UseReducer</Link>
            </li>
            <li>
              <Link to="/useref">UseRef</Link>
            </li>
            <li>
              <Link to="/useid">UseId</Link>
            </li>
            <li>
              <Link to="/usecustom">UseCustom</Link>
            </li>
            <li>
              <Link to="/classcomponent">ClassComponent</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
