import React, { useState, useEffect } from 'react'

import PropertyBasic from './PropertyBasic';

function Portfolio(currentUser) {
    const [portfolio, setPortfolio] = useState([]);

    // Get the properties in the user's porfolio
    useEffect(() => {
        fetch("http://localhost:3002/properties")
        .then(response => response.json())
        .then(propertyData => setPortfolio(propertyData))
    }, []);

    // Show only properties with shares owned
    let totalInvestment = 0;
    let propertyCount = 0;
    const propertiesToDisplay = 
        portfolio.filter(property => property.sharesOwned)
        .map(property => {
            // Calculate totals
            totalInvestment += (property.sharesOwned * property.sharePrice);
            propertyCount++;

            return (
                <PropertyBasic
                    key={property.id} 
                    image={property.image} 
                    city={property.city}
                    state={property.state}
                    sharesOwned={property.sharesOwned * property.sharePrice}
                />
        )
    });

    return (
        <div className="portfolio-view">
            <div className='portfolio-totals'>
                <h1>Total Investment</h1>
                <h1>Property Count</h1>
                <h1>${totalInvestment.toLocaleString('en-US')}</h1>
                <h1>{propertyCount}</h1>
            </div>

            <div className='portfolio-cards'>
                {/* Properties the investor has bought shares */}
                {propertiesToDisplay}
            </div>
        </div>
    )
}

export default Portfolio;
