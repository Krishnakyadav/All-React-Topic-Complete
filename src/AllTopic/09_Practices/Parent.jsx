import React from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  return (
    <div>
      <h1>I am Parent Compoent</h1>
    <ChildA/>
    <ChildB></ChildB>
    </div>
  )
}

export default Parent;
