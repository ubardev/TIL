import Link from "next/link";
import { getProducts } from "@/service/products";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`/products/${product}`}>{product}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
