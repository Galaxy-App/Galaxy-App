import React  from 'react';
import PlayerCards from './PlayerCards';
import './index.css';

export default function HousePick(props) {
console.log('house',props.housePick)
        return (
            <div className="rps">

                <PlayerCards guestPick={props.guestPick} housePick={props.housePick} />

                <button className="btn-runGame" onClick={props.runGame}>Run Game</button>

            </div>
        )
    }


