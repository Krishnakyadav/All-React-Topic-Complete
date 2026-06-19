import ChildB from './ChildB'
import{useContext} from 'react'
import {myStore} from "./ContextApi"

function ChildA() {
  const {arr} = useContext(myStore)
  return (
    <div>
      <h2>I am Child A {arr}</h2>
      <ChildB/>
    </div>
  )
}

export default ChildA
