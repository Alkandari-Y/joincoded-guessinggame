import React from 'react'

function StartGame(props) {


    const eventHandler = () => {
        props.setCurrentNum(Math.floor(Math.random() * 100))
        props.setGameStatus(true);
        props.setUserLimit(5)
        
    }

    // userLimit, setUserLimit
    // currentNum, setCurrentNum
    // numberOfTries, setNumberOfTries

//Need to add an if statement in the div the change text after first round of game
    return (
        <div>
            <button className="btn-startGame" onClick={() => eventHandler()}>Start Game</button>
        </div>
    )
}

export default StartGame
