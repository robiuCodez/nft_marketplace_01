import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";

// using react query devTools
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../styles/globals.css";
import { Layout } from "../components";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools position="bottom-right" />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
