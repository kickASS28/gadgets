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
      </Head>
      <FinanceNews />
    </Fragment>
  );
};

export default FinanceNewsPage;
