import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const Component1 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 1</h2>
      <div>User Name is {user}</div>
      <Component2 />
    </>
  );
};

export const Component2 = () => {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
};

export const Component3 = () => {
  return (
    <>
      <h2>Component 3</h2>
      <Component4 />
    </>
  );
};

export const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 5</h2>
      <div>User Name is {user}</div>
    </>
  );
};

export const Component4 = () => {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 />
    </>
  );
};

export default function UseContext() {
  const [user, setUser] = useState("Udaya");

  return (
    <>
      <div className="usestate" style={{ textAlign: "left" }}>
        <h2>useContext</h2>
        <div className="usestate-cont">
          Context lets you broadcast a value to any descendant without threading
          props through every layer. Create a context, wrap the tree in a
          Provider, consume with useContext. useContext is use to avoid prop
          drilling. you can access the state to any component.
        </div>
        <br />
        <UserContext.Provider value={user}>
          <Component1 />
        </UserContext.Provider>
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
