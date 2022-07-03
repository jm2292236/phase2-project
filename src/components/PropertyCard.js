import React, { useState } from 'react';


function PropertyCard({currentUser, property}) {
    const userActive = currentUser.id;
    const [sharesToBuy, setSharesToBuy] = useState(1);
    const [myShares, setMyShares] = useState(property.sharesOwned);


    function handleSetSharesToBuyOnChange(e) {
        setSharesToBuy(e.target.value)
    }


    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3002/properties/${property.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                availableShares: property.availableShares -= sharesToBuy,
                sharesOwned: myShares + parseInt(sharesToBuy)
            }),
        });
        console.log("Shares bought");

        // Update state
        setMyShares(myShares => myShares + parseInt(sharesToBuy));
    }


    return (
        <div className='property-card'>
            <div className='base-card'>
                <img src={property.image}></img>
                <p>{`(user ID: ${currentUser.id} prop ID: ${property.id})`}</p>
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
                <h4>{`MY SHARES ${myShares}`}</h4>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="sharesToBuy">Shares to buy:</label>
                    <input 
                        type="number" min="1" step="1"
                        id="shareToBuy" 
                        name="sharesToBuy" 
                        value={sharesToBuy}
                        onChange={handleSetSharesToBuyOnChange}>
                    </input>
                </form>
            </div>
        </div>
    )
}

export default PropertyCard;
