import React from 'react'
import Parent from './Parent'
import {createContext} from "react"
//create a Context

export const myData = createContext()

//provide
function Context(props) {
    console.log(props)
    let str = "hello"
    let obj = {fname:"krishna",lname:"yadav"}
  return (
    <div>
      <h1>i am Context Component</h1>
      <myData.Provider value={{str,obj}}>
        {props.children}
      </myData.Provider>
    
    </div>
  )
}

export default Context;
