import react, { Component } from "react";
class SetState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.number
        }
    }
    incr() {
        // this.state.count=this.state.count+1;//Not show in UI due to it is not rerendering
        // console.log(this.state.count)// this will update the value of count but
        // for this reason we use setState
        this.setState({
            count: this.state.count + 1
        })
        console.log("incr", this.state.count) // see in console this is run 1 stape back 
        //so we use like in decr==> this due to setState are Async
    }
    decr() {
        this.setState(
            {
                count: this.state.count - 1
            },
            () => { console.log("cheak", this.state.count) }
        )
        console.log("decr",this.state.count)
    }
    incrAdv(){
        this.setState((prevState)=>({ //see carefully
            count:prevState.count+1 // inside call-back we pass a object
        }))
    }
    incFive(){ // due to react fiber grouping that not works as per need
        // this.incr()
        // this.incr()
        // this.incr()
        // this.incr()
        // this.incr()
        this.incrAdv()
        this.incrAdv()
        this.incrAdv()
        this.incrAdv()
        this.incrAdv()
        
    }
    render() {
        return (
            <>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incr()}>+</button>
                <button onClick={() => this.decr()}>-</button>
                <button onClick={()=>this.incFive()}>+5x</button>
            </>
        )
    }
}
export default SetState;