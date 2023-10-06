import { CATEGORY_MAP, TAKE } from "constants/products";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Pagination } from "@mantine/core";
import { categories, products } from "@prisma/client";

export default function Products() {
  const [activePage, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState<categories[]>([]);
  const [products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    fetch("/api/get-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.items));
    fetch("/api/get-products-count")
      .then((res) => res.json())
      .then((data) => setTotal(Math.ceil(data.item / TAKE)));
    fetch(`/api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, []);

  useEffect(() => {
    const skip = TAKE * (activePage - 1);

    fetch(`/api/get-products?skip=${skip}&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, [activePage]);

  return (
    <div className="px-36 my-36">
      {categories &&
        categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id} style={{ maxWidth: 310 }}>
              <Image
                className="rounded"
                src={item.image_url || ""}
                alt={item.name}
                width={310}
                height={390}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString("ko-KR")}원
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
      {/* <button
        className="w-full rounded mt-20 bg-zinc-200 p-4"
        onClick={getProducts}
      >
        더보기
      </button> */}
      <div className="w-full flex mt-5">
        <Pagination
          className="m-auto"
          page={activePage}
          onChange={setPage}
          total={total}
        />
      </div>
    </div>
  );
}
