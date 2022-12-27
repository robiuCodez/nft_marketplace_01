import { type ReactNode } from "react";
import Head from "./head";

import "../styles/globals.css";
import { Footer, Navbar } from "../components";

// import trpc
import { trpc } from "../utils/trpc";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head />

      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

// using HOC.
export default trpc.withTRPC(Layout);
