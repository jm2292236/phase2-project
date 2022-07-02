import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

function Profile({currentUser}) {
    function handleOnChange() {

    }

    return (
        <div className='form-data'>
            <h1>Profile</h1>
            <form>
                <label>First name:</label>
                <input className="no-edit" value={currentUser.firstName} readOnly></input>
                <label>Last name:</label>
                <input className="no-edit" value={currentUser.lastName} readOnly></input>
                <label>Email:</label>
                <input className="no-edit" value={currentUser.email} readOnly></input>
                <label>Phone</label>
                <input type="text" value={currentUser.phone} onChange={handleOnChange} placeholder="Enter phone" />
                <label>Bank account</label>
                <input type="text" value={currentUser.bankAccount} onChange={handleOnChange} placeholder="Enter bank account" />

                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Profile;
