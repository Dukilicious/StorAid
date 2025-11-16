import React, {useState, useEffect} from 'react'
import styles from "./Testimonials.module.css"
import TestimonialBox from './TestimonialBox'

function Testimonials({ background }) {

    const [testimonialItems, setTestimonialItems] = useState([])

    const fetchData = async () => {
        const res = await fetch(`https://win25-jsf-assignment.azurewebsites.net/api/testimonials`)
        const data = await res.json()
        setTestimonialItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className={`${styles.wrapper} ${styles[background]}`}>
                <div className={styles.textContainer}>
                    <div className={styles.text1}>Testimonials</div>
                    <div className={styles.text2}>See What Our Clients Have To Say</div>
                    <div className={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</div>
                </div>

                <div className={styles.testimonialContainer}>
                    {testimonialItems.map((item) => (
                        <TestimonialBox key={item.id} item={item} />
                    ))}
                </div>
        </section>
    )
}

export default Testimonials