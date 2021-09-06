import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = ({ shoes }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => { setShowAlert(false) }, 2000);
    console.log('1111111 ==========> ', 1111111);
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
          <img src={shoe.thumbnailUrl} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
