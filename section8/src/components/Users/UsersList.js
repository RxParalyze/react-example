import React, { useState } from "react";

import User from "./User";

const UsersList = (props) => {
  if(props.users.length === 0) {
    return <h2 className="users-list__fallback">No Users Found</h2>;
  };

  return (
    <ul className="users-list">
        {props.users.map((user) => (
            <User
                key={user.id}
                username={user.username}
                age={user.age}
            />
        ))}
    </ul>
  );
};

export default UsersList;
