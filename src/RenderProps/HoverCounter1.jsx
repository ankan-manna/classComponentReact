import React, { Component } from 'react'

export class HoverCounter1 extends Component {

    
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.increaseCount}>Hover it {this.props.count} times</h1>
      </div>
    )
  }
}

export default HoverCounter1
