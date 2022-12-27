import { type ReactNode } from "react";
import Head from "./head";

import "../styles/globals.css";
import { Footer, Navbar } from "../components";

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

export default Layout;
