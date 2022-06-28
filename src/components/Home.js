import React from 'react'

function Home({currentUser}) {
    if (!currentUser.email) {
        return (
            <h1>Invest in your Future</h1>
        )
    } else {
        return (
            <div>Home</div>
        )
    }
}

export default Home;
