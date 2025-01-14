import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
export class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ankan"
        }
        console.log("LifecycleA Constructor")
    }
    static getDerivedStateFromProps(props, state) { //called every time when component will re-render
        console.log("LifecycleA getDerivedStaticFromProps")
        return null // or an object with updated state
    }
    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdae")
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleA componentDidUpdate")
    }
    changeState = () => {
        this.setState({
            name: "Manna"
        })
    }
    render() {
        console.log("LifecycleA render")
        return (
            <>
                <div>LifeCycle A</div>
                <LifecycleB />
                <button onClick={this.changeState}>Click</button>
            </>
        )
    }
}

export default LifecycleA
