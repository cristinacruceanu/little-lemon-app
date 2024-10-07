import React from "react";
import Logo from "./../assets/icons_assets/Logo.svg";

const navigation = [
  {
    name: "home",
    url: "https://little-lemon-restaurant-tau.vercel.app/#home",
  },
  {
    icon: "about",
    url: "https://little-lemon-restaurant-tau.vercel.app/#about",
  },
  {
    icon: "menu",
    url: "https://little-lemon-restaurant-tau.vercel.app/#menu",
  },
  {
    icon: "reservation",
    url: "https://little-lemon-restaurant-tau.vercel.app/reservations",
  },
  {
    icon: "reservation",
    url: "https://little-lemon-restaurant-tau.vercel.app/orderOnline",
  },
];

const Nav = () => {
  return (
    <nav className="flex-nav">
      <img alt="logo" src={Logo} />
      <div className="flex-nav">
        <ul>
          <li key={navigation.url}>
            <a href={navigation.url} target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
        <button>Order online</button>
      </div>
    </nav>
  );
};

export default Nav;
