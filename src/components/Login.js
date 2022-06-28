import React, { useState } from 'react'

function Login({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault() ;

        const credentials = {
            email,
            password,
          };
      
          // Reset credentials to be empty in case they are incorrect
          setEmail("");
          setPassword("");

          // Check that user input is good by sending 
          // request to the backend and **authenticating user**
          onSubmit(credentials)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                </div>

                <div>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;
