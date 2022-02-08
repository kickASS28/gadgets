import classes from "./index.module.css";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import HeartIcon from "../../components/UI/Icons/HeartIcon";
const HealthPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Gadgets-Health</title>
        <meta
          name="description"
          content="One App that holds all health your needs. (Calorie Tracker, BMI Calculator, more)"
        />
      </Head>
      <div className={classes.container}>
        <h1>Health</h1>
        <HeartIcon fill="rgb(233, 47, 47)" width="70" />
        <h4>A life without health is like a river without water.</h4>
      </div>
      <div className={classes.app_container}>
        <h3>Tell us what are you looking for</h3>
        <div className={classes.app_flex}>
          <div className={classes.traclorie}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="chart-line"
                role="img"
                viewBox="0 0 512 512"
                width="52"
              >
                <path
                  fill="currentColor"
                  d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
                />
              </svg>
              Tracalories
            </h5>
            <div className={classes.description}>
              <p>
                Track your calorie intake, and compare with optimum calorie
                inake.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/health/tracalorie">Take me there &#x02192;</Link>
            </div>
          </div>
          <div className={classes.bmicalc}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="calculator"
                role="img"
                viewBox="0 0 448 512"
                width="46"
              >
                <path
                  fill="currentColor"
                  d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"
                />
              </svg>
              BMICalc App
            </h5>
            <div className={classes.description}>
              <p>
                Calculate BMI based on your hight and weight, Know what your
                body needs.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/health/bmicalc">Take me there &#x02192;</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HealthPage;
