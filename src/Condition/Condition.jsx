import React, { Component } from 'react'

export class Condition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isValid: false
    }
  }

  // render() {
  //   if (this.state.isValid) {
  //     return (
  //       <div>
  //         <p>Welcome Ankan</p>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <p>Welcome Guest</p>
  //       </div>
  //     )
  //   }
  // }// 1 way
  // render(){
  //   let mesg;
  //   if(this.state.isValid){
  //     mesg=<div>Welcome Ankan</div>
  //   }else{
  //     mesg=<div>Welcome Guest</div>
  //   }
  //   return mesg;
  // }//2 way
  render(){
    return this.state.isValid?(<div>Ankan</div>):(<div>Guest</div>)
  }
}

export default Condition
