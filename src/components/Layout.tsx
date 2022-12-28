import { type ReactNode } from "react";
import Head from "../pages/head";

import { Footer, Navbar } from ".";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      {/* <Head /> */}

      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

// using HOC.
export default Layout;
