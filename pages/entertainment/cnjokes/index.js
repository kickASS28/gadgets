import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./index.module.css";
import Head from "next/head";

const SoprtsPage = () => {
  const [number, setNumber] = useState(5);
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const numberChangeHandler = (event) => {
    const enteredNumber = event.target.value;
    setNumber(enteredNumber);
  };

  useEffect(() => {
    fetch(`https://api.icndb.com/jokes/random/${number}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJokes(data.value);
        false;
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setJokes([
          {
            id: 0,
            joke: "Chuck Norris is currently out of universe, Please try in some time or check your internet connection",
          },
        ]);
        setIsLoading(false);
      });
  }, []);

  const getJokes = async () => {
    setIsLoading(true);
    fetch(`https://api.icndb.com/jokes/random/${number}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJokes(data.value);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setJokes([
          {
            id: 0,
            joke: "Chuck Norris is currently out of universe, Please try in some time or check your internet connection",
          },
        ]);
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Joke Generator</title>
        <meta
          name="description"
          content="Laugh a lot with Chuck Norris jokes"
        />
      </Head>
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
          {isLoading && <h4 style={{ color: "#fff" }}>Loading...</h4>}
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
    </Fragment>
  );
};

export default SoprtsPage;
