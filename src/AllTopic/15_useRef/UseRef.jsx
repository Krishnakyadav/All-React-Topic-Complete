

import React, { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const countRef = useRef(0);

//   const handleinput = () => {
//     countRef.current++;
//     console.log(countRef.current);
//   };
// console.log(countRef)
//   return (
//     <div>
//       <button onClick={handleinput}>increment</button>
//     </div>
//   );
// };

// export default UseRef;



// const UseRef = () => {
//   const nameRef = useRef();
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(nameRef.current.value)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Enter Your Name" ref={nameRef} />
//       <button>Submit</button>
//     </form>
//   )
// }

// export default UseRef


// const UseRef = () => {
//   const nameRef =useRef ()
//   const lastRef=useRef()
  
//   const handleclear = ()=>{
//    console.log(nameRef.current.value,lastRef.current.value)
   
   
//   }
//   return (
//     <div>
//       <input type="text" ref={nameRef}/>
//       <input type="text" ref={lastRef}/>
//       <button onClick={handleclear}
//       >clear</button>
//     </div>
//   )
// }

// export default UseRef



const UseRef = () => {
const [dark,setDark] = useState()
  return (
    <div style = {{
        backgroundColor: dark?"black" :"white",
        color: dark?"balck":"balck"
      }}>
      
      {/* <input type="text" ref={countRef}/> */}
      <h1>white</h1>
      <button onClick={()=>setDark(!dark)}>Click</button>
    </div>
  )
}

export default UseRef
