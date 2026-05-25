import { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  const textRef = useRef();
  const [changeText, setChangeText] = useState("");
  const previousText = useRef("");

  const counter = () => {
    setCount((prev) => prev + 1);
  };

  const refCounter = () => {
    console.log("ref");
    refCount.current++;
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  useEffect(() => {
    previousText.current = changeText;
  }, [changeText]);
  return (
    <>
      <div className="useref" style={{ textAlign: "left" }}>
        <h2>useRef</h2>
        <div className="useref-cont">
          useRef — two jobs: grab a DOM element directly via useRef, or store a
          mutable value (like a timer ID) that doesn't trigger a re-render when
          changed. Value lives in .current.
        </div>
        <ul>
          <li>
            save data without re-render - whenever you update useRef value
            re-render will not happen and change wont see on the screen. If any
            state change happen the useRef change will reflect.
          </li>
          <li>DOM access - we can use focus event using useRef</li>
          <li>keep previous state reference on useRef</li>
        </ul>
        <br />
        <div style={{ fontWeight: "bold" }}>
          Count: {count} <button onClick={counter}>Counter</button>
        </div>
        <div className="flex " style={{ fontWeight: "bold" }}>
          Ref: {refCount.current}{" "}
          <button onClick={refCounter}>RefCounter</button>
        </div>
        <br />
        <div>
          using dom access (focus)
          <input type="text" placeholder="enter a text" ref={textRef} />
        </div>
        <br />
        <div>
          using previous text
          <div>
            <input
              type="text"
              onChange={(e) => setChangeText(e.target.value)}
            />
          </div>
          <div>Current text: {changeText}</div>
          <div>Previouse text: {previousText.current}</div>
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
