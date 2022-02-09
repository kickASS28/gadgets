import classes from "./CalorieTable.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CalorieTable = (props) => {
  const func = (total, meal) => {
    return total + meal.calories;
  };
  const mealsArray = props.meals;
  const total = mealsArray.reduce(func, 0);
  return (
    <div className={classes.meal_array}>
      <h3>Meals</h3>
      <TransitionGroup className={classes.mealList} component="ul">
        {props.meals.map((meal) => {
          return (
            <CSSTransition
              key={meal.name}
              classNames="placeholdernav"
              timeout={300}
            >
              <li className={classes.mealItem}>
                <div className={classes.mealItem_meal_name}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-icon="hamburger"
                    role="img"
                    viewBox="0 0 512 512"
                    width="15"
                  >
                    <path
                      fill="currentColor"
                      d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"
                    />
                  </svg>

                  <span>{meal.name}</span>
                </div>
                <div className={classes.mealItem_meal_calories}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-icon="fire"
                    role="img"
                    viewBox="0 0 384 512"
                    width="15"
                  >
                    <path
                      fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                    />
                  </svg>
                  <span>{meal.calories}</span>
                </div>
              </li>
            </CSSTransition>
          );
        })}
        <li className={classes.mealItem} key="total">
          <div className={classes.mealItem_meal_name}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="utensils"
              role="img"
              viewBox="0 0 416 512"
              width="15"
            >
              <path
                fill="currentColor"
                d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"
              />
            </svg>
            <span>Total</span>
          </div>
          <div className={classes.mealItem_meal_calories}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-icon="fire-alt"
              role="img"
              viewBox="0 0 448 512"
              width="17"
            >
              <path
                fill="currentColor"
                d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"
              />
            </svg>
            <span>{total}</span>
          </div>
        </li>
      </TransitionGroup>
    </div>
  );
};

export default CalorieTable;
