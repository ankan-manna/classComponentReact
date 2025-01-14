import React from 'react'
import ChildProps from "./ChildProps"
const numbersArray = [1, 2, 3, 4, 5];
const title = "Hello, World!";
const user = {
  name: 'Alice',
  age: 25,
  location: 'New York',
};
function ParentProps() {
  return (
    <div>
      <ChildProps arrayData={numbersArray} title={title} userInfo={user}/>
    </div>
  )
}

export default ParentProps
