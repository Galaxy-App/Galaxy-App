import React from 'react';


export default function GlobalScore(props) {
    console.log("props from global score",props )
    return (
        <div style={{color:"white" ,clear: "both",
        display: "inline-block",
        overflow: "hidden",
        whiteSpace:"nowrap"}}>
            Well well well You made it and you went throw all tests with the score of {props.globalScore}
        </div>
    )
}
