import classes from "./BMICalc.module.css";
import { useState, Fragment } from "react";
import BMITable from "./BMITable";

const BMICalC = () => {
  const [heightInput, setHeightInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [unit, setUnit] = useState("kg/m2");
  const [BMI, setBMI] = useState();

  const heightInputChangeHandler = (event) => {
    const height = event.target.value ? +event.target.value : "";
    setHeightInput(height);
  };

  const weightInputChangeHandler = (event) => {
    const weight = event.target.value ? +event.target.value : "";
    setWeightInput(weight);
  };

  const unitInputChangeHandler = (event) => {
    const unit = event.target.options[event.target.options.selectedIndex].value;
    console.log(unit);
    setUnit(unit);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    var Bmi;
    if (unit === "kg/m2") {
      Bmi = weightInput / heightInput ** 2;
    }
    if (unit === "lb/inch2") {
      Bmi = (weightInput * 703) / heightInput ** 2;
    }
    if (unit === "lb/foot2") {
      Bmi = (weightInput * 703) / (heightInput ** 2 * 144);
    }
    if (unit === "kg/foot2") {
      Bmi = weightInput / (heightInput ** 2 * 0.305 * 0.305);
    }
    setBMI(Bmi.toFixed(2));
    formClearHandler();
  };

  const formClearHandler = () => {
    setHeightInput("");
    setWeightInput("");
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>BMICalC</legend>
          <h4>Enter your details</h4>
          <div className={classes.inputs_container}>
            <div className={classes.input_field}>
              <label htmlFor="height">Height</label>
              <input
                id="height"
                type="number"
                placeholder="Enter Height"
                onChange={heightInputChangeHandler}
                value={heightInput}
              />
            </div>
            <div className={classes.input_field}>
              <label htmlFor="calorie">Weight</label>
              <input
                id="weight"
                type="number"
                placeholder="Enter Weight"
                value={weightInput}
                onChange={weightInputChangeHandler}
              />
            </div>
          </div>
          <div className={classes.inputs_container}>
            <div className={classes.input_field}>
              <label htmlFor="unit">Unit</label>
              <select
                id="unit"
                placeholder="Select units"
                value={unit}
                onChange={unitInputChangeHandler}
              >
                <option>kg/m2</option>
                <option>kg/foot2</option>
                <option>lb/inch2</option>
                <option>lb/foot2</option>
              </select>
            </div>
            <div className={classes.actions}>
              <button
                className={classes.warning}
                type="button"
                onClick={formClearHandler}
              >
                Clear
              </button>
              <button className={classes.success} type="submit">
                Calculate
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <div className={classes.data}>
        <h1>BMI {BMI}</h1>
        <BMITable />
      </div>
    </Fragment>
  );
};

export default BMICalC;
