import React, { Component } from 'react'
import axios from "axios"
export class GETreq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res)
            this.setState({users:res.data})
        }).catch((err)=>console.log("error"))
    }
  render() {
    const {users}=this.state
    return (
      <div>
        hii
        {
            users?users.map((ele)=>{
                return <p key={ele.id}>{ele.name}</p>
            }):null
        }
      </div>
    )
  }
}

export default GETreq
