import { Inter } from "@next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  notFound();
  return <h1>홈페이지다!!</h1>;
}
