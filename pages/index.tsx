import Head from "next/head";
import { ReactQueryDevtools } from "react-query-devtools";
import { Layout } from "../components/layout";

export const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Skoll</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Layout />
      <ReactQueryDevtools />
    </div>
  );
};

export default Home;
