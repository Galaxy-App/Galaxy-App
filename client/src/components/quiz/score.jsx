import React, { Component } from 'react'

export default class Score extends Component {
    constructor(props){
        super(props)
        this.state={
            score:props.score,
            max:props.max,
        }
    }
    render() {
        return (
            <div>
                "You scored {this.state.score} out of {this.state.max}"
            </div>
        )
    }
}
