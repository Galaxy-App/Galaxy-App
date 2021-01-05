import React  from 'react';
import PlayerCards from './PlayerCards';
import './index.css';

export default function HousePick(props) {
console.log('house',props.housePick)
        return (
            <div className="rps">
                <PlayerCards
                    color="blue" symbol={props.guestPick}
                />
                <PlayerCards
                    color="red" symbol={props.housePick}
                />
                <p>{props.winner}</p>
                <button onClick={props.runGame}>Run Game</button>
            </div>
        )
    }


