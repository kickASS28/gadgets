import classes from "./Tracalorie.module.css";
import { useState, Fragment } from "react";
import CalorieTable from "./CalorieTable";
import CaloriePerAgeData from "./CaloriePerAgeData";

const Tracalorie = () => {
  const [mealInput, setMealInput] = useState("");
  const [calorieInput, setCalorieInput] = useState("");
  const [meals, setMeals] = useState([]);

  const mealInputChangeHandler = (event) => {
    const mealName = event.target.value;
    setMealInput(mealName);
  };

  const calorieInputChangeHandler = (event) => {
    const calories = event.target.value;
    setCalorieInput(calories);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const mealName = mealInput;
    const calorie = calorieInput;
    if (mealInput.length < 3 || calorie == 0) {
    } else {
      console.log(mealName, calorie);
      setMeals((meals) => {
        const newMeals = [...meals, { name: mealName, calories: +calorie }];
        return newMeals;
      });
      formClearHandler();
    }
  };

  const formClearHandler = () => {
    setMealInput("");
    setCalorieInput("");
  };

  const DeleteAllHandler = () => {
    setMeals([]);
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>Tracalorie</legend>
          <h4>Add Meal / Food Item</h4>
          <div className={classes.inputs_container}>
            <div className={classes.input_field}>
              <label htmlFor="meal">Meal</label>
              <input
                id="meal"
                type="text"
                placeholder="Add Meal"
                onChange={mealInputChangeHandler}
                value={mealInput}
              />
            </div>
            <div className={classes.input_field}>
              <label htmlFor="calorie">Calories</label>
              <input
                id="calorie"
                type="number"
                placeholder="Enter Calories"
                value={calorieInput}
                onChange={calorieInputChangeHandler}
              />
            </div>
          </div>
          <div className={classes.actions}>
            <button
              className={classes.danger}
              type="button"
              onClick={DeleteAllHandler}
            >
              Delete All
            </button>
            <button
              className={classes.warning}
              type="button"
              onClick={formClearHandler}
            >
              Clear
            </button>
            <button className={classes.success} type="submit">
              + Add Meal
            </button>
          </div>
        </fieldset>
      </form>
      <div className={classes.data}>
        <CalorieTable meals={meals} />
        <CaloriePerAgeData />
      </div>
    </Fragment>
  );
};

export default Tracalorie;
