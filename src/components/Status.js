import React from "react";

const Status = ({ users }) => {
  return (
    <div className="mt-5">
      <h1>Status</h1>
      {`${users.length} User(s) signed in today.`}
    </div>
  );
};

export default Status;
