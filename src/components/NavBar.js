import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
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
                to="/profile"
                style={linkStyles}
            >
                Profile
            </NavLink>

            <NavLink
                to="/propertiesList"
                style={linkStyles}
            >
                Properties List
            </NavLink>

            <NavLink
                to="/interestList"
                style={linkStyles}
            >
                Interest List
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
        </div>
    )
}

export default NavBar;
