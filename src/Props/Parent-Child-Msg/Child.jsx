import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.func("Child")}>Click</button>
    </div>
  )
}

export default Child
