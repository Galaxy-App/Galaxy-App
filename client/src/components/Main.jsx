import Rps from './RockPaperScissors/index';
import MainLog from './RegisterSignIn/index';
import MainMem from './memoryGame/index';
import MainQuiz from './quiz/index';
import GlobalScore from './GlobalScore'


import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      view:"MainLog",
      globalScore:0,
      id:""
    }
    this.changeView=this.changeView.bind(this)
    this.updateGlobalScore=this.updateGlobalScore.bind(this)
    this.updateId=this.updateId.bind(this)


  }
  changeView(param){
    this.setState({
      view:param
    })
  }
  updateGlobalScore(param){
    var number= this.state.globalScore + param
    this.setState({
      globalScore: number
    })
  }
  updateId(param){
    this.setState({
      id: param
    })
  }
  render() {
    if(this.state.view==="MainLog"){
      return (
        <div>
          <MainLog view={this.state.view} changeView={this.changeView} globalScore={this.state.globalScore}
            id={this.state.id} updateId={this.updateId}
          />
        </div>
      )
    }
    else if(this.state.view==="Rps"){
      return (
        <div>
          <Rps view={this.state.view} changeView={this.changeView}
          globalScore={this.state.globalScore} updateGlobalScore={this.updateGlobalScore}
          id={this.state.id} updateId={this.updateId}
          />
        </div>
      )
    }
    else if(this.state.view==="Quiz"){
      return (
        <div>
          <MainQuiz view={this.state.view} changeView={this.changeView}
          globalScore={this.state.globalScore} updateGlobalScore={this.updateGlobalScore}
          id={this.state.id} updateId={this.updateId}
          />
        </div>
      )
    }
    else if(this.state.view==="Memory"){
      return (
        <div>
          <MainMem view={this.state.view} changeView={this.changeView}
          globalScore={this.state.globalScore} updateGlobalScore={this.updateGlobalScore}
          id={this.state.id} updateId={this.updateId}
          />
        </div>
      )
    }
    else if(this.state.view==="GlobalScore"){
      return (
        <div>
          <GlobalScore view={this.state.view} changeView={this.changeView}
          globalScore={this.state.globalScore} updateGlobalScore={this.updateGlobalScore}
          id={this.state.id} updateId={this.updateId}
          />
        </div>
      )
    }
  }
}
