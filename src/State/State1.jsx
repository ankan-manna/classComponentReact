import react, { Component } from "react"
class State1 extends Component {
    constructor() {
        super();
        this.state = {
            message: "subscribe please",
            btn: "Subscribe"
        }
    }
    changeState() {
        // this.setState({
        //     message:"thank you",
        //     btn:"Done"
        // })
        this.setState((prevSt) => {
            if (prevSt.btn === "Subscribe") {
                return {
                    message: "Thanks  ",
                    btn: "done "
                }
            }
            else return {
                message: "subscribe please",
                btn: "Subscribe"
            }

        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.changeState() }}>{this.state.btn}</button>
            </>
        )
    }
}
export default State1;