import React from 'react'
import styles from "./Banner.module.css"

function Banner({ title, paragraph }) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
    </div>
  )
}

export default Banner