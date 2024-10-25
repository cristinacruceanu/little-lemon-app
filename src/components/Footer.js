import React from "react";
import "./../styles/Footer.css";
import FooterLogo from "./../assets/icons_assets/footer-logo.png";
import FacebookIcon from "./../assets/icons_assets/facebook-icon.svg";
import InstagramIcon from "./../assets/icons_assets/instagram-icon.svg";
import WhatsappIcon from "./../assets/icons_assets/whatsapp-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="logo" className="footer-logo-img" />
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#menu-special-occasions">Special Occasions</a>
              </li>
              <li>
                <a href="#menu-holiday-season">Holiday Season</a>
              </li>
              <li>
                <a href="#menu-lunch">Lunch</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3> Reservations</h3>
            <ul>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
              <li>
                <a href="#order-online">Order online</a>
              </li>
              <li>
                <a href="#delivery">Delivery</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contact">
          <div>
            <h3>Contact</h3>
            <p>
              <a href="tel:+4 0123 456 789">+4 0123 456 789 </a>
            </p>
            <p>
              <a href="tel:+4 0012 345 678">+4 0012 345 678</a>
            </p>
            <p>
              <a href="mailto:eat@little_lemon.com">eat@little_lemon.com</a>
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={FacebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.Whatsapp.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={WhatsappIcon} alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        &copy; {currentYear}{" "}
        <a
          href="https://www.cristinacruceanu.dev"
          target="_blank"
          rel="noreferrer"
        >
          cristinacruceanu.dev
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
