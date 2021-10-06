import React from 'react'

function Statsbar(props) {
    return (
        <div>
            <h2>Round {props.numberOfRounds}</h2>
            <h2>Attempts Left {props.userLimit}</h2>
        </div>
    )
}

export default Statsbar
