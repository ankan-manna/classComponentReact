import React, { Component } from 'react'

export class Props2 extends Component {
  render() {
    return (
      <div>
        <i>this is from class component</i>
        <h2>name:{this.props.name} and role is:{this.props.role}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Props2
