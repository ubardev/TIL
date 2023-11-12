import CommentItem from "components/CommentItem";
import { CountControl } from "components/CountControl";
import CustomEditor from "components/Editor";
import { CATEGORY_MAP } from "constants/products";
import { format } from "date-fns";
import { convertFromRaw, EditorState } from "draft-js";
import { GetServerSidePropsContext } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Carousel from "nuka-carousel";
import { CART_QUERY_KEY } from "pages/cart";
import { ORDER_QUERY_KEY } from "pages/my";
import { useState } from "react";
import { Button } from "@mantine/core";
import { Cart, Comment, OrderItem, products } from "@prisma/client";
import { IconHeart, IconHeartbeat, IconShoppingCart } from "@tabler/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((response) => response.json())
    .then((data) => data.items);

  const comments = await fetch(
    `http://localhost:3000/api/get-comments?productId=${context.params?.id}`
  )
    .then((response) => response.json())
    .then((data) => data.items);

  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] },
      comments,
    },
  };
}

const WISHLIST_QUERY_KEY = "/api/get-wishlist";

export interface CommentItemType extends Comment, OrderItem {}

export default function Products(props: {
  product: products & { images: string[] };
  comments: CommentItemType[];
}) {
  const [index, setIndex] = useState(0);
  const { data: session } = useSession();
  const [quantity, setQuantity] = useState<number | undefined>(1);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { id: productId } = router.query;

  const [editorState] = useState<EditorState | undefined>(() =>
    props.product.contents
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.product.contents))
        )
      : EditorState.createEmpty()
  );

  const { data: wishlist } = useQuery([WISHLIST_QUERY_KEY], () =>
    fetch(WISHLIST_QUERY_KEY)
      .then((res) => res.json())
      .then((data) => data.item)
  );

  const { mutate } = useMutation<unknown, unknown, string, any>(
    (productId) =>
      fetch("/api/update-wishlist", {
        method: "POST",
        body: JSON.stringify({ productId }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: async (productId) => {
        await queryClient.cancelQueries([WISHLIST_QUERY_KEY]);

        // Snapshot the previous value
        const previous = queryClient.getQueryData([WISHLIST_QUERY_KEY]);

        // Optimistically update to the new value
        queryClient.setQueryData<string[]>([WISHLIST_QUERY_KEY], (old) =>
          old
            ? old.includes(String(productId))
              ? old.filter((id) => id !== String(productId))
              : old.concat(String(productId))
            : []
        );

        // Return a context object with the snapshotted value
        return { previous };
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([WISHLIST_QUERY_KEY], context.previous);
      },
      onSuccess: () => {
        queryClient.invalidateQueries([WISHLIST_QUERY_KEY]);
      },
    }
  );

  const { mutate: addCart } = useMutation<
    unknown,
    unknown,
    Omit<Cart, "id" | "userId">,
    any
  >(
    (item) =>
      fetch("/api/add-cart", {
        method: "POST",
        body: JSON.stringify({ item }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([CART_QUERY_KEY]);
      },
      onSuccess: () => {
        router.push("/cart");
      },
    }
  );

  const { mutate: addOrder } = useMutation<
    unknown,
    unknown,
    Omit<OrderItem, "id">[],
    any
  >(
    (items) =>
      fetch("/api/add-order", {
        method: "POST",
        body: JSON.stringify({ items }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([ORDER_QUERY_KEY]);
      },
      onSuccess: () => {
        router.push("/my");
      },
    }
  );

  const product = props.product;

  const validate = (type: "cart" | "order") => {
    if (quantity === null) {
      alert("최소 수량을 선택하세요.");
      return;
    }

    if (type === "cart") {
      addCart({
        productId: product.id,
        quantity: Number(quantity),
        amount: product.price * (quantity || 0),
      });
    }

    if (type === "order") {
      addOrder([
        {
          productId: product.id,
          quantity: Number(quantity),
          amount: product.price * (quantity || 0),
          price: product.price,
        },
      ]);
    }
  };

  const isWished = wishlist ? wishlist.includes(productId) : false;

  return (
    <>
      {product !== null && productId !== null ? (
        <div className="flex flex-row">
          <div style={{ maxWidth: 600, marginRight: 52 }}>
            <Carousel
              animation="fade"
              autoplay
              withoutControls
              wrapAround
              speed={10}
              slideIndex={index}
            >
              {product.images.map((url, index) => (
                <Image
                  key={`${url}-carousel-${index}`}
                  src={url}
                  alt="image"
                  width={620}
                  height={780}
                  layout="responsive"
                />
              ))}
            </Carousel>
            <div className="flex space-x-4 mt-2">
              {product.images.map((url, index) => (
                <div
                  key={`${url}-thumb-${index}`}
                  onClick={() => setIndex(index)}
                >
                  <Image src={url} alt="image" width={155} height={195} />
                </div>
              ))}
            </div>
            {editorState && <CustomEditor editorState={editorState} readOnly />}
            <div>
              <p className="text-2xl font-semibold">후기</p>
              {props.comments &&
                props.comments.map((comment, idx) => (
                  <CommentItem key={idx} item={comment} />
                ))}
            </div>
          </div>
          <div style={{ maxWidth: 600 }} className="flex flex-col space-y-6">
            <div className="text-lg text-zinc-400">
              {CATEGORY_MAP[product.category_id - 1]}
            </div>
            <div className="text-4xl font-semibold">{product.name}</div>
            <div className="text-lg">
              {product.price.toLocaleString("ko-kr")}원
            </div>
            <div>
              <span className="text-lg">수량</span>
              <CountControl value={quantity} setValue={setQuantity} max={200} />
            </div>
            <div className="flex space-x-3">
              <Button
                leftIcon={<IconShoppingCart size={20} stroke={1.5} />}
                style={{ backgroundColor: "black" }}
                radius="xl"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                }}
                onClick={() => {
                  if (!session) {
                    alert("로그인이 필요합니다!");
                    router.push("/auth/login");
                    return;
                  }
                  validate("cart");
                }}
              >
                장바구니
              </Button>
              <Button
                leftIcon={
                  isWished ? (
                    <IconHeartbeat size={20} stroke={1.5} />
                  ) : (
                    <IconHeart size={20} stroke={1.5} />
                  )
                }
                style={{ backgroundColor: isWished ? "red" : "grey" }}
                radius="xl"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                }}
                onClick={() => {
                  if (!session) {
                    alert("로그인이 필요합니다!");
                    router.push("/auth/login");
                    return;
                  }
                  mutate(String(productId));
                }}
              >
                찜하기
              </Button>
            </div>
            <Button
              style={{ backgroundColor: "black" }}
              radius="xl"
              size="md"
              styles={{
                root: { paddingRight: 14, height: 48 },
              }}
              onClick={() => {
                if (!session) {
                  alert("로그인이 필요합니다!");
                  router.push("/auth/login");
                  return;
                }
                validate("order");
              }}
            >
              구매하기
            </Button>
            <div className="text-sm text-zinc-300">
              등록 : {format(new Date(product.createdAt), "yyyy년 M월 d일")}
            </div>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}
