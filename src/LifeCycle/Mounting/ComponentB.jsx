import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankan"
      }
      console.log("ComponentB Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStaticFromProps")
        return null
    }
    componentDidMount(){
         console.log("ComponentB componentDidMount")
    }
  render() {
    console.log("ComponentB render")
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default ComponentB
