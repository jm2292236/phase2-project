import React from 'react'

function PropertyBasic({image, city, state}) {
    return (
        <>
            <img src={image}></img>
            <h4>{`${city}, ${state}`}</h4>
        </>
    )
}

export default PropertyBasic;
