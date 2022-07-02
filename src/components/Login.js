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
        <div className='form-data'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    autoFocus
                    type="text" 
                    id="email"
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />

                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;
