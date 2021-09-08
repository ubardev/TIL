import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';
import { CSSTransition } from "react-transition-group";
import { Nav } from "react-bootstrap";
import {connect} from "react-redux";

const Detail = ({ shoes, 재고, 재고변경, dispatch }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [inputData, setInputData] = useState('');

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => { setShowAlert(false) }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onChangeInputData = (e) => {
    setInputData(e.target.value);
  };

  let { id } = useParams();
  let shoe = shoes.find(shoe => shoe.id === parseInt(id));
  let history = useHistory();

  return (
    <div className="container">
      {inputData}<input value={inputData} onChange={onChangeInputData} />
      {
        showAlert ?
          <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
          : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={ 'https://codingapple1.github.io/shop/shoes' + (shoe.id + 1) + '.jpg' } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>

          <Info 재고={재고} />

          <button className="btn btn-danger" onClick={() => {
            재고변경([9,10,11]);
            dispatch({type: '항목추가', payload: {id:2, name:'새로운상품', quan:1}});
            history.push('/cart');
          }}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0); }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1); }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>

    </div>
  );
};

const TabContent = ({ 누른탭, 스위치변경 }) => {
  useEffect(() => {
    스위치변경(true);
  });

  if (누른탭 === 0) {
    return <div>0번째 내용입니다.</div>
  } else if(누른탭 === 1) {
    return <div>1번째 내용입니다.</div>
  } else if(누른탭 === 2) {
    return <div>2번째 내용입니다.</div>
  }
}

const Info = ({ 재고 }) => {
  return (
    <>
      <p>재고 : {재고[0]}</p>
    </>
  )
}

function state를props화(state){
  return {
    state : state.reducer,
    alert열렸니: state.reducer2,
  }
}

export default connect(state를props화)(Detail);

