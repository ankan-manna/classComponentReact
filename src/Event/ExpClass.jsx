import React, { Component } from 'react'

export class ExpClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Hii"
      }
    }
    // let clickHandeler=()=>{
    //     this.setState({msg:"welcome"})
    // }// inside js class let/var/const cannot able to use everythig declear as it is normal with identifier not type
    clickHandeler=()=>{
        this.setState({msg:"welcome"})
    }
  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={this.clickHandeler}>Click</button>
      </div>
    )
  }
}

export default ExpClass
