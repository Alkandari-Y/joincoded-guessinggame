import React from 'react'

function StartGame(props) {


    const eventHandler = () => {
        props.setCurrentNum(Math.floor(Math.random() * 100))
        props.setGameStatus(true);
        props.setUserLimit(5)
        props.setNumberOfRounds(props.numberOfRounds + 1)
        props.setHint('')
        props.setVictory('')
        props.returnInitiate(true)
    }


//Need to add an if statement in the div the change text after first round of game
    return (
        <div className="user-interface-start-game">
            <button className="btn-startGame" onClick={() => eventHandler()}>{props.numberOfRounds === 0 ? 'Start Game' : 'Play Again!'}</button>
        </div>
    )
}

export default StartGame