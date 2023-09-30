import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import type { Metadata } from "next";
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "우바의 블로그",
    template: "우바의 블로그 | %s",
  },
  description: "프론트엔드 개발자 우바의 블로그",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
