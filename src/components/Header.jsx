import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="navWrapper">
          <div className="navTop">
            <div className="numberEmail">
              <div className="numberBox">
                <i className={`bi bi-telephone-fill ${"telephone"}`}></i>
                <div className="number">+46 8 123 122 44</div>
              </div>
              <div className="emailBox">
                <img className="envelope" src="/envelope-icon.svg" alt="Envelope Icon" />
                <div className="email">contact@domain.com</div>
              </div>
            </div>
            <div className="navSocials">
              <div className="facebook">
                <a className="socialsIcon" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook-icon.svg" alt="Facebook icon" />
                </a>
              </div>
              <div className="twitterX">
                <a className="socialsIcon" href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/x-icon.svg" alt="X icon" />
                </a>
              </div>
              <div className="instagram">
                <a className="socialsIcon" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img className="instagramIcon" src="/instagram-icon.svg" alt="Instagram icon" />
                </a>
              </div>
              <div className="youtube">
                <a className="socialsIcon" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img className="youtubeIcon" src="/youtube-icon.svg" alt="Youtube icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="navBottom">
            <Link to="/">
              <img src="/storaid-logo.svg" alt="StorAid logo" />
            </Link>
            <nav className="navLinks">
              <NavLink className="navLink" to="/">Home</NavLink>
              <NavLink className="navLink" to="/about">About Us</NavLink>
              <NavLink className="navLink" to="/contact">Contact Us</NavLink>
            </nav>
            <div>
              <Button text="Book Now" size="bookDiscover" />
            </div>
          </div>
      </div>
    </>
  )
}

export default Header