import { useEffect, useState } from "react";
import { products } from "@prisma/client";

const TAKE = 9;

export default function Products() {
  const [skip, setSkip] = useState(0);
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    fetch(`/api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, []);

  return (
    <div>
      {products && products.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}
