import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"parent"
      }
    }
    clickHandler=(ch)=>{
        alert(`This is form ${ch} to ${this.state.msg}`)
    }
  render() {
    return (
      <div>
        <Child func={this.clickHandler}/>
      </div>
    )
  }
}

export default Parent
