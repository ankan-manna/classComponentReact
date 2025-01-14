import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ankan"
        }
        console.log("LifecycleB Constructor")
    }
    static getDerivedStateFromProps(props, state) { //called every time when component will re-render
        console.log("LifecycleB getDerivedStaticFromProps")
        return null // or an object with updated state
    }
    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdae")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }
    changeState = () => {
        this.setState({
            name: "Manna"
        })
    }
    render() {
        console.log("LifecycleB render")
        return (
            <>
                <div>LifeCycle B</div>


            </>
        )
    }
}

export default LifecycleB
