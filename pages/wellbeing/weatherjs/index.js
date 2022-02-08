import { Fragment, useEffect, useState } from "react";
import classes from "./index.module.css";
import Head from "next/head";

const WeatherJSAPP = () => {
  const [gotData, setGotData] = useState(false);
  const [weatherObj, setWeatherData] = useState();
  const [changeLocation, setChangeLocation] = useState(false);
  const [location, setLocation] = useState("");

  const ChangeLocation = () => {
    setChangeLocation(true);
  };

  const closeModal = () => {
    setChangeLocation(false);
  };

  const getData = async () => {
    const responce = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}%2&callback=test&id=2172797&lang=null&units=imperial&mode=xml`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "aa0189ba32mshf25eadacd4bbc37p108017jsndb59f85811c8",
        },
      }
    );
    const data = await responce.text();
    const weatherData = await JSON.parse(data.slice(5, -1));
    setWeatherData(weatherData);
    setGotData(true);
    setChangeLocation(false);
  };

  const setLocationHandler = (event) => {
    const loc = event.target.value ? event.target.value : "Globe";
    setLocation(loc);
  };
  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        `https://community-open-weather-map.p.rapidapi.com/weather?&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key":
              "aa0189ba32mshf25eadacd4bbc37p108017jsndb59f85811c8",
          },
        }
      );
      const data = await responce.text();
      const weatherData = await JSON.parse(data.slice(5, -1));
      setWeatherData(weatherData);
      setGotData(true);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>WeatherJS</title>
        <meta
          name="description"
          content="Get all weather details, Scientific weather data and realtime weather updates."
        />
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/tool-icon-20.png"
        />
      </Head>
      <div className={classes.container}>
        <div className={classes.card}>
          <h1>WeatherJS</h1>
          <div className={classes.data}>
            <h2 className={classes.location}>
              {gotData
                ? `${
                    weatherObj.name === "Globe" ? "Earth" : weatherObj.name
                  }, ${
                    weatherObj.sys.country
                      ? weatherObj.sys.country
                      : "Milky Way"
                  }`
                : ""}
            </h2>
            <h3 className={classes.main_description}>
              {gotData ? weatherObj.weather[0].description : ""}
            </h3>
            <img
              src={
                gotData
                  ? `http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`
                  : ""
              }
            />
            <ul className={classes.details_list}>
              <li key="Humidity">
                <span>Humidity</span>
                <p>{gotData ? `${weatherObj.main.humidity} (g/m3)` : ""}</p>
              </li>
              <li key="Visibility">
                <span>Visibility</span>
                <p>{gotData ? `${weatherObj.visibility} (m)` : ""}</p>
              </li>
              <li key="Feels Like">
                <span>Feels Like</span>
                <p>{gotData ? `${weatherObj.main.feels_like}` : ""}</p>
              </li>
              <li key="Wind Speed">
                <span>Wind Speed</span>
                <p>{gotData ? `${weatherObj.wind.speed} (m/s)` : ""}</p>
              </li>
              <li key="Temperature">
                <span>{`Temperature`}</span>
                <p>{gotData ? `${weatherObj.main.temp} (℉)` : ""}</p>
              </li>
            </ul>
            <div className={classes.actions}>
              <button onClick={ChangeLocation}>Change Location</button>
            </div>
          </div>
        </div>
      </div>
      {changeLocation && (
        <div className={classes.overlay}>
          <div className={classes.modal}>
            <div className={classes.modal_title}>
              <h1>Enter Location</h1>
            </div>
            <div className={classes.modal_inputs}>
              <div className={classes.input_field}>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter the city"
                  onChange={setLocationHandler}
                  value={location}
                />
              </div>
              <div className={classes.input_field}>
                <label htmlFor="country">Country (Optional)</label>
                <input
                  id="country"
                  type="text"
                  placeholder="Enter the country"
                />
              </div>
            </div>
            <div className={classes.modal_actions}>
              <button onClick={closeModal}>Close</button>
              <button onClick={getData}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default WeatherJSAPP;
