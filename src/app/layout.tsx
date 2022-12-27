import { type ReactNode } from "react";
import Head from "./head";

import "../styles/globals.css"

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head />

      <main>
        <div>This is coming from Layout.</div>
        {children}
      </main>
    </>
  );
};

export default Layout;
