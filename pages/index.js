import classes from "./index.module.css";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Gadgets</title>
        <meta
          name="description"
          content="One App that holds all your needs (Calorie Tracker, BMI Calculator, Loan-Interest Calculator, Finance and Sports news and updates, Weather reports, games and much more.)"
        />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={classes.container}>
        <h1 className={classes.title}>Satisfy all your needs at one place</h1>
        <svg
          aria-hidden="true"
          data-icon="smile-wink"
          role="img"
          viewBox="0 0 496 512"
          width="100"
        >
          <path
            fill="currentColor"
            d="M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8l-9.7-8.5zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4z"
          />
        </svg>
        <div className={classes.pagedesc}>
          <h5>Your needs, our praiority</h5>
          <p>
            We provide best in class resources, latest realtime updates and
            great tools for day to day needs.
          </p>
        </div>
        <h2 className={classes.sub_title}>Contents</h2>
        <div className={classes.verticals}>
          <Link href="/health">
            <div className={classes.health}>
              <div className={classes.logo}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="heartbeat"
                  role="img"
                  viewBox="0 0 512 512"
                  width="38"
                >
                  <path
                    fill="rgb(233, 47, 47)"
                    d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
                  />
                </svg>
              </div>
              <div className={classes.name}>
                <Link href="/health">Health &#x02192;</Link>
              </div>
              <div className={classes.description}>
                <p>
                  Track your calorie intake, Calulate BMI, tips from physicians
                  and more..
                </p>
              </div>
            </div>
          </Link>
          <Link href="/finance">
            <div className={classes.finance}>
              <div className={classes.logo}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="donate"
                  role="img"
                  viewBox="0 0 512 512"
                  width="40"
                >
                  <path
                    fill="rgb(178, 201, 47)"
                    d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"
                  />
                </svg>
              </div>
              <div className={classes.name}>
                <Link href="/finance">Finance &#x02192;</Link>
              </div>
              <div className={classes.description}>
                <p>
                  Loan to intrest calculator, make your plan, latest market
                  news, etc.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/wellbeing">
            <div className={classes.well_being}>
              <div className={classes.logo}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="leaf"
                  role="img"
                  viewBox="0 0 576 512"
                  width="42"
                >
                  <path
                    fill="rgb(50, 156, 50)"
                    d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"
                  />
                </svg>
              </div>
              <div className={classes.name}>
                <Link href="/wellbeing">Well-Being &#x02192;</Link>
              </div>
              <div className={classes.description}>
                <p>
                  Detailed weather report, Scientic weather data, sports, and
                  other.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/entertainment">
            <div className={classes.entertainment}>
              <div className={classes.logo}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-icon="dice-three"
                  role="img"
                  viewBox="0 0 448 512"
                  width="36"
                >
                  <path
                    fill="rgb(165, 47, 201)"
                    d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                  />
                </svg>
              </div>
              <div className={classes.name}>
                <Link href="/entertainment">Entertainment &#x02192;</Link>
              </div>
              <div className={classes.description}>
                <p>
                  Play games, see your horrorsope, generate jokes and fun facts.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
