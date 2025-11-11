import React from 'react'
import styles from "./ChooseUs.module.css"

function ChooseUs({ bgColor }) {
  return (
    <section className={`${styles.wrapper} ${styles[bgColor]}`}>

            <div className={styles.topContainer}>
                <div className={styles.sectionTitle}>Why Choose Us</div>
                <div className={styles.sectionBox}>
                    <div className={styles.sectionText1}>
                        Choose Us for Exceptional Storage Solutions
                    </div>
                    <p className={styles.sectionText2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
                    </p>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.infoBox}>
                    <div className={styles.info1}>
                        <div className={styles.iconBox}>
                            <img className={styles.icon} src="/lock-icon.svg" alt="Lock icon" />
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.infoTitle}>Security and Safety</div>
                            <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className={styles.info1}>
                        <div className={styles.iconBox}>
                            <img className={styles.icon} src="/moneybag-icon.svg" alt="Money Icon" />
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.infoTitle}>Flexible and Affordable</div>
                            <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className={styles.info1}>
                        <div className={styles.iconBox}>
                            <img className={styles.icon} src="/broom-icon.svg" alt="Broom icon" />
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.infoTitle}>Clean and Well-Maintained Facilities</div>
                            <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className={styles.info1}>
                        <div className={styles.iconBox}>
                            <img className={styles.icon} src="/clock-icon.svg" alt="Clock icon" />
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.infoTitle}>Security and Safety</div>
                            <p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageBox}></div>
            </div>
            
    </section>
  )
}

export default ChooseUs