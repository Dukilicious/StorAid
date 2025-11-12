import React from 'react'
import styles from "./Blog.module.css"
import Cards from './Card'

function Blog() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.textContainer}>
            <h4 className={styles.sectionName}>Latest Blog and News</h4>
            <div className={styles.headingAndParagraph}>
                <h3 className={styles.heading}>Check Out Our Latest Blog and News Update</h3>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
                </p>
            </div>
        </div>

        <div className={styles.cardsContainer}>
            <Cards />
            <Cards />
            <Cards />
        </div>
    </section>
  )
}

export default Blog