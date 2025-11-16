import React from 'react'
import styles from "./Form.module.css"

function Form({ label, name, type, placeholder, value, required = false, className, onChange, error }) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
        <label htmlFor={name} className={styles.label}>
            {label} {required && <span className={styles.required}>*</span>}
        </label>

        <input id={name} type={type} name={name} className={`${styles.input} ${error ? styles.inputError : ""}`} placeholder={placeholder} value={value} onChange={onChange} required={required} />
    </div>
  )
}

export default Form