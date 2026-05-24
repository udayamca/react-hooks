import { useEffect, useState } from "react";

export default function UseEffect() {
  const [postData, setPostData] = useState([]);
  //   const [error, setError] = useState("error testing ");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("response fails");
          return;
        } else {
          return response.json();
        }
      })
      .then((datas) => setPostData(datas))
      .catch((error) => setError(error.message));
  }, []);
  return (
    <>
      <div className="useeffect" style={{ textAlign: "left" }}>
        <h2>useEffect</h2>
        <div className="useeffect-cont">
          <p>
            useEffect cleanup — the function you return from useEffect runs
            before the component unmounts and before the effect re-runs. Use it
            to clear intervals, cancel fetches, and remove event listeners —
            otherwise you get memory leaks and stale callbacks.
          </p>
          <p>
            The function returned from useEffect is the cleanup. React calls it
            before the component unmounts, and also before re-running the effect
            on the next render. Use it to cancel subscriptions, clear timers,
            and remove event listeners.
          </p>
          <ul>
            <li>
              type1: execute all render and state change without dependency
              array
            </li>
            <li>
              type2: execute all render and only dependency array state change
            </li>
            <li>type3: execute only page render with empty dependency array</li>
            <li>type4: we need to use useEffect on any api call.</li>
          </ul>
          <div>
            {postData.map((data, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  textAlign: "left",
                  padding: "0 20px",
                  marginBottom: "-1px",
                }}
              >
                <div
                  style={{
                    width: "8%",
                    padding: "10px",
                    border: "1px solid ",
                    marginLeft: "-1px",
                  }}
                >
                  {index + 1}
                </div>
                <div
                  style={{
                    width: "40%",
                    padding: "10px",
                    border: "1px solid ",
                    marginLeft: "-1px",
                  }}
                >
                  {data.title}
                </div>
                <div
                  style={{
                    width: "52%",
                    padding: "10px",
                    border: "1px solid ",
                    marginLeft: "-1px",
                  }}
                >
                  {data.body}
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
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
