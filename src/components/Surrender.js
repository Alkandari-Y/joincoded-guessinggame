import React from 'react'

function Surrender(props) {

    const surrenderHandler = () => {
        props.setCurrentNum(0)
        props.setGameStatus(false)
        props.setUserLimit(null)
        props.setNumberOfRounds(0)
        props.setHint('')
    }



    return (
        <div>
            <button className="" onClick={()=> surrenderHandler()}>Surrender!</button>
        </div>
    )
}

export default Surrender
