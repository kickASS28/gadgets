import { Fragment } from "react";
import Head from "next/head";
import FinanceNews from "../../../components/apps/LoanCalculator/FinanceNews";

const FinanceNewsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Finance News</title>
        <meta
          name="description"
          content="Get Most trending finance news and updates world-wide"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <FinanceNews />
    </Fragment>
  );
};

export default FinanceNewsPage;
