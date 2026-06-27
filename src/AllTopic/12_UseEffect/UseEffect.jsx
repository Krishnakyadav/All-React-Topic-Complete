import {useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("hello krishna")
    },[count])
  return (
    <div>
      <h1>hello</h1>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}

export default UseEffect

