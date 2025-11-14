import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>

            <p className={styles.copyright}>© 2025 StorAid, All rights reserved.</p>
            
            <div className={styles.rightContainer}>
                <div className={styles.textContainer}>
                    <img src="/chevron.svg" alt="" />
                    <p className={styles.text}>Terms & Conditions</p>
                </div>

                <div className={styles.textContainer}>
                    <img src="/chevron.svg" alt="" />
                    <p className={styles.text}>Privacy Policy</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer