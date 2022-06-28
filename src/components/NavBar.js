import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "darkgoldenrod",
    textDecoration: "none",
    color: "white",
};

function NavBar({currentUser}) {
    return (
        <div>
            <NavLink
                to="/"
                style={linkStyles}
            >
                Home
            </NavLink>

            <NavLink
                to="/login"
                style={linkStyles}
            >
                Login
            </NavLink>

            <NavLink
                to="/signup"
                style={linkStyles}
            >
                Sign Up
            </NavLink>

            <NavLink
                to="/propertyList"
                style={linkStyles}
            >
                Properties List
            </NavLink>

            <NavLink
                to="/investmentForm"
                style={linkStyles}
            >
                Investment Form
            </NavLink>

            <NavLink
                to="/portfolio"
                style={linkStyles}
            >
                Portfolio
            </NavLink>

            <NavLink
                to="/about"
                style={linkStyles}
            >
                About
            </NavLink>

            <NavLink
                to="/profile"
                style={linkStyles}
            >
                {currentUser.email ? <h3>Hello, {currentUser.fullName}</h3> : "Profile"}
            </NavLink>

        </div>
    )
}

export default NavBar;
