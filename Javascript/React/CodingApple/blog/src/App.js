/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 신발 추천', '남자 모자 추천']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  let posts = '강남 고기 맛집';

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = '여자 코트 추천';
  //   글제목변경( newArray );
  // }

  const modal토글 = () => {
    modal변경(!modal);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={ () => { modal변경(true) } }> { 글제목[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <button onClick={ modal토글 }>버튼</button>

      {
        modal
        ? <Modal />
        : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
