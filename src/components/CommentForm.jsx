import React from 'react'
import styles from "./CommentForm.module.css"

function CommentForm({ className, name, value, onChange, required = false, error }) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
        <label htmlFor="comments" className={styles.label}>
            Comments / Questions <span className={styles.required}>*</span>
        </label>

        <textarea name={name} id={name} value={value} onChange={onChange} className={`${styles.textArea} ${error ? styles.textAreaError : ''}`} placeholder="Comments" required={required} ></textarea>
    </div>
  )
}

export default CommentForm