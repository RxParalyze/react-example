import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_USERS = [
  {
    id: 'u1',
    username: 'Steve',
    age: 21
  }
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
