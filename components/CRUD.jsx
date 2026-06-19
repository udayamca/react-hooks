import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function CRUD() {
  const [users, setUsers] = useState([]);
  const [buttonState, setButtonState] = useState("add");

  const [userInfo, setUserInfo] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const addUserInfo = () => {
    setUsers((currInfo) => [...currInfo, userInfo]);
    setUserInfo({
      id: uuid(),
      name: "",
      email: "",
      age: "",
      phone: "",
    });
  };

  const deletUserInfo = (id) => {
    setUsers((currInfo) =>
      currInfo.filter((user) => {
        return user.id !== id;
      }),
    );
  };

  const startEditing = (user) => {
    setUserInfo(user);
    setButtonState("edit");
  };

  const cancelEdit = () => {
    setUserInfo({
      name: "",
      email: "",
      age: "",
      phone: "",
    });
    setButtonState("add");
  };

  const updateUserInfo = () => {
    setUsers((currInfo) => {
      return currInfo.map((user) => {
        if (user.id === userInfo.id) {
          console.log("in");
          return userInfo;
        }
        return user;
      });
    });
    cancelEdit();
  };

  return (
    <>
      <div className="crud">
        <h2>CRUD Operations</h2>
        <div className="container">
          <div className="form">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter your age"
              name="age"
              value={userInfo.age}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Enter your phone number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
            />
            {buttonState && buttonState === "add" ? (
              <button onClick={addUserInfo}> Add </button>
            ) : (
              <div className="buttonDiv">
                <button onClick={updateUserInfo}>Update </button>
                <button onClick={cancelEdit}>Cancle</button>
              </div>
            )}
          </div>
        </div>
        <div className="userInfo">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map(
                  (user, index) =>
                    user.name !== "" && (
                      <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <button onClick={() => startEditing(user)}>
                            Edit
                          </button>
                          <button onClick={() => deletUserInfo(user.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ),
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
