import React from 'react'

// const imgStyles = {
//     display: "inline-block",
//     width: "40rem",
//     padding: "12px",
//     margin: "0 6px 6px",
// };

function PropertyForm({currentUser, property}) {
    return (
        <div>
            <img src={property.image}></img>
            <p>{`(user ID: ${currentUser.id} prop ID: ${property.id})`}</p>
            <h1>{property.address}</h1>
            <h4>{`BED: ${property.bed}  BATH: ${property.bath}  SQ FT: ${property.sqft}  YEAR BUILT: ${property.yearBuilt}`}</h4>
            <h5>{`PURCHASE PRICE: $${property.purchasePrice}  MONTHLY RENT: $${property.monthlyRent}`}</h5>
        </div>
    )
}

export default PropertyForm;
