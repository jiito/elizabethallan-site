import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="flex items-center justify-center flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex items-center">{children}</div>
    <footer>
      <span className="text-gray-500">
        made with&nbsp;⚡&nbsp;by{" "}
        <a className="underline" href="https://benji.ar">
          benji.ar
        </a>
      </span>
    </footer>
  </div>
);

export default Layout;
