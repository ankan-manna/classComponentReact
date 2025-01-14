import React, { Component } from 'react'
import MeoComp from './MeoComp'
export class ParentMemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankan"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Ankan"
            })
        },5000)
    }
  render() {
    console.log("--------Parent componrnt-----------")
    return (
      <div>
        Parent Component
       <MeoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentMemo
