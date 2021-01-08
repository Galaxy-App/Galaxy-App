import React, { Component } from 'react';
import Score from './score';
import GlobalScore from './globalScore'

export default class ScoreShow extends Component {
    constructor(props){
        console.log('hello pros from ScoreShow',props)
        super(props)
        this.state={
            score:props.score,
            max:props.max,
            globalScore:props.globalScore
        }
    }
    handleShow(){
        setTimeout(()=>{ this.props.changeView("Memory") }, 6000);
        return (
        <div className="scoreShow">
            <div className="score">
                <Score score={this.state.score} max={this.state.max}/>
            </div>
            <div className="globalScore">
                <GlobalScore globalScore={this.state.globalScore}/>
            </div>
        </div>
        )
    }
    render() {
        return (
            <div>
                {this.handleShow()}
            </div>
        )
    }
}
