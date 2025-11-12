import React from 'react'
import styles from "./LookingForSecure.module.css"
import Button from "./Button"

function LookingForSecure() {
  return (
    <section className={styles.wrapper}>
        <h3 className={styles.title}>Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.</h3>
        <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>
        <Button text="Book Now" variant="white" route="/contact" />
    </section>
  )
}

export default LookingForSecure