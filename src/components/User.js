import React, { useState } from "react";

function User({ data, updateUser }) {
  // state
  const [toggle, setToggle] = useState(false);
  const [reason, setReason] = useState("");

  return (
    <div className="card mb-3 ">
      <div className="card-header">
        <span>
          {data.rank} {data.lastname}
        </span>
      </div>
      <div className="card-body" onClick={() => setReason("")}>
        <h5 className="card-title">
          Status:{" "}
          {data.status ? (
            <span className="text-success">Available</span>
          ) : (
            <span className="text-danger">{data.reason}</span>
          )}
        </h5>

        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Change
        </button>
        {toggle ? (
          <input
            className="form-control mt-2"
            type="text"
            placeholder="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        ) : null}

        {reason ? (
          <button
            onClick={() => {
              setReason(reason);
              setToggle(!toggle);
              updateUser(data.id, reason, data);
            }}
            className="btn btn-success mt-2"
          >
            Update
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default User;
