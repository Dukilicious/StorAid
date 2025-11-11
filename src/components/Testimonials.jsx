import React from 'react'
import styles from "./Testimonials.module.css"

function Testimonials({ background }) {
  return (
        <section className={`${styles.wrapper} ${styles[background]}`}>
                <div className={styles.textContainer}>
                    <div className={styles.text1}>Testimonials</div>
                    <div className={styles.text2}>See What Our Clients Have To Say</div>
                    <div className={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</div>
                </div>
                <div className={styles.testimonialContainer}>
                    <div className={`${styles.leftTestimonial} ${styles.testimonialBox}`}>
                        <div className={styles.starsIcon}>
                            <img src="/4-stars.svg" alt="4 star rating image" />
                        </div>
                        <div className={styles.userComment}>
                            Lorem ipsum dolor sit amet, consectetur adipis 
                            cing elit. Ut libero lectus, porta nec turpis sit 
                            amet, lobortis fringilla ante.
                        </div>
                        <div className={styles.userContainer}>
                            <div className={styles.userPicture}></div>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Aiden Harvey</div>
                                <div className={styles.customer}>Customer</div>
                            </div>
                        </div>
                        <div className={styles.quotationIcon}>
                            <img src="/quotation-icon.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={`${styles.middleTestimonial} ${styles.testimonialBox}`}>
                        <div className={styles.starsIcon}>
                            <img src="/5-stars.svg" alt="4 star rating image" />
                        </div>
                        <div className={styles.userComment}>
                            Lorem ipsum dolor sit amet, consectetur adipis 
                            cing elit. Ut libero lectus, porta nec turpis sit 
                            amet, lobortis fringilla ante.
                        </div>
                        <div className={styles.userContainer}>
                            <div className={styles.userPicture}></div>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Carrisa Jocelyn</div>
                                <div className={styles.customer}>Customer</div>
                            </div>
                        </div>
                        <div className={styles.quotationIcon}>
                            <img src="/quotation-icon.svg" alt="icon" />
                        </div>
                    </div>
                    <div className={`${styles.rightTestimonial} ${styles.testimonialBox}`}>
                        <div className={styles.starsIcon}>
                            <img src="/5-stars.svg" alt="4 star rating image" />
                        </div>
                        <div className={styles.userComment}>
                            Lorem ipsum dolor sit amet, consectetur adipis 
                            cing elit. Ut libero lectus, porta nec turpis sit 
                            amet, lobortis fringilla ante.
                        </div>
                        <div className={styles.userContainer}>
                            <div className={styles.userPicture}></div>
                            <div className={styles.userInfo}>
                                <div className={styles.userName}>Celvin Gabriel</div>
                                <div className={styles.customer}>Customer</div>
                            </div>
                        </div>
                        <div className={styles.quotationIcon}>
                            <img src="/quotation-icon.svg" alt="icon" />
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default Testimonials