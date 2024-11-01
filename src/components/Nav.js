import React, { useState, useEffect } from "react";
import "./../styles/Nav.css";
import { useNavigate } from "react-router-dom";
import Logo from "./../assets/icons_assets/Logo.svg";
import menuIcon from "./../assets/icons_assets/mobile-menu-icon.svg";
import closeIcon from "./../assets/icons_assets/close-menu-icon.svg";
import Button from "./Button";

const Nav = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
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
          <a href="#home">
            <img
              alt="logo"
              src={Logo}
              className="logo-img"
              onClick={handleNavigate}
            />
          </a>
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <a href="#home" onClick={handleNavigate}>
              Home
            </a>
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
            <a href="#orderonline">Order online</a>
          </li>
          {isMobile && (
            <li>
              <Button variant="primary">Login</Button>
            </li>
          )}
        </ul>

        {!isMobile && (
          <div className="login-button">
            <Button variant="secondary">Login</Button>
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
