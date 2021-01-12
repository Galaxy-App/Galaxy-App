import React from 'react';
import './index.css';
import TryAgain from './TryAgain';
import Axios from 'axios'

export default function ReleaseWin(props) {
console.log("release win props",props)
if(props.winner==="You won!!"){
    return (
        <div>
            <h1 style={{color:"white"}}>{props.winner}</h1>
            <h1 style={{color:"white"}}>Your score is {props.score}</h1>
            <h1 style={{color:"white"}}>Let's complete our trip</h1>
        </div>
    )
}
else if(props.winner==="It's a draw"){
    return (
        <div>
            <h1 style={{color:"white"}}>{props.winner}</h1>
        <TryAgain handleClickRender={props.handleClickRender}/>
        </div>
    )
}
else if(props.winner==="Opss! You lost"){
    Axios
    .patch(`/users/:${props.id}`,{score:props.globalScore})
    return (
        <div>
            <h1 style={{
            margin: "100px",
            color: "white",
            width: "200px",
            textalign: "center",
            fontsize: "50px",
            fontweight: "bold",
            whiteSpace:"nowrap"
        }}>{props.winner}</h1>
            <h1 style={{color:"white"}}>See u next time</h1>
        </div>
    )
}



}
