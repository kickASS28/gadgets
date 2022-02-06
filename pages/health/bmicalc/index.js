import classes from "./index.module.css";
import BMICalC from "../../../components/apps/BMICalc/BMICalC";

const BMICalCPage = () => {
  return (
    <div className={classes.container}>
      <BMICalC />
    </div>
  );
};

export default BMICalCPage;
