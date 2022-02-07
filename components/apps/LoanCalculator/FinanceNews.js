import { useEffect, useState } from "react";
import classes from "./FinanceNews.module.css";
let refrence = 0;
const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [newsSlice, setNewsSlice] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const responce = await fetch(
        "https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "cnbc.p.rapidapi.com",
            "x-rapidapi-key":
              "aa0189ba32mshf25eadacd4bbc37p108017jsndb59f85811c8",
          },
        }
      );
      if (responce.status !== 200) {
        console.log(error);
        return;
      }
      const result = await responce.json();
      const newsArray = result.data.mostPopularEntries.assets;
      const slice = newsArray.slice(0, 5);
      setNews(newsArray);
      setNewsSlice(slice);
    };
    getNews();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const changeSlice = () => {
    if (refrence === 0) {
      const slice = news.slice(5, 10);
      setNewsSlice(slice);
      refrence++;
      return;
    }
    if (refrence === 1) {
      const slice = news.slice(10, 15);
      setNewsSlice(slice);
      refrence++;
      return;
    }
    if (refrence === 2) {
      const slice = news.slice(15, 20);
      setNewsSlice(slice);
      refrence++;
      return;
    }
    if (refrence === 3) {
      const slice = news.slice(20, 25);
      setNewsSlice(slice);
      refrence++;
      return;
    }
    if (refrence === 4) {
      const slice = news.slice(25, 30);
      setNewsSlice(slice);
      refrence++;
      return;
    }
    if (refrence === 5) {
      const slice = news.slice(0, 5);
      setNewsSlice(slice);
      refrence = 0;
      return;
    }
    scrollToTop();
  };

  return (
    <div className={classes.container}>
      <h2>Finance News</h2>
      <div className={classes.news_container}>
        {newsSlice.map((n) => {
          return (
            <div className={classes.news} key={n.id}>
              <div className={classes.news_main}>
                {n.promoImage.url ? <img src={n.promoImage.url} /> : ""}
              </div>
              <div className={classes.news_news_details}>
                <h4>
                  <a target="_blank" href={n.url}>
                    {n.headline}
                  </a>
                </h4>
                <p>{n.description}</p>
                <span className={classes.author}>- {n.authorFormatted}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button className={classes.next} onClick={changeSlice}>
        Next
      </button>
    </div>
  );
};

export default FinanceNews;
