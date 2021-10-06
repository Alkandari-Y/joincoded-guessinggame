import React, { useState } from 'react';
import StartGame from './StartGame'
import UserAttempt from './UserAttempt'
import Surrender from './Surrender'
import Statsbar from './Statsbar'


function Interface() {

    const [gameStatus, setGameStatus] = useState(false)
    const [userLimit, setUserLimit] = useState(null)
    const [currentNum, setCurrentNum] = useState(null)
    const [numberOfRounds, setNumberOfRounds] = useState(0)
    const [victory, setVictory] = useState('') //virtory options '' or 'won' or 'lost'
    const [hint, setHint] = useState('')

//Might Need to update start button to reset victory


    return (
        <div className="user-interface">

            {numberOfRounds>0 && <Statsbar   numberOfRounds={numberOfRounds}
                            userLimit={userLimit}
            />}

            {(gameStatus===true && hint.length > 1) &&
                <h3>{ hint}</h3>
            }

            { (!gameStatus || victory==='lost' ) && <StartGame 
                currentNum={ currentNum }           setCurrentNum={ setCurrentNum }
                gameStatus={ gameStatus }           setGameStatus={ setGameStatus }
                userLimit={userLimit}               setUserLimit={setUserLimit}
                numberOfRounds={numberOfRounds}     setNumberOfRounds={ setNumberOfRounds}
                                                    setVictory={ setVictory }
                                                    setHint={ setHint }
            />
            }

            <UserAttempt
                userLimit={userLimit} setUserLimit={setUserLimit}
                currentNum={currentNum}
                gameStatus={gameStatus} setGameStatus={setGameStatus}
                numberOfRounds={numberOfRounds} setNumberOfRounds={setNumberOfRounds}
                victory={ victory }                   setVictory={ setVictory }
                hint={ hint }                           setHint={ setHint}
            />
            
            
            <Surrender
                        currentNum={ currentNum }           setCurrentNum={ setCurrentNum }
                        gameStatus={ gameStatus }           setGameStatus={ setGameStatus }
                        userLimit={userLimit}               setUserLimit={setUserLimit}
                        numberOfRounds={numberOfRounds}     setNumberOfRounds={setNumberOfRounds}
                        hint={ hint }                       setHint={ setHint}
            />
        </div>
    );
}

export default Interface

