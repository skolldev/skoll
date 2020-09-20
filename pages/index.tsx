import Head from "next/head";
import { InnerLayout } from "../components/InnerLayout";

export const Home = (): JSX.Element => {
  return (
    <InnerLayout pageTitle="Dashboard">
      <Head>
        <title>SkollCoaching - Dashboard</title>
      </Head>
      Im the dashboard
    </InnerLayout>
  );
};

export default Home;
