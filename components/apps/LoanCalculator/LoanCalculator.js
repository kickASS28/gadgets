import { useState } from "react";
import classes from "./LoanCalculator.module.css";

const LoanCalculator = () => {
  const [calculated, setCalculated] = useState(false);
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [monthly, setMonthly] = useState("");
  const [total_Payment, setTotal_Payment] = useState("");
  const [total_Interest, setTotal_Interest] = useState("");

  const amountChangeHandler = (event) => {
    const newAmount = +event.target.value;
    setAmount(newAmount);
  };

  const interestChangeHandler = (event) => {
    const newAmount = +event.target.value;
    setInterest(newAmount);
  };

  const yearsChangeHandler = (event) => {
    const newAmount = +event.target.value;
    setYears(newAmount);
  };

  const calculateValues = () => {
    if (0 < amount && 0 <= interest <= 100 && 0 < years) {
      let tpay = amount * Math.pow(1 + interest / 100, years);
      let tins = tpay - amount;
      let mpay = tpay / years / 12;
      setTotal_Payment(tpay.toFixed(2));
      setTotal_Interest(tins.toFixed(2));
      setMonthly(mpay.toFixed(2));
      setCalculated(true);
      setAmount("");
      setInterest("");
      setYears("");
    } else {
      alert("Please Enter valied values");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputs_container}>
        <h2>Loan Calculator</h2>
        <div className={classes.input_container}>
          <input className={classes.input_disabled} disabled value="$" />
          <input
            className={classes.input_field}
            placeholder="Loan Amount"
            type="number"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.input_container}>
          <input className={classes.input_disabled} disabled value="%" />
          <input
            className={classes.input_field}
            placeholder="Interest"
            type="number"
            value={interest}
            onChange={interestChangeHandler}
          />
        </div>
        <div className={classes.input_container}>
          <input
            className={classes.full_input}
            placeholder="Years to Repay"
            type="number"
            value={years}
            onChange={yearsChangeHandler}
          />
        </div>
        <div className={classes.input_container}>
          <button className={classes.full_input} onClick={calculateValues}>
            Calculate
          </button>
        </div>
      </div>
      <div
        className={`${classes.inputs_container} ${
          calculated ? "" : classes.hide
        }`}
      >
        <h3>Results</h3>
        <div className={classes.input_container}>
          <input
            className={classes.input_result_text}
            disabled
            value="Monthly Payment"
          />
          <input
            value={monthly}
            className={classes.input_result_data}
            disabled
          />
        </div>
        <div className={classes.input_container}>
          <input
            className={classes.input_result_text}
            disabled
            value="Total Payment"
          />
          <input
            value={total_Payment}
            className={classes.input_result_data}
            disabled
          />
        </div>
        <div className={classes.input_container}>
          <input
            className={classes.input_result_text}
            disabled
            placeholder="Total Interest"
          />
          <input
            value={total_Interest}
            className={classes.input_result_data}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
