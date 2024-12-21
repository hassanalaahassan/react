import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export default function CounterContextProvider(props) {
  const [articles, setArticles] = useState([]);

  const getArticles = async (category) => {
 
      let response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3ba91ad5b3b844ea8dfe64d3d0af7dd2`
      );
      setArticles(response.data.articles);
  };

  useEffect(() => {
    getArticles('sports');
    getArticles('business');
  }, []);

  return (
    <CounterContext.Provider value={{ articles, setArticles }}>
      {props.children}
    </CounterContext.Provider>
  );
}
