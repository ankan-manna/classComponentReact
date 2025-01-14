import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mesg: "Hellow!"
        }

        this.clickHandeler=this.clickHandeler.bind(this)// for 5th style
    }

    // clickHandeler(){
    //     console.log(this)
    //     this.setState({
    //         mesg:"Welcome"
    //     })
    // }// 1)it might through error this=>undefined

    //  clickHandeler = () => {
    //     console.log(this)
    //     this.setState({
    //         mesg: "Welcome"
    //     })
    // }// 2) this might work

    //  clickHandeler(){
    //     console.log(this)
    //     this.setState({
    //         mesg:"Welcome"
    //     })
    // }// 3)

    //  clickHandeler(){
    //     console.log(this)
    //     this.setState({
    //         mesg:"Welcome"
    //     })
    // }// 4)

     clickHandeler(){
        console.log(this)
        this.setState({
            mesg:"Welcome"
        })
    }// 5)

    render() {
        return (
            <div>
                <p>mesg: {this.state.mesg}</p>
                {/*1 */}
                {/* <button onClick={this.clickHandeler}>click1</button>  */}
                {/*2 */}
                {/*<button onClick={this.clickHandeler}>click2</button> */}
                {/*3 */}
                {/* <button onClick={()=>this.clickHandeler()}>click3</button> */}
                {/* 4 */}
                {/* <button onClick={this.clickHandeler.bind(this)}>click4</button> */}
                {/* 5 */}
                <button onClick={this.clickHandeler}>click5</button>
            </div>
        )
    }
}

export default EventBind
