import Tracalorie from "../../../components/apps/Tracalorie/Tracalorie";
import classes from "./index.module.css";
import { Fragment } from "react";
import Head from "next/head";

const TracaloriePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tracalorie</title>
        <meta
          name="description"
          content="Track your calorie intake and compare it with optimum calorie intake per age."
        />
      </Head>
      <div className={classes.container}>
        <Tracalorie />
      </div>
    </Fragment>
  );
};

export default TracaloriePage;
