// Accordion.jsx
import React from "react";
import styles from "./Accordion.module.css";

function Accordion({ item, index }) {
  const inputId = `accordion-${index}`;

  return (
    <div className={styles.accordion}>
      <input type="radio" name="accordion" id={inputId} className={styles.accordionInput} />
      <label htmlFor={inputId} className={styles.accordionLabel}>{item.title}
        <div>
          <span className={styles.accordionIcon}>
            <i className={`bi bi-chevron-down ${styles.chevronIcon}`}></i>
          </span>
        </div>
      </label>
      <div className={styles.accordionContent}>
        {item.description}
      </div>
    </div>
  );
}

export default Accordion