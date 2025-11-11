import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="nav-wrapper">
          <div className="nav-top">
            <div className="number-email">
              <div className="number-box">
                <i className={`bi bi-telephone-fill ${"telephone"}`}></i>
                <div className="number">+46 8 123 122 44</div>
              </div>
              <div className="email-box">
                <img className="envelope" src="/envelope-icon.svg" alt="Envelope Icon" />
                <div className="email">contact@domain.com</div>
              </div>
            </div>
            <div className="nav-socials">
              <a className="facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img className="facebook-icon socials-icon" src="/facebook-icon.svg" alt="Facebook icon" />
              </a>
              <a className="twitterx" href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <img className="twitterx-icon socials-icon" src="/x-icon.svg" alt="X icon" />
              </a>
              <a className="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img className="instagram-icon socials-icon" src="/instagram-icon.svg" alt="Instagram icon" />
              </a>
              <a className="youtube" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img className="youtube-icon socials-icon" src="/youtube-icon.svg" alt="Youtube icon" />
              </a>
            </div>
          </div>
          <div className="nav-bottom">
            <Link to="/">
              <img src="/storaid-logo.svg" alt="StorAid logo" />
            </Link>
            <nav className="nav-links">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/about">About Us</NavLink>
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </nav>
            <Button text="Book Now" variant="green" route="/contact" />
          </div>
      </div>
    </>
  )
}

export default Header