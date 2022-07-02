import React from 'react';


function PropertyCard({currentUser, property, onClick}) {
    const userActive = currentUser.id;

    function handleInterestList() {
        if (property.interest) {
            fetch("http://localhost:3002/interest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: userActive, propertyId: property.id}),
            });
            console.log("Added to interest list");
        } else {
            fetch("http://localhost:3002/interest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId: userActive, propertyId: property.id}),
            });
            console.log("Added to interest list");
        }
    }


    return (
        <div className='property-card' onClick={onClick}>
            <div className='base-card'>
                <img src={property.image}></img>
                <p>{`(user ID: ${currentUser.id} prop ID: ${property.id})`}</p>
                {userActive &&
                    <button onClick={() => handleInterestList(property.id, property.interest)}>{property.interest ? "Remove from InterestList" : "Add to Interest List"}</button>
                }
                <h4>{`${property.city}, ${property.state}`}</h4>
            </div>

            <div className='card-details'>
                <h4>{property.address}</h4>
                <h4>{`BED ${property.bed}`}</h4>
                <h4>{`BATH ${property.bath}`}</h4>
                <h4>{`SQ FT ${property.sqft}`}</h4>
                <h4>{`YEAR BUILT ${property.yearBuilt}`}</h4>
                <h4>{`PURCHASE PRICE ${property.purchasePrice}`}</h4>
                <h4>{`MONTHLY RENT ${property.monthlyRent}`}</h4>
                <h4>{`${property.description}`}</h4>
                <h4>{`SHARES ${property.shares}`}</h4>
                <h4>{`SHARE PRICE ${property.sharePrice}`}</h4>
                <h4>{`AVAILABLE SHARES ${property.availableShares}`}</h4>
            </div>
        </div>
    )
}

export default PropertyCard;
