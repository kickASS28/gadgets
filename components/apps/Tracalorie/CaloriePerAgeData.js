import classes from "./CaloriePerAgeData.module.css";

const CaloriePerAgeData = () => {
  return (
    <div className={classes.table_container}>
      <h3>Ideal calorie intake per age</h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Range (years)</th>
            <th>Male</th>
            <th>Femail</th>
          </tr>
          <tr>
            <td>2-3</td>
            <td>1200</td>
            <td>1200</td>
          </tr>
          <tr>
            <td>4-8</td>
            <td>1400</td>
            <td>1200</td>
          </tr>
          <tr>
            <td>9-13</td>
            <td>1800</td>
            <td>1600</td>
          </tr>
          <tr>
            <td>14-18</td>
            <td>2200</td>
            <td>1800</td>
          </tr>
          <tr>
            <td>19-30</td>
            <td>2400</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>30-51</td>
            <td>2200</td>
            <td>1800</td>
          </tr>
          <tr>
            <td>51+</td>
            <td>2000</td>
            <td>1600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CaloriePerAgeData;
