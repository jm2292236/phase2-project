import React, { useState } from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        phone: "",
        bankAccount: ""
    });


    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        setFormData({
            ...formData,
            firstName: "",
            lastName: "",
            email: "",
            pwd: "",
            phone: "",
            bankAccount: ""
        });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required/>

                <label htmlFor="lastName">Last name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="pwd" value={formData.pwd} onChange={handleChange} placeholder="Password" required/>

                <label htmlFor="phone">Phone:</label>
                <input type="phone" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>

                <label htmlFor="bankAccount">Bank account:</label>
                <input type="number" id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} placeholder="Bank account" />

                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup;
