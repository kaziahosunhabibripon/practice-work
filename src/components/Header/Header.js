import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="top-header">
                <h1>Employee Details Information List...</h1>
            </div>
            <div className="navbar">
                <img src={logo} alt=""/>
                <nav className="nav-navbar">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/details">Details</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;