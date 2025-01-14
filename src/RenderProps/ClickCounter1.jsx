import React, { Component } from 'react'

export class ClickCounter1 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increaseCount}>Click count is {this.props.count}</button>
      </div>
    )
  }
}

export default ClickCounter1
