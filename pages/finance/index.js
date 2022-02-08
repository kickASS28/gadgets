import classes from "../health/index.module.css";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import FinanceIcon from "../../components/UI/Icons/FinanceIcon";

const FinancePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Gadgets-Finance</title>
        <meta
          name="description"
          content="One App for your financial needs. (Loan-Interest Calculator, Financ news and updates)"
        />
      </Head>
      <div className={classes.container}>
        <h1>Finance</h1>
        <FinanceIcon fill="rgb(178, 201, 47)" width="70" />
      </div>
      <div className={classes.app_container}>
        <h3>Tell us what are you looking for</h3>
        <div className={classes.app_flex}>
          <div className={classes.traclorie}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="percentage"
                role="img"
                viewBox="0 0 384 512"
                width="36"
              >
                <path
                  fill="#343a40"
                  d="M109.25 173.25c24.99-24.99 24.99-65.52 0-90.51-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 25 25 65.52 25 90.51 0zm256 165.49c-24.99-24.99-65.52-24.99-90.51 0-24.99 24.99-24.99 65.52 0 90.51 24.99 24.99 65.52 24.99 90.51 0 25-24.99 25-65.51 0-90.51zm-1.94-231.43l-22.62-22.62c-12.5-12.5-32.76-12.5-45.25 0L20.69 359.44c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c12.5 12.5 32.76 12.5 45.25 0l274.75-274.75c12.5-12.49 12.5-32.75 0-45.25z"
                />
              </svg>
              Loan CalC
            </h5>
            <div className={classes.description}>
              <p>
                Calculate interest based on amount, time period, and interest
                rate.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/finance/loanCalculator">
                Take me there &#x02192;
              </Link>
            </div>
          </div>
          <div className={classes.bmicalc}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="newspaper"
                role="img"
                viewBox="0 0 576 512"
                width="60"
              >
                <path
                  fill="#343a40"
                  d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"
                />
              </svg>
              News App
            </h5>
            <div className={classes.description}>
              <p>
                Get latest news, stock market and Crypto updates, and much more.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/finance/news">Take me there &#x02192;</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FinancePage;
