import React from 'react'
import styles from "./Pricing.module.css"
import PriceList from './PriceList'

function Pricing() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.text1}>Pricing Plan</div>
                <div className={styles.text2}>Find the Perfect Plan For Your Storage Needs</div>
            </div>

            <div className={styles.priceListContainer}>
                <PriceList price="50" size="Small" />
                <PriceList price="100" size="Medium" />
                <PriceList price="150" size="Large" />
                <PriceList price="200" size="Executive" />
            </div>
        </div>
    </section>
  )
}

export default Pricing