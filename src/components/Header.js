import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css'; // Make sure to create and link the CSS file

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">PetServices</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        {/* Add more nav items here if needed */}
                    </ul>
                    {/* Add any additional form or elements here */}
                </div>
            </div>
        </nav>
    );
}

export default Header;
