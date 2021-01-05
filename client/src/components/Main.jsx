import Rps from './RockPaperScissors/index';
import MainLog from './RegisterSignIn/index'


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
  }
}
