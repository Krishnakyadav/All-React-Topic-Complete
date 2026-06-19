


const ChildB = ({setCount})=>{
    console.log()
    return(
        <div>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <button onClick={()=>setCount(prev=>prev-1)}>decrement</button>
        </div>
    )
}

export default ChildB;