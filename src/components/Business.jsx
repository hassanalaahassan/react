import axios from 'axios';
import React, { useEffect, useState } from 'react'

export function Business () {
    const [articles , setArticles] = useState([])
    const getArticles = async () => {
      let response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3ba91ad5b3b844ea8dfe64d3d0af7dd2");
      setArticles(response.data.articles)
    }
    useEffect(()=>{
      getArticles();
    } , [] )   
    return (
      <div>
        <h1>Top Business Headlines</h1>
        {articles.length === 0 ?
         (
          <p>Loading...</p>
         ) 
         :
        (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );

}

export default Business