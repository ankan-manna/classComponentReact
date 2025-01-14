import React, { Component } from 'react'
import HigherOrder from './HigherOrder'
export class HoverCounter extends Component {
  render() {
    const {count,increaseCount}=this.props
    return (
      <div>
        <h1 onMouseOver={increaseCount}>Valuk Hover Count {count}</h1>
      </div>
    )
  }
}

export default HigherOrder(HoverCounter)
