import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
