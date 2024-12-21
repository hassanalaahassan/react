// import axios from "axios";
// import { useState,useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sports  from "./components/Sports";
import Science from "./components/Science";
import AboutPage from "./components/Science";
// import Business from "./components/Business";
function App() {  

    
      
  // business

  return (
    <div>

 
      
      <AboutPage/>

          {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Sports" element={<Sports/>}/>
            <Route path="/Science" element={<Science/>}/>
          </Routes> */}
          
     

        </div>
  );
}

export default App;







// {
//   products.map((product)=>{
    

//          return( <div className="col-3">

//             <div className="inner border h-100 m-2 d-flex flex-column justify-content-center align-items-center">  

//             <img src={product.image} className="w-50" alt={product.title} />
//             <h4>{(product.title).split(" " ,3).join(" ")}</h4>
//             </div>

//           </div>
//       )
          
//   })
// }






// import { useState } from "react";

// function App() {

//     const [count , setCount] = useState(0);

//     const incremant = () =>{
//       setCount(count + 1)
//     };
//     const decremant = () =>{
//       setCount(count - 1)
//     };

//   return (
//     <section className='pt-4'>
//         <div className="container">

//           <div className='row'>
             

//                   <div className="d-flex gap-3 shadow p-5 rounded">
//                       <button className="btn btn-danger" onClick={decremant}>-</button>

//                         <h3>{count}</h3>
//                       <button className="btn btn-success" onClick={incremant}>+</button>
//                   </div>

//           </div>

//         </div>

//     </section>
      
//   );
// }

// export default App;
