import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Status from "./components/Status";

function App() {
  // state
  const [users, setUsers] = useState([]);
  // add a user
  const addUsers = (data) => {
    data.id = Math.random();
    setUsers([...users, data]);
  };
  const updateUser = (id, data, rest) => {
    // find the user
    const found = users.find((user) => user.id === id);
    // update the reason property & status
    found.reason = data;
    if (data !== "Available") {
      found.status = false;
    } else {
      found.status = true;
    }
    // remove the found
    users.filter((u) => u.id !== id);

    // create new user with id, data and rest
    const newUser = {
      id,
      rank: rest.rank,
      status: rest.status,
      lastname: rest.lastname,
      reason: rest.reason,
    };
    // update the state
    console.log([...users, newUser]);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <AddUser addUsers={addUsers} />
            <Status users={users} />
          </div>
          <div className="col-sm">
            <UserList users={users} updateUser={updateUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
