import React from 'react';
import './index.css';

export default function ReleaseWin(props) {
    return (
        <div>
            <h1>{props.winner}</h1>
            <h1>Your score is {props.score}</h1>
        </div>
    )
}
