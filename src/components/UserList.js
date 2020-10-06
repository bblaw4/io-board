import React from "react";
import User from "./User";

function UserList({ users, updateUser }) {
  return (
    <div>
      <h1>1 SOCS MDT</h1>
      <div className="parentDiv">
        {users.map((user) => (
          <User key={user.id} data={user} updateUser={updateUser} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
