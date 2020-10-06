import React, { useState } from "react";

function AddUser({ addUsers }) {
  // state
  const [rank, setRank] = useState("");
  const [lastname, setLastname] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { rank, lastname, status: true, reason: "" };
    if (!lastname.trim() || !rank.trim()) {
      alert("Rank and Lastname Required");
      setRank("");
      setLastname("");
    } else {
      addUsers(newUser);
      setRank("");
      setLastname("");
    }
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            placeholder="Rank"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
