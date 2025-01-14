import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
export class ParentComp extends Component {
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
        <PureComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
