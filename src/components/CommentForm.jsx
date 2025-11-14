import React from 'react'
import styles from "./CommentForm.module.css"

function CommentForm({ className }) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
        <label htmlFor="comments" className={styles.label}>
            Comments / Questions <span className={styles.required}>*</span>
        </label>

        <textarea name="comments" id="comments" className={styles.textArea} placeholder="Comments" required ></textarea>
    </div>
  )
}

export default CommentForm