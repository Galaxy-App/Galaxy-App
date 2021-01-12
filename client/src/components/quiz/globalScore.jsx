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
            <div style={{
                margin: "100px",
                color: "white",
                width: "200px",
                textalign: "center",
                fontsize: "50px",
                fontweight: "bold",
            }}>
                "Your global score is {this.state.globalScore}"
            </div>
        )
    }
}
