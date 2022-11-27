import React from 'react';

export default function AppForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">이메일:</label>
      <input type="email" id="email" name="email" />
      <button>Submit</button>
    </form>
  );
}
