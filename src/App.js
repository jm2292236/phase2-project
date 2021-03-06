import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Profile from "./components/Profile";
import PropertyList from "./components/PropertyList";
import Portfolio from "./components/Portfolio";


function App() {
    const [currentUser, setCurrentUser] = useState({});
    let navigate = useNavigate();

    function handleLoginSubmit(credentials) {
        fetch("http://localhost:3002/users")
        .then(response => response.json())
        .then(users => {
            const findUser = users.find(user => (user.email === credentials.email && user.pwd === credentials.password));
            if (findUser) {
                setCurrentUser(findUser);
                navigate("/portfolio");
            } else {
                alert("Email or password is incorrect! Try again.")
            }
        });
    }

    return (
        <div className="App">
            <NavBar currentUser={currentUser}/>

            <Routes>
                <Route path="/" element={<Home currentUser={currentUser}/>} ></Route>
                <Route path="/login" element={<Login onSubmit={handleLoginSubmit}/>} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/portfolio" element={<Portfolio currentUser={currentUser}/>} ></Route>
                <Route path="/properties" element={<PropertyList currentUser={currentUser}/>} ></Route>
                <Route path="/profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>} ></Route>
                <Route path="/about" element={<About />} ></Route>
            </Routes>
        </div>
    );
}

export default App;
