import React, { useState, useEffect } from "react";
import "./../styles/Nav.css";
import { Link } from "react-router-dom";
import Logo from "./../assets/icons_assets/Logo.svg";
import menuIcon from "./../assets/icons_assets/mobile-menu-icon.svg";
import closeIcon from "./../assets/icons_assets/close-menu-icon.svg";
import Button from "./Button";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img alt="logo" src={Logo} className="logo-img" />
          </Link>
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <Link to="/reserve-table">Reservations</Link>
          </li>
          <li>
            <a href="#orderonline">Order online</a>
          </li>
          {isMobile && (
            <li>
              <Link to="/login-page">
                <Button variant="primary">Login</Button>
              </Link>
            </li>
          )}
        </ul>

        {!isMobile && (
          <div className="login-button">
            <Link to="/login-page">
              <Button variant="secondary">Login</Button>
            </Link>
          </div>
        )}

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          <img src={isMobile ? closeIcon : menuIcon} alt="menu-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;

/* a tags to be removed if all pages are done, replace with link to */
