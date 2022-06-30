import React, {useState, useEffect } from 'react';

import PropertyForm from './PropertyForm';

function PropertyList({currentUser}) {
    const [properties, setProperties] = useState([]);
    const [interestList, setInterestList] = useState([]);

    // Get the interest list if there is a user signed in
    useEffect(() => {
        if (currentUser.id) {
            fetch("http://localhost:3002/interest")
            .then(response => response.json())
            .then(data => {
                // Filter interest list with only the currentUser records
                setInterestList(data.filter(record => record.userId === currentUser.id));
                console.table(interestList);
            });
        }
    }, []);


    // Get the properties
    useEffect(() => {
        fetch("http://localhost:3002/properties")
        .then(response => response.json())
        .then(propertyData => {
            if (!currentUser.id) {setProperties(propertyData); return
            } 
            setProperties(propertyData.map(property => {
                if (interestList.find(record => record.propertyId === property.id)) {
                    property.interest = true
                };
                return property;
            }));
        });
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
            {interestList.map(rec => <p>{rec.userId} || {rec.propertyId}</p>)}
            {propertiesToDisplay}
        </div>
    )
}

export default PropertyList;
