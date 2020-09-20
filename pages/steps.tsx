import Head from "next/head";
import { InnerLayout } from "../components/InnerLayout";
import { Cards, CardDetails } from "../components/Cards";

const cards: CardDetails[] = [
  {
    title: "Durchschnitt",
    increased: true,
    currentNumber: "7500",
    previousNumber: "7300",
    percentageChange: 12
  },
  {
    title: "Durchschnitt",
    increased: false,
    currentNumber: "7500",
    previousNumber: "7300",
    percentageChange: 12
  },
  {
    title: "Durchschnitt",
    increased: true,
    currentNumber: "7500",
    previousNumber: "7300",
    percentageChange: 12
  }
];

export const Steps = () => {
  return (
    <InnerLayout pageTitle="Schritte">
      <Head>
        <title>SkollCoaching - Schritte</title>
      </Head>
      <Cards timespan="Letzte 7 Tage" cards={cards} />
    </InnerLayout>
  );
};

export default Steps;
