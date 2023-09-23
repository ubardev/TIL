import Image from "next/image";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
