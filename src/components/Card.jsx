import React from 'react'
import styles from "./Card.module.css"
import ReadMore from './ReadMore'

function Cards({ item }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={item.imageUrl} alt="" />
      <div className={styles.infoContainer}>

        <div className={styles.dateContainer}>
          <i className={`bi bi-calendar2 ${styles.calendarIcon}`}></i>
          <div className={styles.currentDate}>{item.created}</div>
        
        </div>

        <div className={styles.textContainer}>

          <h6 className={styles.title}>{item.title}</h6>
          <ReadMore className={styles.paragraph}>
            {item.description}
          </ReadMore>
        </div>

      </div>
    </div>
  )
}

export default Cards