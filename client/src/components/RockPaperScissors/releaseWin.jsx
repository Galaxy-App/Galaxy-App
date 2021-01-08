import React from 'react';
import './index.css';
import TryAgain from './TryAgain'

export default function ReleaseWin(props) {
if(props.winner==="You won!!"){
    return (
        <div>
            <h1>{props.winner}</h1>
            <h1>Your score is {props.score}</h1>
            <h1>Let's complete our trip</h1>
        </div>
    )
}
else if(props.winner==="It's a draw"){
    return (
        <div>
            <h1>{props.winner}</h1>
        <TryAgain handleClickRender={props.handleClickRender}/>
        </div>
    )
}
else if(props.winner==="Opss! You lost"){
    return (
        <div>
            <h1>{props.winner}</h1>
            <h1>See u next time</h1>
        </div>
    )
}



}
