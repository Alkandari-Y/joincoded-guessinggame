import React from 'react'

function Statsbar(props) {
    return (
        <div className="statsBar">
            <h2 className="statsBar-round-number">Round: {props.numberOfRounds}</h2>
            <h2 className="stats-Bar-attempts">Attempts Left: {props.userLimit}</h2>
            <h2>Won Rounds: {props.currentWins }</h2>
        </div>
    )
}

export default Statsbar
