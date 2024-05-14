
// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../assets/css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logo} alt="logo" className="logo-img" /> */}
        <Link to="/">Funding Fettle</Link>
      </div>
      <ul className="nav-links">

        <li>
          <Link to="/#">Home</Link>
        </li>
        <li>
          <Link to="/#">Testimonials</Link>
        </li>
        <li>
          <Link to="/#">Pricing</Link>
        </li>
        <li>
          <Link to="/#">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
