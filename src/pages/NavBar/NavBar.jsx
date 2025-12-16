import React from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            
            <div className="navbar-left-actions">
                <div className="logo-placeholder" title="Logo"></div>
            </div>

            <div className="navbar-center-brand">
                <span className="brand-text">ECHOGUARD</span>
            </div>

            <div className="navbar-right-logo">
                <FaUserCircle className="icon profile-icon" title="View Profile" />
                <FaEdit className="icon edit-icon" title="Edit Settings" />
            </div>
            
        </nav>
    );
};

export default Navbar;