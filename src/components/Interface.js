import React, { useState } from 'react';
import StartGame from './StartGame'
import UserAttempt from './UserAttempt'
import Surrender from './Surrender'
import Statsbar from './Statsbar'
import Prize from './Prize'

function Interface(props) {

    let inits = [];

    const [gameStatus, setGameStatus] = useState(false)
    const [userLimit, setUserLimit] = useState(null)
    const [currentNum, setCurrentNum] = useState(null)
    const [numberOfRounds, setNumberOfRounds] = useState(0)
    const [victory, setVictory] = useState('') //virtory options '' or 'won' or 'lost'
    const [hint, setHint] = useState('')
    const [currentWins, setWins] = useState(0)
console.log(currentNum)
    const returnInitiate = (status) => {
        inits.push(status)
        const i = inits[0]
        props.setInitiate(i)
    }
//Might Need to update start button to reset victory
//Display Currentwins


    return (
        <div className="user-interface">

            {numberOfRounds > 0 && <Statsbar
                numberOfRounds={numberOfRounds}
                userLimit={userLimit}
                currentWins={ currentWins}
            />}

            {(gameStatus===true && hint.length > 1) &&
                <h3 className="user-interface-hint">{ hint}</h3>
            }

            { (!gameStatus || victory==='lost' ) && <StartGame 
                currentNum={ currentNum }           setCurrentNum={ setCurrentNum }
                gameStatus={ gameStatus }           setGameStatus={ setGameStatus }
                userLimit={userLimit}               setUserLimit={setUserLimit}
                numberOfRounds={numberOfRounds}     setNumberOfRounds={ setNumberOfRounds}
                                                    setVictory={ setVictory }
                                                    setHint={ setHint }
                                                    returnInitiate={returnInitiate}
            />
            }

            <UserAttempt
                userLimit={userLimit}                   setUserLimit={setUserLimit}
                currentNum={currentNum}
                gameStatus={gameStatus}                 setGameStatus={setGameStatus}
                numberOfRounds={numberOfRounds}         setNumberOfRounds={setNumberOfRounds}
                victory={ victory }                     setVictory={ setVictory }
                hint={ hint }                           setHint={ setHint}
                currentWins={currentWins }              setWins={setWins}
            />
            
            
            <Surrender
                        currentNum={ currentNum }           setCurrentNum={ setCurrentNum }
                        gameStatus={ gameStatus }           setGameStatus={ setGameStatus }
                        userLimit={userLimit}               setUserLimit={setUserLimit}
                        numberOfRounds={numberOfRounds}     setNumberOfRounds={setNumberOfRounds}
                        hint={ hint }                       setHint={ setHint}
                                                            setWins={setWins}
            />
            {(currentWins===5) && <Prize />}
        </div>
    );
}

export default Interface

