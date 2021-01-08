import React, { Component } from 'react'

export default class GlobalScore extends Component {
    constructor(props){
        super(props)
        this.state={
            globalScore:props.globalScore
        }
    }
    render() {
        console.log("azerty", this.state.globalScore)
        return (
            <div>
                "Your global score is {this.state.globalScore}"
            </div>
        )
    }
}
