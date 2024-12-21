import axios from "axios";
import { useEffect, useState } from "react";

function Home () {
  const [articles , setArticles] = useState([])
    const getArticles = async () => {
      let response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=3ba91ad5b3b844ea8dfe64d3d0af7dd2");
      setArticles(response.data.articles)
    }
    useEffect(()=>{
      getArticles();
    } , [] )    
  return (
      <div className="row g-2 gx-2">
        {
          articles.map((article,index)=>{
            return(
            <div className="col-4 ">
                <div className="inner h-100 border rounded p-2">
                  <img src={article.urlToImage} className="w-100 rounded" height="200px" alt={article.author} />
                  <h5>
                    {article.title.split(" ",7).join(" ")}
                  </h5>
                  <p>
                    {article.description}
                  </p>
                </div>
            </div>
            )
          })
        }
      </div>

  )
}
export default Home