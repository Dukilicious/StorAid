import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className={styles.navWrapper}>
          <div className={styles.navTop}>
            <div className={styles.numberEmail}>
              <div className={styles.numberBox}>
                <i className={`bi bi-telephone-fill ${styles.telephone}`}></i>
                <div className={styles.number}>+46 8 123 122 44</div>
              </div>
              <div className={styles.emailBox}>
                <img className={styles.envelope} src="/envelope-icon.svg" alt="Envelope Icon" />
                <div className={styles.email}>contact@domain.com</div>
              </div>
            </div>
            <div className={styles.navSocials}>
              <div className={styles.facebook}>
                <a className={styles.socialsIcon} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/facebook-icon.svg" alt="Facebook icon" />
                </a>
              </div>
              <div className={styles.twitterX}>
                <a className={styles.socialsIcon} href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/x-icon.svg" alt="X icon" />
                </a>
              </div>
              <div className={styles.instagram}>
                <a className={styles.socialsIcon} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.instagramIcon}src="/instagram-icon.svg" alt="Instagram icon" />
                </a>
              </div>
              <div className={styles.youtube}>
                <a className={styles.socialsIcon} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.youtubeIcon}src="/youtube-icon.svg" alt="Youtube icon" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.navBottom}>
            <Link className={styles.logoLink} to="/">
              <img src="/storaid-logo.svg" alt="StorAid logo" />
            </Link>
            <nav className={styles.navLinks}>
              <NavLink className={styles.navLink} to="/">Home</NavLink>
              <NavLink className={styles.navLink} to="/about">About Us</NavLink>
              <NavLink className={styles.navLink} to="/contact">Contact Us</NavLink>
            </nav>
            <Link to="/">
              <Button text="Book Now" variant="green"/>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Header