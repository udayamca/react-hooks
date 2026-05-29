import { useState } from "react";

export default function MoveUpDown() {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const addUser = () => {
    const trimmedName = userName.trim();
    setUserInfo((prev) => [...prev, trimmedName]);
  };

  const moveUp = (index) => {
    const updateUserInfo = [...userInfo];

    [updateUserInfo[index - 1], updateUserInfo[index]] = [
      updateUserInfo[index],
      updateUserInfo[index - 1],
    ];

    setUserInfo(updateUserInfo);
  };

  const moveDown = (index) => {
    const updateUserInfo = [...userInfo];

    [updateUserInfo[index], updateUserInfo[index + 1]] = [
      updateUserInfo[index + 1],
      updateUserInfo[index],
    ];

    setUserInfo(updateUserInfo);
  };
  return (
    <>
      <div className="moveUpDown">
        <h2>Move Up Down</h2>
        <div className="userInfo">
          <div>
            <input
              type="text"
              placeholder="enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={addUser}>Add</button>
          </div>
        </div>
        <div className="userTable">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>User Name</th>
                <th>Move Up/Down</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.map(
                (user, index) =>
                  user !== "" && (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>{user}</td>
                      <td>
                        <div>
                          <button
                            onClick={() => moveUp(index)}
                            disabled={index === 0}
                          >
                            Up
                          </button>
                          <button
                            onClick={() => moveDown(index)}
                            disabled={index === userInfo.length - 1}
                          >
                            Down
                          </button>
                        </div>
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
