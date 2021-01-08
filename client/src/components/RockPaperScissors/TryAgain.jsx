import React from 'react'

export default function TryAgain  (props)  {
    console.log ("hello from try again",props.handleClickRender)
    return (
        <div>
            <button onClick={props.handleClickRender}>Try again</button>
        </div>
    )
}

