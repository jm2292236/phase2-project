import React, { useState } from 'react';

import PropertyBasic from './PropertyBasic';
import InvestForm from './InvestForm';

function PropertyCard({currentUser, property}) {
    const [sharesToBuy, setSharesToBuy] = useState(1);
    const [myShares, setMyShares] = useState(property.sharesOwned);
    const investEnabled = currentUser.id && currentUser.bankAccount !== "";

    function handleSetSharesToBuyOnChange(e) {
        // Validate no negative values or more than available shares
        const value = parseInt(e.target.value);
        if (value < 1 || value > property.availableShares) return;

        setSharesToBuy(e.target.value)
    }


    function onSubmit(e) {
        e.preventDefault();

        // Update number of shares owned and available
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
                <h4 className='elem-col-span-4'>{property.address}</h4>

                <h4>BED</h4>
                <h4>BATH</h4>
                <h4>SQ FT</h4>
                <h4>YEAR BUILT</h4> 
                <p>{property.bed}</p>
                <p>{property.bath}</p>
                <p>{property.sqft.toLocaleString('en-US')}</p>
                <p>{property.yearBuilt}</p>

                <h4 className='elem-col-span-2'>PURCHASE PRICE</h4>
                <h4 className='elem-col-span-2'>MONTHLY RENT</h4>
                <p className='elem-col-span-2'>{property.purchasePrice.toLocaleString('en-US')}</p>
                <p className='elem-col-span-2'>{property.monthlyRent.toLocaleString('en-US')}</p>

                <h4 className='elem-col-span-4'>{`${property.description}`}</h4>

                <h4>SHARES</h4>
                <h4>SHARE PRICE</h4>
                <h4>AVAILABLE SHARES</h4>
                <h4>SHARES OWNED</h4>
                <p>{property.shares}</p>
                <p>{property.sharePrice.toLocaleString('en-US')}</p>
                <p>{property.availableShares}</p>
                <p>{myShares.toLocaleString('en-US')}</p>
            
                {investEnabled ?
                <div>
                    <InvestForm 
                        onSubmit={onSubmit} 
                        onChange={handleSetSharesToBuyOnChange} 
                        sharesToBuy={sharesToBuy}
                        />
                </div>
                :
                <div className='elem-col-span-4' style={{color: "magenta"}}>
                    Unable to invest. Please go to your profile and provide a Bank Account
                </div>}
            </div>
        </div>
    )
}

export default PropertyCard;
