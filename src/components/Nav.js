
import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../assets/icons_assets/Logo.svg";
import menuIcon from "./../assets/icons_assets/mobile-menu-icon.svg";
import closeIcon from "./../assets/icons_assets/close-menu-icon.svg";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" alt="logo" src={Logo} />
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <button className="nav-button">Order online</button>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        <img src={isMobile ? closeIcon : menuIcon} alt="menu-icon" />
      </button>
    </nav>
  );
};

export default Nav;