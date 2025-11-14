import React from 'react'
import styles from "./Subscribe.module.css"
import { useState } from 'react'
import SubmitBtn from './SubmitBtn'

function Subscribe() {
  const [formData, setFormData] = useState({ email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
              <h3 className={styles.title}>Subscribe Our Newsletter</h3>
              <p className={styles.paragraph}>
                Subscribe to our newsletter to receive early discount offers, updates and info 
              </p>
          </div>

          <div className={styles.submitContainer}>
            <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
            <SubmitBtn />
          </div>
        </div>

    </form>
  )
}

export default Subscribe