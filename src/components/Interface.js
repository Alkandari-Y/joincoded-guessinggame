import React, { useState } from 'react';
import StartGame from './StartGame'
import UserAttempt from './UserAttempt'
import Surrender from './Surrender'


function Interface() {

    const [gameStatus, setGameStatus] = useState(false)
    const [userLimit, setUserLimit] = useState(null)
    const [currentNum, setCurrentNum] = useState(null)
    const [numberOfRounds, setNumberOfRounds] = useState(0)

    console.log(`Current Number is : ${gameStatus}`)
    console.log(`Number of Attempt remaining: ${userLimit}`)
    console.log(`Current Number is : ${currentNum}`)
    console.log(`Number of Attempt remaining: ${numberOfRounds}`)


    return (
        <div>
            
            { !gameStatus && <StartGame 
                currentNum={ currentNum }       setCurrentNum={ setCurrentNum }
                gameStatus={ gameStatus }       setGameStatus={ setGameStatus }
                userLimit={userLimit}           setUserLimit={setUserLimit}
            // numberOfRounds={ numberOfRounds } setNumberOfRounds={ setNumberOfRounds }
            />
            }
            
            <input placeholder="Guess A Number!"></input>
            <UserAttempt userLimit={userLimit} setUserLimit={setUserLimit} />
            
            
            <Surrender />
        </div>
    );
}

export default Interface

