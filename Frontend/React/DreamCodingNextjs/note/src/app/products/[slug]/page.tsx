import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/service/products";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function PantsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product} 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    slug: product,
  }));
}
