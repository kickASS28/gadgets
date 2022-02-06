import classes from "./BMITable.module.css";

const BMITable = () => {
  return (
    <div className={classes.table_container}>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>BMI</th>
            <th>Weight Class</th>
          </tr>
          <tr>
            <td>Below 18.5</td>
            <td>underweight</td>
          </tr>
          <tr>
            <td>18.5-24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25-29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>30 and up</td>
            <td>Very Overweight</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BMITable;
