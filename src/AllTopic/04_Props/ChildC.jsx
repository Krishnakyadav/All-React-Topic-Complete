import React from 'react'

function ChildC({str,obj:{fname},arr}) {
  return (
    <div>
      <h1>I am Child C Component</h1>
      <h2>{str}</h2>
      <h2>{fname}</h2>
      <h2>{arr}</h2>
    </div>
  )
}

export default ChildC;
