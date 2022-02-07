import { useEffect, useState } from "react";
import classes from "./index.module.css";

const SoprtsPage = () => {
  const [number, setNumber] = useState(5);
  const [jokes, setJokes] = useState([]);

  const numberChangeHandler = (event) => {
    const enteredNumber = event.target.value;
    setNumber(enteredNumber);
  };

  useEffect(() => {
    const getJokes = async () => {
      const responce = await fetch(
        `http://api.icndb.com/jokes/random/${number}`
      );
      if (responce.status !== 200) {
        return;
      }
      const data = await responce.json();
      setJokes(data.value);
    };
    getJokes();
  }, []);

  const getJokes = async () => {
    const responce = await fetch(`http://api.icndb.com/jokes/random/${number}`);
    if (responce.status !== 200) {
      return;
    }
    const data = await responce.json();
    setJokes(data.value);
  };

  return (
    <div className={classes.container}>
      <h2>Joke Genrator</h2>
      <div className={classes.joke_container}>
        <div className={classes.input_container}>
          <input className={classes.input_disabled} disabled value="Count" />
          <input
            className={classes.input_field}
            placeholder="Number of Jokes"
            type="number"
            value={number}
            onChange={numberChangeHandler}
          />
          <button className={classes.full_input} onClick={getJokes}>
            Get Jokes
          </button>
        </div>
        <div className={classes.joke_results}>
          <ul className={classes.jokes}>
            {jokes.map((joke) => {
              return (
                <li key={joke.id}>
                  <p>{joke.joke}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoprtsPage;
