import { Inter } from "@next/font/google";
import os from "os";
import Counter from "@/components/Counter"; // 노드 APIs

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("안녕!");
  console.log("os.hostname() ==========>", os.hostname());

  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  );
}
