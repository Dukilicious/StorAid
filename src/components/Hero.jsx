import React from 'react'
import styles from "./Hero.module.css"
import Button from "./Button"

function Hero() {
  return (
    <section className={styles.heroWrapper}>
        <div className={styles.heroInfo}>
            <div className={styles.text1}>Welcome to StorAid</div>
            <h1 className={styles.heroH1}>Space simplified, Storage Perfected</h1>
            <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</div>
            <Button text="Discover More" size="bookDiscover" variant="white" />
        </div>
        <img className={styles.heroImage} src="/hero-image.svg" alt="" />
    </section>
  )
}

export default Hero