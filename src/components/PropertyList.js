import React, {useState, useEffect } from 'react';

import PropertyCard from './PropertyCard';

function PropertyList({currentUser}) {
    const [properties, setProperties] = useState([]);

    // Get the properties
    useEffect(() => {
        fetch("http://localhost:3002/properties")
        .then(response => response.json())
        .then(propertyData => setProperties(propertyData))
    }, []);


    const propertiesToDisplay = properties.map(property => {
        return (
            <PropertyCard
                key={property.id} 
                currentUser={currentUser} 
                property={property}
            />
        )
    });

    return (
        <div className='property-list'>
            {propertiesToDisplay}
        </div>
    )
}

export default PropertyList;
