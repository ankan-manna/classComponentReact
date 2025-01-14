import React, { Component } from 'react'

export class POSTreq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:"",
         lastname:""
      }
    }
    handelChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})//due to same val of name attribut and state key 
    }
    handelSubmit=()=>{
        const {firstname,lastname}=this.state
        alert(firstname+" "+lastname)
    }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input type="text" name="firstname" value={this.state.firstname} onChange={this.handelChange}/><br/>
        <input type='text' name="lastname"  value={this.state.lastname} onChange={this.handelChange}/><br/>
        <button type='Submit'>Submit</button>
      </form>
    )
  }
}

export default POSTreq
