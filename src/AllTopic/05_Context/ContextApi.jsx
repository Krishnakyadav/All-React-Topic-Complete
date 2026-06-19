import {createContext} from 'react'
import Parent from './Parent';

// step 1: createContext
export const myStore = createContext();

// Step 2: Provide a Context
function ContextApi() {
let str= "WelCome";
let obj = {fname:"krishna"};
let arr =[10,20,30,40,50]
  return (
    <div>
      <h1>I am Context Api</h1>
      <myStore.Provider value={{str,obj,arr}}>
         <Parent/>
      </myStore.Provider>
    </div>
  )
}

export default ContextApi
