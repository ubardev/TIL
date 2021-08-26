import React, { userRef } from 'react';
import UserList from "./UserList";

function App() {
  const users = [
    {
      id: 1,
      username: '일',
      email: 'one@naver.com',
    },
    {
      id: 2,
      username: '이',
      email: 'two@naver.com',
    },
    {
      id: 3,
      username: '삼',
      email: 'three@naver.com',
    },
  ];

  const nextId = useRef(4);

  const onCreact = () => {
    console.log('nextId.current==========>', nextId.current);
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  );
}

export default App;
