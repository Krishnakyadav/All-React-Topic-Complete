import {useState} from "react"
import ChildA from "./ChildA";
import ChildB from "./ChildB";
const Uplifting = ()=>{
    const [count,setCount]=useState(0);
    
    return(
        <div>
            <h1>Uplifting</h1>
            <ChildA count={count}/>
            <ChildB setCount = {setCount}/>
        </div>
    )
}

export default Uplifting;