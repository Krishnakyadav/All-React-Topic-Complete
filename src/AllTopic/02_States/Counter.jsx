import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset=()=>{
setCount(0)
  }
  return (
    <div>
      <h1>Increment and Decrement Counter</h1>
      <h1>Counter :{count}</h1>
      <button onClick={handleInc} style={{color:"red",backgroundColor:"yellow"}}>Increment</button>
      <button onClick={handleDec} style={{color:"red",backgroundColor:"yellow"}}>Decrement</button>
            <button onClick={handleReset} style={{color:"red",backgroundColor:"yellow"}}>Reset</button>
    </div>
  );
};

export default Counter;
