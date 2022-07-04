import React from 'react'

function PropertyBasic({image, city, state, sharesOwned = false}) {
    return (
        <div className='base-card'>
            <img src={image}></img>
            <h2>{`${city}, ${state}`}</h2>
            
            {sharesOwned && 
                <h2>{`Investment $${sharesOwned.toLocaleString('en-US')}`}</h2>
            }
        </div>
    )
}

export default PropertyBasic;
