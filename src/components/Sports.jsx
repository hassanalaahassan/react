import { useContext } from "react"
import { CounterContext } from "../Context/Countercontext"

export function Sports () {

  let {articles,setArticles}=useContext(CounterContext)
//  console.log(articles);
//  setArticles('business');
// console.log(art);

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

export default Sports