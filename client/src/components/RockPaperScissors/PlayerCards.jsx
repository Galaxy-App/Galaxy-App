import React from "react";
import './index.css';
import rock from './images/rock.png';
import paper from './images/paper.png';
import scissors from './images/scissors.png';


export default function PlayerCards(props) {
    const images={rock,paper,scissors};

        return(
            <div  className="player-card">
                <div className='guestPickCard'>
                    <img alt="" src={images[props.guestPick]}/>
                </div>
                <div className='housePickCard'>
                    <img alt="" src={images[props.housePick]}/>
                </div>
            </div>
        )
}