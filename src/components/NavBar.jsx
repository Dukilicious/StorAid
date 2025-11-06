import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <nav className={styles.navWrapper}>
          <div className={styles.navTop}>
            <div className={styles.numberEmail}>
              <div className={styles.number}>
                <i className={`bi bi-telephone-fill ${styles.telephone}`}></i>
                <div>+46 8 123 122 44</div>
              </div>
              <div className={styles.email}>
                <img className={styles.envelope} src="/envelope-icon.svg" alt="Envelope Icon" />
                <div>contact@domain.com</div>
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
            <img src="/storaid-logo.svg" alt="" />
            <div className={styles.navLinks}>
              
            </div>
            
          </div>
      </nav>
    </>
  )
}

export default NavBar