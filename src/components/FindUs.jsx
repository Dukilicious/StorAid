import React from 'react'
import styles from './FindUs.module.css'

function FindUs() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.imgContainer}>
                <img src="/find-us-img.svg" alt="" />
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.sectionTitle}>Find Us On:</h3>
                <p className={styles.sectionParagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <div className={styles.contactContainer}>

                    <div className={styles.contactBox}>
                        <div className={styles.imgBox}>
                            <i className={`bi bi-telephone-fill ${styles.img}`}></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h5 className={styles.title}>Call Center</h5>
                            <p className={styles.paragraph}>+46 8 123 122 44</p>
                        </div>
                    </div>
                    <div className={styles.contactBox}>
                        <div className={styles.imgBox}>
                            <i className={`bi bi-envelope ${styles.img}`}></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h5 className={styles.title}>Email Address</h5>
                            <p className={styles.paragraph}>contact@domain.com</p>
                        </div>
                    </div>
                    <div className={styles.contactBox}>
                        <div className={styles.imgBox}>
                            <i className={`bi bi-geo-alt ${styles.img}`}></i>
                        </div>
                        <div className={styles.textContainer}>
                            <h5 className={styles.title}>Location</h5>
                            <p className={styles.paragraph}>Klarabergsviadukten 90, Stockholm</p>
                        </div>
                    </div>

                </div>

                <div className={styles.socialsContainer}>
                    <h5 className={styles.socialText}>Our Social Media</h5>
                    <div className={styles.line}></div>
                    
                    <div className={styles.linkContainer}>
                        <a className={styles.facebook} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img className={`${styles.facebookIcon} ${styles.socialsIcon}`} src="/facebook-icon.svg" alt="Facebook icon" />
                        </a>
                        <a className={styles.twitterX} href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <img className={`${styles.xIcon} ${styles.socialsIcon}`} src="/x-icon.svg" alt="X icon" />
                        </a>
                        <a className={styles.instagram} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img className={`${styles.instagramIcon} ${styles.socialsIcon}`} src="/instagram-icon.svg" alt="Instagram icon" />
                        </a>
                        <a className={styles.youtube} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <img className={`${styles.youtubeIcon} ${styles.socialsIcon}`} src="/youtube-icon.svg" alt="Youtube icon" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default FindUs