import React, { useState } from 'react'

function Login({onSubmit}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault() ;

        const credentials = {
            userName,
            password,
          };
      
          // Check that user input is good by sending 
          // request to the backend and **authenticating user**
          onSubmit(credentials)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="User name" required/>
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
