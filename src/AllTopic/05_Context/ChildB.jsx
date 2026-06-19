import{useContext} from 'react'
import {myStore} from "./ContextApi"



function ChildB() {
    const {str,obj} = useContext(myStore);
   
  return (
    <div>
      <h2>I am Child B</h2>
      <h1>{str} {obj.fname}</h1>
    </div>
  )
}

export default ChildB;
