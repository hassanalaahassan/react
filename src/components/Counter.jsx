// import React, { useContext, useReducer } from 'react'
// import { countercontext } from '../Context/Countercontext'







// function Counter() {

//     const {x,y}=useContext(countercontext);




//     function reducer(counter,action) {

//         switch(action){
//             case "+":
//                 return ++counter
//             case "-":
//                 return --counter
//             case "0":
//                 counter = 0
//                 return counter
//             default:
//                 return counter;
//         }


//     }

//     const [counter,dispatch] = useReducer(reducer,0)

//   return (
//     <div>
//         <h1>
//             {x+1}
//         </h1>
//         <h1>
//             {y}
//         </h1>
//         <h1>
//         Counter : {counter}
//         </h1>
//         <button onClick={()=>dispatch("+")}>
//             +
//         </button>
//         <button onClick={()=>dispatch("-")}>
//             -
//         </button>
//         <button onClick={()=>dispatch("0")}>
//             reset
//         </button>
//     </div>
//   )
// }

// export default Counter