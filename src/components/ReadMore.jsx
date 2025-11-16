import { useState } from "react"
import styles from './ReadMore.module.css'

function ReadMore({ children, maxChars = 150, className }) {
  const [expanded, setExpanded] = useState(false);
  const text = String(children);

  const displayText = expanded
    ? text
    : text.substring(0, maxChars) + "...";

  return (
    <div className={styles.wrapper}>
      <p className={className}>{displayText}</p>
      <button className={styles.readMore} type="button" onClick={() => setExpanded(!expanded)}>{expanded ? "Read Less" : "Read More"}
        <i className={`bi bi-arrow-right ${styles.arrowIcon}`}></i> 
      </button>
    </div>
  )
}

export default ReadMore