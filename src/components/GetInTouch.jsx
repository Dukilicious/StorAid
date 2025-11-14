import React from 'react'
import styles from "./GetInTouch.module.css"
import Form from './Form'
import CommentForm from './CommentForm'
import SubmitBtn from './SubmitBtn'

function GetInTouch() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <h4 className={styles.sectionTitle}>Get in Touch</h4>
                <h3 className={styles.title}>Get Personalized Assistance - Contact Us</h3>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <div className={styles.imageContainer}></div>
            </div>

            <form noValidate className={styles.formContainer}>
                <Form label="Your Name" name="name" type="text" placeholder="Your Name" required />
                <div className={styles.emailPhoneContainer}>
                    <Form className={styles.emailPhone} label="Email" name="email" type="email" placeholder="Email" required />
                    <Form className={styles.emailPhone} label="Telephone" name="telephone" type="tel" placeholder="Telephone" />
                </div>
                <Form label="Subject" name="subject" type="text" placeholder="How can we help you" required />
                <CommentForm />
                <div>
                    <SubmitBtn size="wide" />
                </div>
            </form>

        </div>
    </section>
  )
}

export default GetInTouch