import React from 'react'
import styles from "./SubmitBtn.module.css"

function SubmitBtn({ size }) {
  return (
    <button type="submit" className={`${styles.button} ${styles[size]}`}>Submit</button>
  )
}

export default SubmitBtn