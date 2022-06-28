import React from 'react'

function Signup() {
    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <input type="text" name="fullName" placeholder="Full name" required/>
                </div>

                <div>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>

                <div>
                    <input type="password" name="pwd" placeholder="Password" required/>
                </div>

                <div>
                    <input type="phone" name="phone" placeholder="Phone" required/>
                </div>

                <div>
                    <input type="number" name="bankAccount" placeholder="Bank account" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Signup;
