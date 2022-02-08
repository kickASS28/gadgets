import classes from "./index.module.css";
import { Fragment } from "react";
import Head from "next/head";

const SportsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sports</title>
        <meta
          name="description"
          content="Stay ahead, stay active with all the sports updates and news"
        />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <div className={classes.container}>
        <h1>Coming Soon...</h1>
      </div>
    </Fragment>
  );
};

export default SportsPage;
