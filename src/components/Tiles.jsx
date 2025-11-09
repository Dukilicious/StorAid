import React from 'react'
import styles from "./Tiles.module.css"

function Tiles({ title, text, size }) {

  const tileClass = `${styles.tile} ${styles[size]}`;

  return (
    <div className={tileClass}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}

export default Tiles