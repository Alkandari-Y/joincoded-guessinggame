import React from 'react'

function Home(props) {
    return (
        <div>
            <div className="home">
                <h1 className="home-title">Win 5 Times to be Initiated</h1>
                <h2 className="home-subtitle">If you've recieved this link, you should be aware of the steps!</h2>

            </div>

            <header className="home-goodluck">

                {!props.initiate && <h3 className="home-goodluck-text">Good luck!</h3>}
            </header>
        </div>
    )
}

export default Home
