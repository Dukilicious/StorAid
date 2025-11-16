import React from 'react'
import styles from "./Subscribe.module.css"
import { useState } from 'react'
import SubmitBtn from './SubmitBtn'

function Subscribe() {
  const [formData, setFormData] = useState({ email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required`}))
    } else {
      setErrors(prevErrors => ({...prevErrors, [name]: ''}))
    }
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newErrors[field] = `The ${field} field is required`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }


    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ email: '' })
      setErrors({})
    } 
  }

  if (submitted) {
    return (
      <div className={styles.submitBox}>
        <h1 className={styles.submitTitle}>You are now subscibed to the newsletter!</h1>
        <button className={styles.submitButton} onClick={handleOk}>OK</button>
      </div>   
    )
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit} noValidate>
      
        <div className={styles.container}>
          <div className={styles.textContainer}>
              <h3 className={styles.title}>Subscribe Our Newsletter</h3>
              <p className={styles.paragraph}>
                Subscribe to our newsletter to receive early discount offers, updates and info 
              </p>
          </div>

          <div className={styles.submitContainer}>
            <div className={styles.formGroup}>
              <input className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Enter Your Email" 
              />
              <span className={styles.errorText}>{errors.email && errors.email}</span>
            </div>
            <SubmitBtn />
          </div>
        </div>

    </form>
  )
}

export default Subscribe