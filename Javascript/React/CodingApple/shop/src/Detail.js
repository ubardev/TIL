import React from "react";
import { useHistory, useParams } from 'react-router-dom';

const Detail = ({ shoes }) => {

  let { id } = useParams();
  let shoe = shoes.find(shoe => shoe.id === parseInt(id));
  let history = useHistory();

  return (
    <div className="container">
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
