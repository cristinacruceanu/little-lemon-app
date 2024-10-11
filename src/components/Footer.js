import React from "react";
import FooterLogo from "./../assets/icons_assets/footer-logo.png";
import FacebookIcon from "./../assets/icons_assets/facebook-icon.svg";
import InstagramIcon from "./../assets/icons_assets/instagram-icon.svg";
import WhatsappIcon from "./../assets/icons_assets/whatsapp-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div classname="footer-container">
        <div classname="footer-logo">
          <img src={FooterLogo} alt="logo" className="footer-logo" />
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
          <h3>Contact</h3>
          <p>Phone number</p>
          <p>Second Phone number</p>
          <p>
            <a href="mailto:eat@little_lemon.com">eat@little_lemon.com</a>
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.Whatsapp.com">
              <img src={WhatsappIcon} alt="Whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
