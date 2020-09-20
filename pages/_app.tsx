import React from "react";
import "../css/tailwind.css";
import { Layout } from "../components/Layout";
import { ReactQueryDevtools } from "react-query-devtools";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </Layout>
  );
}
