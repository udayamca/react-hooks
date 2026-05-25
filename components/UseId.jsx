import { useId } from "react";

export default function UseId() {
  const userName = useId();
  return (
    <>
      <div className="useid" style={{ textAlign: "left" }}>
        <h2>useId</h2>
        <div className="useid-cont">
          useid — useId is generate unique id. Its a replacement of
          useOpaqueIdenfier usually we use Math.random() for generate id. Now
          useId can be replace math.random()
        </div>
        <br />
        <div style={{ fontWeight: "bold" }}>
          do not use useId id on map keys
        </div>
        <br />
        <div>
          <label htmlFor={userName}>Name: </label>
          <input id={userName} type="text" placeholder="enter your name" />
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
      </div>
    </>
  );
}
