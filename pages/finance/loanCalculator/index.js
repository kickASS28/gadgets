import { Fragment } from "react";
import Head from "next/head";
import LoanCalculator from "../../../components/apps/LoanCalculator/LoanCalculator";

const loanCalculatorPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Loan Calculator</title>
        <meta
          name="description"
          content="Calculte Total Amount, Total Interest and montly installment amout based on interest rate and time to repay."
        />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <LoanCalculator />
    </Fragment>
  );
};

export default loanCalculatorPage;
