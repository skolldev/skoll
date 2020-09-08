import Head from "next/head"

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Skoll</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
    </Head>
    <div className="w-full"></div>
  </div>
)

export default Home
