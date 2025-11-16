import React from 'react'
import { useState } from 'react'
import styles from "./GetInTouch.module.css"
import Form from './Form'
import CommentForm from './CommentForm'
import SubmitBtn from './SubmitBtn'

function GetInTouch() {

  const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
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


    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phoneNumber: '', subject: '', comment: '' })
    } 
  }

   if (submitted) {
      return (
        <div className={styles.submitBox}>
          <h1 className={styles.submitTitle}>Thank you for contacting us!</h1>
          <p className={styles.submitParagraph}>We will answer you as soon as we can.</p>
          <button className={styles.submitButton} onClick={handleOk}>OK</button>
        </div>   
      )
    }

  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <h4 className={styles.sectionTitle}>Get in Touch</h4>
                <h3 className={styles.title}>Get Personalized Assistance - Contact Us</h3>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <div className={styles.imageContainer}></div>
            </div>

            <form onSubmit={handleSubmit} noValidate className={styles.formContainer}>

                <div className={styles.formGroup}>
                    <Form label="Your Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} type="text" placeholder="Your Name" required />
                    <span className={styles.errorText}>{errors.name && errors.name}</span>
                </div>

                <div className={styles.emailPhoneContainer}>
                    <div className={`${styles.formGroup} ${styles.emailGroup}`}>
                        <Form className={styles.emailPhone} label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} type="email" placeholder="Email" required />
                        <span className={styles.errorText}>{errors.email && errors.email}</span>
                    </div>
                    <Form className={styles.phone} label="Telephone" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" placeholder="Telephone" />
                </div>

                <div className={styles.formGroup}>
                    <Form label="Subject" name="subject" value={formData.subject} onChange={handleChange} error={errors.subject} type="text" placeholder="How can we help you" required />
                    <span className={styles.errorText}>{errors.subject && errors.subject}</span>
                </div>
                <div className={`${styles.formGroup} ${styles.commentGroup}`}>
                    <CommentForm className={styles.commentForm} name="comment" value={formData.comment} onChange={handleChange} error={errors.comment} required />
                    <span className={styles.errorText}>{errors.comment && errors.comment}</span>
                </div>
                <div>
                    <SubmitBtn size="wide" />
                </div>
            </form>

        </div>
    </section>
  )
}

export default GetInTouch