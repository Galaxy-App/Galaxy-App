import React, { Component } from 'react'

export default class ScoreShow extends Component {
    handleShow(){
        setTimeout(()=>{  }, 3000);
        return "You scored"+ {this.state.score}+ "out of" +{this.state.questions.length*5}
    }
    render() {
        return (
            <div>
                {this.handleShow()}
            </div>
        )
    }
}
