import useCustomFetch from "./useCustomFetch";

export default function UseCustom() {
  const data = useCustomFetch("https://jsonplaceholder.typicode.com/todos/");
  return (
    <>
      <div className="usecustom" style={{ textAlign: "left" }}>
        <h2>useCustom</h2>
        <div className="usecustom-cont">
          <p>
            Custom hooks — functions starting with use that call other hooks
            inside. They extract reusable stateful logic (e.g. useWindowWidth,
            useFetch, useDebounce) without changing component structure.
          </p>{" "}
          <br />
          <p>
            Custom hooks are regular JavaScript functions whose name starts with
            use and that call other hooks internally. They let you extract and
            reuse stateful logic across multiple components.
          </p>
        </div>
        <br />
      </div>
      <div>
        <ul style={{ textAlign: "left" }}>
          {data &&
            data
              .filter((item) => item.id <= "10")
              .map((todo) => {
                return <li key={todo.id}>{todo.title}</li>;
              })}
        </ul>
        {}
      </div>
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
