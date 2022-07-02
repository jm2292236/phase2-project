import React from 'react'

function Home({currentUser}) {
    if (!currentUser.email) {
        return (
            <div className='logo'>
                <span>R</span>
                <span>E</span>
                <br/>
                <span>I</span>
                <span>N</span>
                <span>V</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
                <span>!</span>
            </div>
        )
    } else {
        return (
            <div>Home</div>
        )
    }
}

export default Home;
