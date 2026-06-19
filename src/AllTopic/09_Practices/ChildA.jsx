import React from 'react'
import {useContext} from "react"
import {myData} from "./Context"
// usecontext
function ChildA() {
   const {str,obj:{fname,lname}}= useContext(myData);
  return (
    <div>
      <h1>i am Child A component</h1>
      <p>{str} {fname} {lname} </p>
    </div>
  )
}

export default ChildA
