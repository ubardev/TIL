import "../styles/globals.css";
import Header from "components/Header";
// import { CLIENT_ID } from "constants/googleAuth";
import { SessionProvider } from "next-auth/react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    // <GoogleOAuthProvider clientId={CLIENT_ID}>
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <div className="px-36">
          <Header />
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </SessionProvider>
    // </GoogleOAuthProvider>
  );
}

export default MyApp;
