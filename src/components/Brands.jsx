import React from 'react'
import styles from "./Brands.module.css"

function Brands() {
  return (
    <section className={styles.brandsWrapper}>
        <img src="/brands1.svg" alt="Logo" />
        <img src="/brands2.svg" alt="Logo" />
        <img src="/brands3.svg" alt="Logo" />
        <img src="/brands4.svg" alt="Logo" />
        <img src="/brands5.svg" alt="Logo" />
    </section>
  )
}

export default Brands