import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "120px",
    borderRadius: "5%",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#1f1c32",
    textDecoration: "none",
    color: "white",
    textAlign: "center"
};

function NavBar({currentUser}) {
    return (
        <div className='NavBar'>
            <NavLink
                to="/"
                style={linkStyles}
            >
                Home
            </NavLink>

            {!currentUser.email ?
            <>
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
            </>
                :
                ""
            }

            <NavLink
                to="/properties"
                style={linkStyles}
            >
                Properties
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
                {currentUser.email ? `Hello, ${currentUser.firstName}` : "Profile"}
            </NavLink>

        </div>
    )
}

export default NavBar;
