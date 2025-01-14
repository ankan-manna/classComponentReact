import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.myRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.myRef)
        this.myRef.current.focus()
    }
    clickHandler=()=>{
        alert(this.myRef.current.value)
    }
  render() {
    return (
      <form>
        <input type="text" ref={this.myRef} />
        <button onClick={this.clickHandler}>Click</button>
      </form>
    )
  }
}

export default RefsDemo
