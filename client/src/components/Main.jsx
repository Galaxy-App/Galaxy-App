import Rps from './RockPaperScissors/index';
import MainLog from './RegisterSignIn/index';
import Quiz from './quiz/index';
import Memory from './memoryGame/index'


import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      view:"MainLog"
    }
    this.changeView=this.changeView.bind(this)
  }
  changeView(param){
    this.setState({
      view:param
    })
  }
  render() {
    if(this.state.view==="Rps"){
      return (
        <div>
          <Rps view={this.state.view} changeView={this.changeView}/>
        </div>
      )
    }
    else if(this.state.view==="MainLog"){
      return (
        <div>
          <MainLog view={this.state.view} changeView={this.changeView}/>
        </div>
      )
    }
    else if(this.state.view==="Quiz"){
      return (
        <div>
          <Quiz view={this.state.view} changeView={this.changeView}/>
        </div>
      )
    }
    else if(this.state.view==="Memory"){
      return (
        <div>
          <Memory view={this.state.view} changeView={this.changeView}/>
        </div>
      )
    }
  }
}
