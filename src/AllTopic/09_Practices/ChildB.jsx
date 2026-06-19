import React from 'react'
import {useContext} from "react";
import {myData} from "./Context"
function ChildB() {
    const {str,obj:{fname,lname}} = useContext(myData);
  return (
    <div>
      <h3>i am Child B</h3>
      <h2>{str} {fname} {lname}</h2>
    </div>
  )
}

export default ChildB
