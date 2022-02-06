import { Fragment } from "react";
import classes from "../health/index.module.css";
import Link from "next/link";

const EntertainmentPage = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>Entertainment</h1>
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="dice-three"
          role="img"
          viewBox="0 0 448 512"
          width="100"
          height="100"
        >
          <path
            fill="rgb(165, 47, 201)"
            d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM128 192c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm96 96c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
          />
        </svg>
        <h4>Entertainment is an art that brings colors into life.</h4>
      </div>
      <div className={classes.app_container}>
        <div className={classes.app_flex}>
          <div className={classes.traclorie}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="gamepad"
                role="img"
                viewBox="0 0 640 512"
                width="70"
              >
                <path
                  fill="currentColor"
                  d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"
                />
              </svg>
              Kick-Tac-Toe
            </h5>
            <div className={classes.description}>
              <p>
                Enjoy Tic-Tac-Toe with your family, friends and gaming buddies.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/entertainment/kick-tac-toe">
                Take me there &#x02192;
              </Link>
            </div>
          </div>
          <div className={classes.bmicalc}>
            <h5>
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="chess"
                role="img"
                viewBox="0 0 512 512"
                width="70"
                height="54"
              >
                <path
                  fill="currentColor"
                  d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 64 384h128a535.78 535.78 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31zm92.77-157.78l-3.29 82.2h126.72l-3.29-82.21 24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z"
                />
              </svg>
              Chess
            </h5>
            <div className={classes.description}>
              <p>
                Storm your brain with advantures of war, strategies, and more.
              </p>
            </div>
            <div className={classes.actions}>
              <Link href="/entertainment/chess">Take me there &#x02192;</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EntertainmentPage;
