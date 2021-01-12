import React from 'react';
import paper from './images/paper.png';
import rock from './images/rock.png';
import scissors from './images/scissors.png';
import './index.css';



export default function GuestPick(props) {
    function playGame(e) {
        console.log(e.target.alt)
        props.guestPickState(e.target.alt)
        props.chosenState("house")
    }
    return (
        <div className="guestPick">
        <h1 style={{
        color: "white",
        textalign: "center",
        fontsize: "100px",
        fontweight: "bold",
        }}>Welcome Welcome !! <br/>Let's see are you lucky enough to take this trip with us?<br/>Choose your move</h1>
            <div className="paper">
                <img src={paper} alt="paper" onClick={playGame}/>
            </div>
            <div className="rock" onClick={playGame}>
            <img src={rock} alt="rock"/>
            </div>
            <div className="scissors" onClick={playGame}>
            <img src={scissors} alt="scissors"/>
            </div>
        </div>
    )
}
