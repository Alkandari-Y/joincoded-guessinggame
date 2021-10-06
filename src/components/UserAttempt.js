import React from 'react'

function UserAttempt(props) {

    const checkCondition = (userGuess) => {
        
        const difference = userGuess - props.currentNum

        if (userGuess === props.currentNum) {
            alert("You win!")
            props.setHint('')
            props.setVictory('won')
            props.setGameStatus(false)
        } else if (difference >= 20) {
            props.setHint("You're too high bro!")
        } else if (difference <= 20 && difference > 0) {
            props.setHint("You're warn but high!")
        } else if (difference <= 0 && difference >= -20) {
            props.setHint("You're close but low!")
        } else if (difference <= -20) {
            props.setHint("You're too low bro!")
        }
    }

    const submitHandler = () => {
        const userInput = document.getElementById('user-input').value
        document.getElementById('user-input').value = null

        if (!props.gameStatus ) {
            alert("Start a game to enter a value")
        } else if (userInput.length === 0) {
            alert('Enter a number!')
        } else if (props.userLimit > 1 && userInput.length >= 1) {
            props.setUserLimit(props.userLimit - 1)
            checkCondition(+userInput)
        } else {
            alert('You ran out of Attempts')
            props.setVictory('lost')
            props.setGameStatus(false)
        }  
    }


    
// userLimit
// setUserLimit
    

// currentNum

// setGameStatus
// numberOfRounds
// setNumberOfRounds

    return (
        <div className="user-interface-inputs">
            <label className="user-input-label" for="user-input">Guess a number between 0 and 100</label>
            <input min="0" max="100" type="number" placeholder="User Input" className="ufi-user-guess" name="user-input" id="user-input"></input>
            <button className="btn-submit-guess" onClick={() => submitHandler()}>Commit</button>
        </div>
    )
}

export default UserAttempt
