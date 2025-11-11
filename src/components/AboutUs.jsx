import React from 'react'
import styles from "./AboutUs.module.css"
import Tiles from "./Tiles"
import Button from './Button'

function AboutUs() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.leftContainer}>
            <div className={styles.bgImage}>
                <div className={styles.ourExperience}>
                    <div className={styles.experienceBox}>
                        <div className={styles.numbers}>12+</div>
                        <div className={styles.text}>Years of Experience</div>
                    </div>
                    <div className={styles.experienceBox}>
                        <div className={styles.numbers}>150K+</div>
                        <div className={styles.text}>Satisfied Clients</div>
                    </div>
                    <div className={styles.experienceBox}>
                        <div className={styles.numbers}>35+</div>
                        <div className={styles.text}>Warehouses</div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.rightContainer}>
            <div className={styles.text1}>About Us</div>
            <div className={styles.text2}>Providing a Safe Space for Your Treasured Items</div>
            <div className={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</div>
            <div className={styles.tilesContainer}>
                <Tiles
                size="small"
                title="Vision"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."
                />
                <Tiles
                size="small" 
                title="Mission"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium."
                />
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.button}>
                    <Button text="Discover More" variant="green" route="/about" />
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.iconContainer}>
                        <i className={`bi bi-telephone-fill ${styles.telephoneIcon}`}></i>
                    </div>
                    <div className={styles.numberContainer}>
                        <div className={styles.moreInfo}>More Information</div>
                        <div className={styles.phoneNumber}>+46 8 123 122 44</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs