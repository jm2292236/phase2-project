import React, { useState } from 'react'
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

function Profile({currentUser, setCurrentUser}) {
    const [phone, setPhone] = useState(currentUser.phone);
    const [bankAccount, setBankAccount] = useState(currentUser.bankAccount);

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3002/users/${currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({phone, bankAccount}),
        });

        setCurrentUser({...currentUser, phone, bankAccount})
        alert("Profile updated");
    }

    return (
        <div className='form-data'>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>First name:</label>
                <input className="no-edit" value={currentUser.firstName} readOnly></input>
                <label>Last name:</label>
                <input className="no-edit" value={currentUser.lastName} readOnly></input>
                <label>Email:</label>
                <input className="no-edit" value={currentUser.email} readOnly></input>
                <label>Phone</label>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone" />
                <label>Bank account</label>
                <input type="text" value={bankAccount} onChange={e => setBankAccount(e.target.value)} placeholder="Enter bank account" />

                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Profile;
