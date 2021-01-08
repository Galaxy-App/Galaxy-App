import React, { Component } from 'react';
import './index.css';
import GuestPick from './guestPick';
import HousePick from './HousePick';
import ReleaseWin from './releaseWin';


export default class Rps extends Component {
    constructor(props){
        super(props)
        console.log('hello pros from Rps',props)
        this.symbols=["rock","paper","scissors"]
        this.state={
            guestPick:"",
            housePick:"",
            score:0,
            winner:"",
            chosen:"guest",
            globalScore:this.props.globalScore
        }
        this.chosenState=this.chosenState.bind(this);
        this.guestPickState=this.guestPickState.bind(this);
        this.runGame=this.runGame.bind(this);
        this.decideWinner=this.decideWinner.bind(this);
        this.setScore=this.setScore.bind(this);
        this.handleClickRender=this.handleClickRender.bind(this);
    };
    handleClickRender(){
        console.log('clicked')
        this.chosenState("guest")
        // return <GuestPick chosenState={this.chosenState} guestPickState={this.guestPickState}/>
    }
    chosenState(param){
        this.setState({
            chosen:param
        })
    };
    guestPickState(param){
        this.setState({
            guestPick:param
        })
    };
    runGame (){
        let counter=0;
        let myInterval= setInterval(()=>{
            counter++
            this.setState({
                housePick:this.symbols[Math.floor(Math.random()*3)]
            })
        if(counter>10){
            clearInterval(myInterval)
            this.setState({
                winner:this.decideWinner(),
                chosen:"win"
            });
            
        }
        this.setScore()
        },100)
    };
    decideWinner(){
        const{guestPick,housePick}=this.state;
        if(guestPick===housePick){
            return "It's a draw"
        }
        if((guestPick==="rock" && housePick==="scissors")||
            (guestPick==="paper" && housePick==="rock")||
            (guestPick==="scissors" && housePick==="paper")){
                return "You won!!"
            }
        return "Opss! You lost"
    };
    setScore(){
        if(this.state.winner==="It's a draw"){
            this.setState({score:5})
            this.props.updateGlobalScore(5)
            console.log("qwerty",this.state.globalScore)
        }
        else if(this.state.winner==="You won!!"){
            this.setState({score:10
            })
            this.props.updateGlobalScore(10)
            console.log("qwerty",this.state.globalScore)
        }
    };
    componentDidUpdate(){
        if(this.state.winner==="You won!!"){
            setTimeout(()=>{
            console.log('hello from componentDidUpdate RPS',this.props.view)
            this.props.changeView("Quiz")
            },4000)

            // console.log ("hello",this.state.score)
            // let score=this.state.score
            // Axios.post('/user/score', score)
            // .then(response => {
            //     console.log('Score Added Successfullly', response)
            // })
            // .catch(error => {
            //     console.error('Error Adding Score', error)
            // })

        }
    }


    render() {

            if(this.state.chosen==="guest"){
                return(
                    <div>
                        <GuestPick chosenState={this.chosenState} guestPickState={this.guestPickState}/>
                    </div>
                )
            }else if (this.state.chosen==="house"){
                return(
                    <div>
                        <HousePick runGame={this.runGame} guestPick={this.state.guestPick}
                                    housePick={this.state.housePick} winner={this.state.winner}
                                    chosenState={this.chosenState}
                        />
                    </div>
                )
            }
            else if (this.state.chosen==="win"){
                return(
                    <div>
                    <ReleaseWin winner={this.state.winner} score={this.state.score} handleClickRender={this.handleClickRender} />
                    </div>
                )
            }
    }
}
