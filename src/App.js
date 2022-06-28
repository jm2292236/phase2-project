import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Profile from "./components/Profile";
import PropertiesList from "./components/PropertiesList";
import InterestList from "./components/InterestList";
import Portfolio from "./components/Portfolio";


function App() {
    // Signed in user
    const [currentUser, setCurrentUser] = useState({});
    let navigate = useNavigate();

    function handleUserLogin(loggedUser) {
        setCurrentUser(loggedUser);
        navigate("/portfolio");
    }

    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route path="/" element={<Home currentUser={currentUser}/>} ></Route>
                <Route path="/login" element={<Login onSubmit={handleUserLogin}/>} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/profile" element={<Profile />} ></Route>
                <Route path="/propertiesList" element={<PropertiesList />} ></Route>
                <Route path="/interestList" element={<InterestList />} ></Route>
                <Route path="/portfolio" element={<Portfolio />} ></Route>
                <Route path="/about" element={<About />} ></Route>
            </Routes>
        </div>
    );
}

export default App;
