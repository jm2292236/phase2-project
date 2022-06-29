import React, {useState, useEffect } from 'react';

import PropertyForm from './PropertyForm';

function PropertyList({currentUser}) {
    const [properties, setProperties] = useState([]);

    // Get the properties
    useEffect(() => {
        fetch("http://localhost:3002/properties")
        .then(response => response.json())
        .then(data => setProperties(data));
    }, []);
    
    const propertiesToDisplay = properties.map(property => {
        return (
            <PropertyForm 
                key={property.id} 
                currentUser={currentUser} 
                property={property}
            />
        )
    });

    return (
        <div>
            {propertiesToDisplay}
        </div>
    )
}

export default PropertyList;
