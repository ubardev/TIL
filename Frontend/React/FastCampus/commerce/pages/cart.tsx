import {CountControl} from 'components/CountControl';
import Image from 'next/image';
import {useEffect, useMemo, useState} from 'react';
import {IconRefresh, IconX} from '@tabler/icons';

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
        <div>
          {data.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
        <div>Info</div>
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
          <IconRefresh />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <span>{amount.toLocaleString("ko-kr")}원</span>
        <IconX />
      </div>
    </div>
  );
};
