import React from 'react';


function PropertyForm({currentUser, property}) {
    const userActive = currentUser.id;

    function handleInterestList(propertyId) {
        fetch("http://localhost:3002/interest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userId: userActive, propertyId: propertyId}),
        });
        console.log("Added to interest list");
    }


    return (
        <div>
            <img src={property.image}></img>
            <p>{`(user ID: ${currentUser.id} prop ID: ${property.id})`}</p>
            <h1>{property.address}</h1>
            {userActive ? 
                <button onClick={() => handleInterestList(property.id)}>{property.interest ? "Remove from InterestList" : "Add to Interest List"}</button>
                : ""
            }
            <h4>{`BED: ${property.bed}  BATH: ${property.bath}  SQ FT: ${property.sqft}  YEAR BUILT: ${property.yearBuilt}`}</h4>
            <h5>{`PURCHASE PRICE: $${property.purchasePrice}  MONTHLY RENT: $${property.monthlyRent}`}</h5>
        </div>
    )
}

export default PropertyForm;
