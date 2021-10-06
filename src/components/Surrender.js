import React from 'react'

function Surrender(props) {

    const surrenderHandler = () => {
        props.setCurrentNum(0)
        props.setGameStatus(false)
        props.setUserLimit(null)
        props.setNumberOfRounds(0)
        props.setHint('')
        props.setWins(0)
    }



    return (
        <div className="surrender">
            <button className="btn-surrender" onClick={()=> surrenderHandler()}>Surrender!</button>
        </div>
    )
}

export default Surrender
