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

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Krishnakyadav/All-React-Topic-Complete.git
// git push -u origin main