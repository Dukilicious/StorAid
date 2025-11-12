import React from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <div className={styles.infoContainer}>

        <div className={styles.dateContainer}>
          <i className={`bi bi-calendar2 ${styles.calendarIcon}`}></i>
          <div className={styles.currentDate}>August 17, 2025</div>
        
        </div>

        <div className={styles.textContainer}>

          <h6 className={styles.title}>Safe and Secure: The Importance of Choosing the Right Storage</h6>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…
          </p>
          <Link className={styles.readMore} to="/about">
          Read more <i className={`bi bi-arrow-right-short ${styles.arrowIcon}`}></i>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Cards