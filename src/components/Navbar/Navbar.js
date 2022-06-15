import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="nav-left">
          <p>Welcome !</p>
        </div>
        <div className="nav-right">
          <ul>
            <li>Home</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
