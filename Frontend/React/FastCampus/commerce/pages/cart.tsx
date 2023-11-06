import { CountControl } from "components/CountControl";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { IconRefresh, IconX } from "@tabler/icons";

interface CartItem {
  name: string;
  productId: number;
  price: number;
  quantity: number;
  amount: number;
  image_url: string;
}

export default function Cart() {
  const [data, setData] = useState<CartItem[]>([]);
  const diliveryAmount = 5000;
  const discountAmount = 0;
  const amount = useMemo(() => {
    return data
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0);
  }, [data]);

  useEffect(() => {
    const mockData = [
      {
        name: "멋드러진 신발",
        productId: 57,
        price: 20000,
        quantity: 2,
        amount: 40000,
        image_url:
          "https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_nike_air-more-uptempo-96_DH8011-100.view_1_720x.jpg",
      },
      {
        name: "느낌있는 후드",
        productId: 91,
        price: 102302,
        quantity: 1,
        amount: 102302,
        image_url:
          "https://cdn.shopify.com/s/files/1/0282/5850/products/apparel_tops_undefeated_stencil-logo-pullover-hood_20078.color_black.view_1_720x.jpg",
      },
    ];

    setData(mockData);
  }, []);

  return (
    <div>
      <span className="text-3xl mb-3">Cart ({data.length})</span>
      <div className="flex">
        <div className="flex flex-col p-4 space-y-4 flex-1">
          {data.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
        <div className="px-4">
          <div
            className="flex flex-col p-4 space-y-4"
            style={{ minWidth: 300, border: "1px solid grey" }}
          >
            <div>Info</div>
            <Row>
              <span>금액</span>
              <span>{amount.toLocaleString("ko-kr")} 원</span>
            </Row>
            <Row>
              <span>배송비</span>
              <span>{diliveryAmount.toLocaleString("ko-kr")} 원</span>
            </Row>
            <Row>
              <span>할인 금액</span>
              <span>{discountAmount.toLocaleString("ko-kr")} 원</span>
            </Row>
            <Row>
              <span className="font-semibold">결제 금액</span>
              <span className="font-semibold text-red-500">
                {(amount + diliveryAmount - discountAmount).toLocaleString(
                  "ko-kr"
                )}{" "}
                원
              </span>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

const Item = (props: CartItem) => {
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity);
  const [amount, setAmount] = useState<number>(props.quantity);

  useEffect(() => {
    if (quantity) {
      setAmount(quantity * props.price);
    }
  }, [quantity, props.price]);

  const handleUpdate = () => {
    // TODO: 장바구니에서 수정 기능 구현
    alert(`장바구니에서 ${props.name} 수정`);
  };

  const handleDelete = () => {
    // TODO: 장바구니에서 삭제 기능 구현
    alert(`장바구니에서 ${props.name} 삭제`);
  };

  return (
    <div className="w-full flex p-4" style={{ borderBottom: "1px solid grey" }}>
      <Image src={props.image_url} width={155} height={195} alt={props.name} />
      <div className="flex flex-col ml-4">
        <span className="font-semibold mb-2">{props.name}</span>
        <span className="mb-auto">
          가격: {props.price.toLocaleString("ko-kr")}원
        </span>
        <div className="flex items-center space-x-4">
          <CountControl value={quantity} setValue={setQuantity} max={20} />
          <IconRefresh onClick={handleUpdate} />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <span>{amount.toLocaleString("ko-kr")}원</span>
        <IconX onClick={handleDelete} />
      </div>
    </div>
  );
};

const Row = styled.div`
  display: flex;
  * ~ * {
    margin-left: auto;
  }
`;
