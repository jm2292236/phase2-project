import React, { useState } from 'react';

import PropertyBasic from './PropertyBasic';
import InvestForm from './InvestForm';

function PropertyCard({currentUser, property, invest = true}) {
    const [sharesToBuy, setSharesToBuy] = useState(1);
    const [myShares, setMyShares] = useState(property.sharesOwned);


    function handleSetSharesToBuyOnChange(e) {
        // Validate no negative values or more than available shares
        const value = parseInt(e.target.value);
        if (value < 1 || value > property.availableShares) return;

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
            <div>
                <PropertyBasic 
                    image={property.image} 
                    city={property.city}
                    state={property.state}
                />
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
            
                {invest && 
                <div>
                    <InvestForm 
                        onSubmit={onSubmit} 
                        onChange={handleSetSharesToBuyOnChange} 
                        sharesToBuy={sharesToBuy}
                        />
                </div>}
            </div>
        </div>
    )
}

export default PropertyCard;
