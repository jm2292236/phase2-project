import React, { useState, useEffect } from 'react'

import PropertyCard from './PropertyCard';

function Portfolio(currentUser) {
    const [portfolio, setPortfolio] = useState([]);

    // Get the properties in the user's porfolio
    useEffect(() => {
        fetch("http://localhost:3002/properties")
        .then(response => response.json())
        .then(propertyData => setPortfolio(propertyData))
    }, []);
    
    const propertiesToDisplay = portfolio.map(property => {
        return (
            <PropertyCard
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

export default Portfolio;
