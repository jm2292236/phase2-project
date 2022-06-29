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
                <div>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required/>
                </div>

                <div>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required/>
                </div>

                <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
                </div>

                <div>
                    <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} placeholder="Password" required/>
                </div>

                <div>
                    <input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required/>
                </div>

                <div>
                    <input type="number" name="bankAccount" value={formData.bankAccount} onChange={handleChange} placeholder="Bank account" />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup;
