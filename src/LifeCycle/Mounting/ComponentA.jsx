import React, { Component } from 'react'
import ComponentB from './ComponentB'
export class ComponentA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Ankan"
        }
        console.log("ComponentA Constructor")
    }
    static getDerivedStateFromProps(props, state) { //called every time when component will re-render
        console.log("ComponentA getDerivedStaticFromProps")
        return null // or an object with updated state
    }
    componentDidMount() {
        console.log("ComponentA componentDidMount")
    }
    render() {
        console.log("ComponentA render")
        return (
            <>
                <div>LifeCycle A</div>
                <ComponentB />
            </>
        )
    }
}

export default ComponentA
