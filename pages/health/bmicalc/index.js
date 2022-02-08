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
      </Head>
      <div className={classes.container}>
        <BMICalC />
      </div>
    </Fragment>
  );
};

export default BMICalCPage;
