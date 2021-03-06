import classes from "./index.module.css";
import BMICalC from "../../../components/apps/BMICalc/BMICalC";
import { Fragment } from "react";
import Head from "next/head";

const BMICalCPage = () => {
  return (
    <Fragment>
      <Head>
        <title>BMI Calculator</title>
        <meta
          name="description"
          content="Calculate your body mass index(BMI), compare your BMI to find what your body needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <div className={classes.container}>
        <BMICalC />
      </div>
    </Fragment>
  );
};

export default BMICalCPage;
