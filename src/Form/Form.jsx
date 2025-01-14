import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            subject:"Vue"
        }
    }

    //   render() {
    //     return (
    //       <form>
    //         Email:<input type="email" value={this.state.email}/><br/>
    //         Pass:<input type="password" value={this.state.password}/> <br />
    //         <button type='submit'>Submit</button>
    //       </form>
    //     )
    //   }// this is not work=> when you type in from it dont show anything in ui -->need proper handeling
    handelEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }// arrow func => easy for eventHandeling
    handelPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handelSubject=(e)=>{
        this.setState({
            subject:e.target.value
        })
    }
    handelSubmit=(e)=>{
        alert(`Email:${this.state.email},Pass:${this.state.password},Sub choosenn is ${this.state.subject}`)
    }
    render() {
        return (
            <form>
                Email:<input type="email" name="email" value={this.state.email} onChange={this.handelEmail} /> <br />
                Pass:<input type="password" name="password" value={this.state.password} onChange={this.handelPassword} /> <br />
                <select name="subject" value={this.state.subject} onChange={this.handelSubject}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select><br/>
                <button type='submit' onClick={this.handelSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form
