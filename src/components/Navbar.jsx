import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
export const Navbar = () => {
    return ( 
    <div className="navbar">
        <div className="logo">
            <img />
        </div>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/open"> Opening Hours </Link>
            <Link to="/join"> Join </Link>
            <Link to="/gallary"> Gallary </Link>
            <Link to="/calorie"> Calorie Calculator </Link>
        </div>
    </div>
  );
};