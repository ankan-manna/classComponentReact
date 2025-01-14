import React, { Component } from 'react'
import HigherOrder from './HigherOrder'
export class ClickCounter extends Component {
  render() {
   const {count,increaseCount}=this.props
   console.log(this.props.name) // here show 
    return (
      <div>
        <button onClick={increaseCount}>Click count is {count}, props pass from app.js is {this.props.name}</button>
        {/* not show in ui,,, to solve this use spread operator in hoc */}
      </div>
    )
  }
}

export default HigherOrder(ClickCounter,10)
