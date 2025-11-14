import React from 'react'
import styles from "./Form.module.css"

function Form({ label, name, type = "text", placeholder, value, required = false, className }) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
        <label htmlFor={name} className={styles.label}>
            {label} {required && <span className={styles.required}>*</span>}
        </label>

        <input id={name} type={type} name={name} className={styles.input} placeholder={placeholder} value={value} required={required} />
    </div>
  )
}

export default Form