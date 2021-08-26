import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {
        users.map(
          user => (<User key={user.id} user={user} />)
        )
      }
    </div>
  );
}

export default UserList;
