import React from 'react';


export default function GlobalScore(props) {
    console.log("props from global score",props )
    return (
        <div>
            Well well well You made it and you succeded all tests with the score of {props.globalScore}
        </div>
    )
}
