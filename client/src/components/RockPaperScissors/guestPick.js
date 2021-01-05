import React from 'react';
import paper from './images/paper.jpg';
import rock from './images/rock.jpg';
import scissors from './images/scissors.jpg';
import './index.css';



export default function GuestPick(props) {
    function playGame(e) {
        console.log(e.target.alt)
        props.guestPickState(e.target.alt)
        props.chosenState("house")
    }
    return (
        <div>
        <h1>Choose your move</h1>
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
