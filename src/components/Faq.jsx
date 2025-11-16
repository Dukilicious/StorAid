import React, {useState, useEffect} from 'react'
import styles from './Faq.module.css'
import Accordion from './Accordion'

function Faq() {

    const [accordionItems, setAccordionItems] = useState([])
    
    const fetchData = async () => {
        const res = await fetch(`https://win25-jsf-assignment.azurewebsites.net/api/faqs`)
        const data = await res.json()
        setAccordionItems(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>

            <div className={styles.leftContainer}>
                <h4 className={styles.sectionName}>FAQs</h4>
                <h3 className={styles.sectionTitle}>Frequently Ask Questions</h3>
                <p className={styles.sectionParagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>

            <div className={styles.accordionContainer}>
                {accordionItems.map((item, index) => (
                    <Accordion key={item.id} item={item} index={index} />
                ))}
            </div>
              

        </div>
    </section>
  )
}

export default Faq