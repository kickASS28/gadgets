import { useEffect, useState } from "react";
import classes from "./FinanceNews.module.css";

const FinanceNews = () => {
  const [country, setCountry] = useState("us");
  const [sector, setSector] = useState("Technology");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getnews = async () => {
      const responce = await fetch(
        "https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&limit=3&group_similar=true&language=en&api_token=GU33gMzJwvz6x7sWFKX7JwN0JIvzAVirH4a7uzmp"
      );
      const data = await responce.json();
      setNews(data.data);
      console.log(data.data);
    };
    getnews();
  }, []);

  const countryChangeHandler = (event) => {
    const ctry = event.target.value;
    setCountry(ctry);
  };

  const sectorChangeHandler = (event) => {
    const sect = event.target.options[event.target.options.selectedIndex].value;
    setSector(sect);
  };

  const getNews = async (event) => {
    event.preventDefault();
    const URL = `https://api.marketaux.com/v1/news/all?filter_entities=true&limit=3&group_similar=true&language=en&countries=${country}&industries=${sector}&api_token=GU33gMzJwvz6x7sWFKX7JwN0JIvzAVirH4a7uzmp`;
    const responce = await fetch(URL);
    const data = await responce.json();
    setNews(data.data);
    console.log(data.data, country, sector);
  };

  return (
    <div className={classes.container}>
      <h2>Finance News</h2>
      <div>
        <form className={classes.inputs_container}>
          <div className={classes.input_container}>
            <input
              className={classes.input_disabled}
              disabled
              value="Country"
            />
            <input
              className={classes.input_field}
              placeholder="Enter country specifier (us, uk, in, etc)"
              type="text"
              value={country}
              onChange={countryChangeHandler}
            />
          </div>
          <div className={classes.input_container}>
            <input className={classes.input_disabled} disabled value="Sector" />
            <select
              className={classes.input_field}
              onChange={sectorChangeHandler}
              value={sector}
            >
              <option>Technology</option>
              <option>Industrials</option>
            </select>
          </div>
          <div className={classes.input_container}>
            <button className={classes.full_input} onClick={getNews}>
              Search
            </button>
          </div>
        </form>
      </div>
      <div className={classes.news_container}>
        {news.map((n) => {
          return (
            <div className={classes.news} key={n.title}>
              <div className={classes.news_main}>
                {n.image_url ? <img src={n.image_url} /> : ""}
              </div>
              <div className={classes.news_news_details}>
                <h4>{n.title}</h4>
                <p>{n.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FinanceNews;
