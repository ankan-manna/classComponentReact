import React from 'react'

function Props1(props) {
 // props.name="no" ==> this will not work , props are immutable
  return (
    <div>
      <h1>Welcome {props.name} .Your Role is {props.role} </h1>
      {props.children}
    </div>
  )
}

export default Props1;
