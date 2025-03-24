import { Link, type MetaFunction } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Home | wemake",
    },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
    </div>
  );
}
