import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = ({ shoes, 재고, 재고변경 }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [inputData, setInputData] = useState('');

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
          <img src={shoe.thumbnailUrl} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>

          <Info 재고={재고} />

          <button className="btn btn-danger" onClick={() => {
            재고변경([9,10,11]);
          }}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  );
};

const Info = ({ 재고 }) => {
  return (
    <>
      <p>재고 : {재고[0]}</p>
    </>
  )
}

export default Detail;
