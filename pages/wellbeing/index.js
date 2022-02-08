import { Fragment } from "react";
import classes from "../health/index.module.css";
import Link from "next/link";
import Head from "next/head";
import WellBeingIcon from "../../components/UI/Icons/WellBeingIcon";

const WellbeingPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Gadgets-Well Being</title>
        <meta
          name="description"
          content="One App for your well being. (Track Weather, Weather reports, Sports news, and updates)"
        />
      </Head>
      <div className={classes.container}>
        <h1>Well-Being</h1>
        <WellBeingIcon fill="rgb(50, 156, 50)" width="70" />
        <h3>Life is more than just eating and sleeping.</h3>
      </div>
      <div className={classes.app_container}>
        <h3>Tell us what are you looking for</h3>
        <div className={classes.app_flex}>
          <div className={classes.traclorie}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="cloud-sun"
                role="img"
                viewBox="0 0 640 512"
                width="60"
              >
                <path
                  fill="currentColor"
                  d="M575.2 325.7c.2-1.9.8-3.7.8-5.6 0-35.3-28.7-64-64-64-12.6 0-24.2 3.8-34.1 10-17.6-38.8-56.5-66-101.9-66-61.8 0-112 50.1-112 112 0 3 .7 5.8.9 8.7-49.6 3.7-88.9 44.7-88.9 95.3 0 53 43 96 96 96h272c53 0 96-43 96-96 0-42.1-27.2-77.4-64.8-90.4zm-430.4-22.6c-43.7-43.7-43.7-114.7 0-158.3 43.7-43.7 114.7-43.7 158.4 0 9.7 9.7 16.9 20.9 22.3 32.7 9.8-3.7 20.1-6 30.7-7.5L386 81.1c4-11.9-7.3-23.1-19.2-19.2L279 91.2 237.5 8.4C232-2.8 216-2.8 210.4 8.4L169 91.2 81.1 61.9C69.3 58 58 69.3 61.9 81.1l29.3 87.8-82.8 41.5c-11.2 5.6-11.2 21.5 0 27.1l82.8 41.4-29.3 87.8c-4 11.9 7.3 23.1 19.2 19.2l76.1-25.3c6.1-12.4 14-23.7 23.6-33.5-13.1-5.4-25.4-13.4-36-24zm-4.8-79.2c0 40.8 29.3 74.8 67.9 82.3 8-4.7 16.3-8.8 25.2-11.7 5.4-44.3 31-82.5 67.4-105C287.3 160.4 258 140 224 140c-46.3 0-84 37.6-84 83.9z"
                />
              </svg>
              WeatherJS App
            </h5>
            <div className={classes.description}>
              <p>
                App that will give you details about the weather around you.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/wellbeing/weatherjs">Take me there &#x02192;</Link>
            </div>
          </div>
          <div className={classes.bmicalc}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="volleyball-ball"
                role="img"
                viewBox="0 0 512 512"
                width="54"
              >
                <path
                  fill="currentColor"
                  d="M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"
                />
              </svg>
              Sports App
            </h5>
            <div className={classes.description}>
              <p>
                Sports news, latest match results, live scores, and much more.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/wellbeing/sports">Take me there &#x02192;</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WellbeingPage;
