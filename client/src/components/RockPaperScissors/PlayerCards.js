import React from "react";
import './index.css';
export default function PlayerCards({color,symbol}) {
let url="url('./images/"+ symbol +".jpg')"
        const style={
            backgroundImage:url,
            backgroundColor:color
        }
        return(
            <div style={style} className="player-card">
            </div>
        )
}