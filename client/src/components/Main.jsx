import Rps from './RockPaperScissors/index';
import MainLog from './RegisterSignIn/index';
import MainMem from './memoryGame/index';
import MainQuiz from './quiz/index'


import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      view:"MainLog",
      globalScore:0
    }
    this.changeView=this.changeView.bind(this)
  }
  changeView(param){
    this.setState({
      view:param
    })
  }
  render() {
    if(this.state.view==="MainLog"){
      return (
        <div>
          <MainLog view={this.state.view} changeView={this.changeView} globalScore={this.state.globalScore}/>
        </div>
      )
    }
    else if(this.state.view==="Rps"){
      return (
        <div>
          <Rps view={this.state.view} changeView={this.changeView} globalScore={this.state.globalScore}/>
        </div>
      )
    }
    else if(this.state.view==="Quiz"){
      return (
        <div>
          <MainQuiz view={this.state.view} changeView={this.changeView} globalScore={this.state.globalScore}/>
        </div>
      )
    }
    else if(this.state.view==="Memory"){
      return (
        <div>
          <MainMem view={this.state.view} changeView={this.changeView} globalScore={this.state.globalScore}/>
        </div>
      )
    }
  }
}
